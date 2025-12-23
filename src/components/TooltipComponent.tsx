import coreStyles from "../assets/core.module.css";

export function TooltipComponent({ tip, children }: { 
  tip: string | JSX.Element | JSX.Element[],
  children : string | JSX.Element | JSX.Element[]
}) {
  return (
    <div className={coreStyles.comp__tooltip__parent}>
      <span className={coreStyles.comp__tooltip__tip}>{tip}</span>
      {children}
    </div>
  );
}