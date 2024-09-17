import { useRef, useEffect, useState, useCallback } from "react";

const useElementOnScreen = ({
  root = window.document,
  rootMargin = "-50px 0px -50px 0px",
  threshold = 0,
  // threshold = 0.2,
}: {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number;
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // const callbackFunction = (entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries;
  //   setIsVisible(isVisible || entry.isIntersecting);
  // };

  const callbackFunction = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, []);
  
  // const callbackFunction = useCallback((entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries;
  //   setIsVisible(isVisible || entry.isIntersecting);
  // }, [isVisible]);

  useEffect(() => {
    const options = {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    const curr = containerRef.current;

    if (curr) 
      observer.observe(curr);

    return () => {
      if (curr)
        observer.unobserve(curr);
    };
  }, [containerRef, callbackFunction, root, rootMargin, threshold]);

  return { containerRef: containerRef, isVisible: isVisible };
};

export default useElementOnScreen;
