import { 
  useEffect, 
  // useState, 
  // useRef, 
  useCallback,
  useContext,
} from "react";

import { SectionContext, SectionContextSetType } from "../components/SectionContextHandler";

/**
 * Set elements that can toggled to disabled state when a click is registered
 * from outside either the element or the "button" that initially enabled it.
 */

export function useOutsideTargetClickHandler(
  targetElementRef: React.RefObject<Node | null>,
  triggerElementRef: React.RefObject<Node | null>,
  _targetDisabler: () => void
) {
  // Note: Use MutableRefObject if needed

  const targetDisabler = useCallback(() => {_targetDisabler()}, [_targetDisabler]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        targetElementRef.current 
        && triggerElementRef.current
        && !targetElementRef.current.contains(event.target as HTMLElement)
        && !triggerElementRef.current.contains(event.target as HTMLElement)
        ) {
        targetDisabler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [targetElementRef, triggerElementRef, targetDisabler]);
}

/**
 * 
 */

export function useSections() {
  const context = useContext<SectionContextSetType | null>(SectionContext);
  if (!context) {
    throw new Error('Invalid use of useSections! It can only be used within SectionProvider');
  }
  return context;
}
