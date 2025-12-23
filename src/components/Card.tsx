import { joinStyles } from "../utils/joinStyles";

import coreStyles from "../assets/core.module.css";

/**
 * A generic card
 */

export function CardComponent({
  additionalClassNames,
  cardRef,
  customStyle,
  children,
} : {
  additionalClassNames?: string[],
  cardRef?: React.RefObject<HTMLDivElement>,
  customStyle?: React.CSSProperties,
  children: string | JSX.Element | JSX.Element[],
}) {
  return (
    <div style={customStyle} ref={cardRef} className={joinStyles(
      coreStyles.comp__card
      , ...(additionalClassNames ?? [])
    )}>
      {children}
      <div className={coreStyles.comp__card__bg}></div>
    </div>
  );
}