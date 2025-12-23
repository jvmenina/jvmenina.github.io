import coreStyles from "../assets/core.module.css";

export function NavigationAnchor({ id }: { id: string; }) {
  return (
    <div id={id} className={coreStyles.__anchor}></div>
  );
}
