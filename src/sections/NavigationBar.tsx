import { useRef, useEffect, useState, useCallback } from "react";
import styles from "../assets/App.module.css";

import site_logo from "/images/site_logo.svg";

function useOutsideNavClickHandler(
  nav_list_ref: React.MutableRefObject<Node | null>,
  nav_toggle_ref: React.MutableRefObject<Node | null>,
  _disableNav: () => void
) {
  const disableNav = useCallback(() => {_disableNav()}, [_disableNav]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      /**
       * Can also do...
       * 
       * if (
       *   !nav_list_ref.current!.contains(event.target as HTMLElement)
       *   && !nav_toggle_ref.current!.contains(event.target as HTMLElement)
       * ) {
       */

      if (
        nav_list_ref.current 
        && nav_toggle_ref.current
        && !nav_list_ref.current.contains(event.target as HTMLElement)
        && !nav_toggle_ref.current.contains(event.target as HTMLElement)
        ) {
        disableNav();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav_list_ref, nav_toggle_ref, disableNav]);
}

export function NavigationBar() {
  const [ check, setCheck ] = useState<boolean>(false);
  
  const disableNav = useCallback(() => {setCheck(false)}, []);
  // const enableNav = useCallback(() => {setCheck(true)}, []);
  // Note: StrictMode makes it so that "setState"s are called twice
  const toggleNav = useCallback(() => {setCheck((prev) => (!prev))}, []);

  const nav_list_ref = useRef(null);
  const nav_toggle_ref = useRef(null);
  useOutsideNavClickHandler(nav_list_ref, nav_toggle_ref, disableNav);

  const nav_list_links = (
    <>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Top">Top</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#About">About</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Academics">Academics</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Credentials">Credentials</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Experiences">Experience</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Projects">Projects</a></li>
    </>
  );

  const [ navHidden, setNavHidden ] = useState<boolean>(false);
  const [ prevScrollPosition, setPrevScrollPosition ] = useState<number>(window.scrollY);

  window.addEventListener("scroll", () => {
    if (prevScrollPosition - window.scrollY > 0 || window.scrollY <= 100) 
      setNavHidden(false);
    else if (prevScrollPosition - window.scrollY < 0)
      setNavHidden(true);
    setPrevScrollPosition(window.scrollY);
  })

  return (
    <nav 
      className={[
        styles["nav"],
        navHidden ? styles["nav--hidden"] : ""
      ].join(" ")}
    >
      <div className={[
        styles["nav__container"], 
        styles["__limit-width"]
      ].join(" ")}>
        {/* Logo */}
        <a className={styles["nav__container__logo"]} onClick={() => {disableNav}} href="#Top">
          <img 
            className={styles["nav__container__logo__img"]} 
            src={site_logo} 
            alt="Site logo" 
            // loading="lazy" 
          />
        </a>

        {/* Mobile menu button */}
        <div
          className={[
            styles["nav__container__button"],
            check ? styles["nav__container__button--active"] : "",
          ].join(" ")}
          onClick={() => {toggleNav()}}
          ref={nav_toggle_ref}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation menu */}
        <div className={styles["nav__container__nav"]}>
          <ul
            className={[
              styles["nav__container__nav__nav-list"],
              check ? styles["nav__container__nav__nav-list--mobile-active"] : "" 
            ].join(" ")}
            ref={nav_list_ref}
          >
            {nav_list_links}
          </ul>
        </div>
      </div>
    </nav>
  );
}
