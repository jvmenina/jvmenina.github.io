import { useRef, useEffect, useState, useCallback } from "react";
import styles from "./App.module.css";

import site_logo from "/images/site_logo.svg";

function useOutsideNavHandler(
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
  useOutsideNavHandler(nav_list_ref, nav_toggle_ref, disableNav);

  const nav_list_links = (
    <>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#About">About</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Academics">Academics</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Projects">Projects</a></li>
      <li><a 
        onClick={() => {disableNav()}} 
        href="#Experiences">Experiences</a></li>
    </>
  );

  return (
    <nav className={styles['site-nav']}>
      <div className={[
        styles['site-nav__container'], 
        styles['__limit-width']
      ].join(" ")}>
        <a className={styles['site-nav__container__logo']} onClick={() => {disableNav}} href="#Top">
          <img 
            className={styles['site-nav__container__logo__img']} 
            src={site_logo} 
            alt="Site logo" 
            // loading="lazy" 
          />
        </a>
        <div
          className={[
            styles['site-nav__container__button'],
            check ? styles['site-nav__container__button--active'] : "",
          ].join(" ")}
          onClick={() => {toggleNav()}}
          ref={nav_toggle_ref}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles['site-nav__container__nav']}>
          <ul
            className={[
              styles['site-nav__container__nav__nav-list--generic'],
              styles['site-nav__container__nav__nav-list'], 
            ].join(" ")}
            ref={nav_list_ref}
          >
            {nav_list_links}
          </ul>
          <ul
            className={[
              styles['site-nav__container__nav__nav-list--generic'],
              styles['site-nav__container__nav__nav-list--mobile'], 
              check ? styles['site-nav__container__nav__nav-list--mobile--active'] : ""
            ].join(" ")}
            ref={nav_list_ref}
          >
            <li><a 
              onClick={() => {disableNav()}} 
              href="#Top">Home</a></li>
            {nav_list_links}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// could make a nav menu at the bottom as a circle that can be expanded on tap