import { useRef, useEffect, useState, useCallback } from "react";
import { useSections } from "../hooks/CustomHooks";

import { joinStyles } from "../utils/joinStyles";

import coreStyles from "../assets/core.module.css";
import navStyles from "../assets/nav.module.css";

function useOutsideNavClickHandler(
  navListRef: React.RefObject<Node | null>,
  navToggleRef: React.RefObject<Node | null>,
  _disableNav: () => void
) {
  // Note: Use MutableRefObject if needed

  const disableNav = useCallback(() => {_disableNav()}, [_disableNav]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      /**
       * Can also do...
       * 
       * if (
       *   !navListRef.current!.contains(event.target as HTMLElement)
       *   && !navToggleRef.current!.contains(event.target as HTMLElement)
       * ) {
       */

      if (
        navListRef.current 
        && navToggleRef.current
        && !navListRef.current.contains(event.target as HTMLElement)
        && !navToggleRef.current.contains(event.target as HTMLElement)
        ) {
        disableNav();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navListRef, navToggleRef, disableNav]);
}

export function NavigationBar(
  // {sectionSwitcher: switchTo } : { sectionSwitcher : SectionSwitcherType}
) {
  const { sectionContexts, navContexts } = useSections();
  const switchTo = sectionContexts.sectionSwitcher;
  const activeIndex = navContexts.activeIndex;
  const setActiveIndex = navContexts.setActiveIndex;

  /**
   * Handle mobile nav button
   */
  const [ mobileNavIsOpen, setMobileNavIsOpen ] = useState<boolean>(false);
  const disableNav = useCallback(() => {setMobileNavIsOpen(false)}, []);
  // const enableNav = useCallback(() => {setMobileNavIsOpen(true)}, []);
  // Note: StrictMode makes it so that "setState"s are called twice
  const toggleNav = useCallback(() => {setMobileNavIsOpen((prev) => (!prev))}, []);

  /**
   * Handle taps (clicks) outside mobile nav
   */
  const navListRef = useRef(null);
  const navToggleRef = useRef(null);
  useOutsideNavClickHandler(navListRef, navToggleRef, disableNav);

  /**
   * Hides and reveals nav when scrolling down and up, respectively
   */
  const [ navHidden, setNavHidden ] = useState<boolean>(false);
  const [ prevScrollPosition, setPrevScrollPosition ] = useState<number>(window.scrollY);

  window.addEventListener("scroll", () => {
    if (prevScrollPosition - window.scrollY > 0 || window.scrollY <= 100) 
      setNavHidden(false);
    else if (prevScrollPosition - window.scrollY < 0)
      setNavHidden(true);
    setPrevScrollPosition(window.scrollY);
    disableNav();
  })

  /**
   * Handle marker
   */

  // const navRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [markerStyle, setMarkerStyle] = useState<{left: number, width: number}>({ left: 0, width: 0 });
  // const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    disableNav();
    setActiveIndex(index);
    switch (index) {
      case 1:
        switchTo.about();
        break;
      case 2:
        switchTo.academics();
        break;
      case 3:
        switchTo.credentials();
        break;
      case 4:
        switchTo.experiences();
        break;
      case 5:
        switchTo.projects();
        break;
      default:
        switchTo.header();
        break;
    }
  }

  useEffect(() => {
    const navRef = navListRef as React.MutableRefObject<HTMLDivElement | null>;
    const nav = navRef.current;
    if (!nav) return;

    const item = nav.children[activeIndex];
    if (!item) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    setMarkerStyle({
      left: (itemRect.left - navRect.left) + (itemRect.width/2),
      width: itemRect.width,
    });
  }, [activeIndex]);

  /**
   * Output
   */
  // const autoClickRef = useRef<HTMLAnchorElement>(null);
  // useEffect(() => {
  //   if (autoClickRef.current) autoClickRef.current.click()
  // }, []);
  const navListLinks: {
    text: string,
    href?: string,
    anchorRef?: React.RefObject<HTMLAnchorElement>
  }[] = [
    {text: "Top"},
    {text: "About Me"},
    {text: "Academics"},
    {text: "Credentials"},
    {text: "Experience"},
    {text: "Projects"},
  ];

  return (
    <nav 
      className={joinStyles(
        navStyles["nav"],
        navHidden ? navStyles["nav--hidden"] : ""
      )}
    >
      <div className={joinStyles(
        navStyles["nav__container"], 
        coreStyles["__limit-width"]
      )}>
        {/* Mobile menu button */}
        <div
          className={joinStyles(
            navStyles["nav__container__button"],
            mobileNavIsOpen ? navStyles["nav__container__button--active"] : "",
          )}
          onClick={() => {toggleNav()}}
          ref={navToggleRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation menu */}
        <div className={navStyles["nav__container__nav"]}>
          <ul
            className={joinStyles(
              navStyles["nav__container__nav__list"],
              mobileNavIsOpen ? navStyles["nav__container__nav__list--mobile-active"] : "" 
            )}
            ref={navListRef}
          >
            {navListLinks.map((link, index) => (
              <li key={index}><a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(index);
                  window.history.replaceState(null, '', window.location.pathname + window.location.search);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                ref={link.anchorRef}
              >{link.text}</a></li>
            ))}
            <div className={navStyles["nav__marker"]} style={markerStyle}></div>
          </ul>
        </div>
      </div>
      <div className={navStyles.nav__bg}></div>
    </nav>
  );
}
