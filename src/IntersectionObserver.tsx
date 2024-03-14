import { useRef, useEffect, useState, useCallback } from "react";

export const useElementOnScreen = (options: {
  root: Element | Document | null;
  rootMargin: string;
  threshold: number;
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // const callbackFunction = (entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries;
  //   setIsVisible(isVisible || entry.isIntersecting);
  // };

  const callbackFunction = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(isVisible || entry.isIntersecting);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const curr = containerRef.current;

    if (curr) 
      observer.observe(curr);

    return () => {
      if (curr)
        observer.unobserve(curr);
    };
  }, [containerRef, options, callbackFunction]);

  return { containerRef: containerRef, isVisible: isVisible };
};

export default useElementOnScreen;
