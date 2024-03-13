import styles from "./App.module.css";

export function NavigationAnchor({ id }: { id: string; }) {
  return (
    <div id={id} className={styles.__anchor}></div>
  );
}
