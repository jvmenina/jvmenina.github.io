import { useEffect, useState, useRef } from "react";
import { joinStyles } from "../utils/joinStyles";

import { TypewriterComponent } from "../components/AnimationComponents";

import coreStyles from "../assets/core.module.css";

/**
 * A section with generic classes
 */

type AppSectionProps = {
  isActive: boolean
  classNames: string[],
  headingText: string, 
  sectionContents: JSX.Element,
  unboundedSectionContents?: JSX.Element,
  disableScrollToTopOnView?: boolean,
  sectionRef: React.RefObject<HTMLElement>,
}

export function AppSection({
  isActive,
  classNames,
  headingText,
  sectionContents,
  unboundedSectionContents,
  disableScrollToTopOnView,
  sectionRef
} : AppSectionProps) {
  // Scroll to relevant content if there is a hash in the URL, otherwise, scroll to the top
  disableScrollToTopOnView = true; // Force disable for now
  // const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (sectionRef.current && !disableScrollToTopOnView) sectionRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [disableScrollToTopOnView, isActive, sectionRef]);

  // If section was viewed for the first time, make first children of contents div play a slide-in animation, each
  const [ wasLoadedBefore, setWasLoadedBefore ] = useState<boolean>(false);
  const sectionContentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {if (isActive) {
    const animationDelay = "500";
    const componentDelay = "100";
    setWasLoadedBefore(true);
    if (sectionContentsRef && sectionContentsRef.current) {
      let directChildren = Array.from(sectionContentsRef.current.children);
      if (directChildren.length == 1) directChildren = Array.from(directChildren[0].children);
      directChildren.forEach((child, index) => {
        if (
          child instanceof HTMLElement 
          && !(
            child.classList.toString().includes("__not-visible")
            || child.classList.toString().includes("__visible")
          )
        ) {
          child.style.opacity = "0";
          child.classList.add(coreStyles['__slide-in']);
          child.style.animationDelay = `calc(${index} * ${componentDelay}ms + ${animationDelay}ms)`;
        }
      });
    }
  }}, [isActive]);

  if (!isActive && !wasLoadedBefore) return;

  return (
    <section ref={sectionRef} className={joinStyles(
      ...classNames
      , isActive ? coreStyles["__section--expanded"] : coreStyles["__section--collapsed"]
    )}>
      <div className={joinStyles(
        coreStyles["__section__container"]
        , coreStyles["__limit-width"]
      )}>
        <h2 
          className={coreStyles.__section__header}
        >
          michael:\&gt; <TypewriterComponent 
            text={headingText}
            characterInterval={30}
            animationDelay={250}
          />
        </h2>
        <div 
          className={coreStyles["__section__container__contents"]} 
          ref={sectionContentsRef}
        >
          {sectionContents}
        </div>
      </div>
      <div 
        className={"__section__container--unbounded"}
      >
        {
          unboundedSectionContents 
          ? unboundedSectionContents 
          : <></>
        }
      </div>
    </section>
  )
}
