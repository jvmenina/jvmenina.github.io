import coreStyles from "../assets/core.module.css";
import { joinStyles } from "../utils/joinStyles";

export function TooltipComponent({ tip, children, classNames }: { 
  tip: string | JSX.Element | JSX.Element[],
  children : string | JSX.Element | JSX.Element[],
  classNames?: string,
}) {
  return (
    <div className={joinStyles(coreStyles.comp__tooltip__parent, classNames ?? "")}>
      <span className={coreStyles.comp__tooltip__tip}>{tip}</span>
      {children}
    </div>
  );
}