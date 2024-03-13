import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";

export function HeaderSection() {
  const time = new Date().getHours();
  let greeting_message: string = "Good ";
  if (time < 12) greeting_message += "Morning";
  else if (time === 12) greeting_message += "Noon";
  else if (time > 12 && time <= 18) greeting_message += "Afternoon";
  else greeting_message += "Evening";

  return (
    <header className={styles['site-header']}>
      <NavigationAnchor id="Top" />
      <div className={[
        styles['site-header__container'], 
        styles['__limit-width']
      ].join(" ")}>
        <div className={styles['site-header__text-content']}>
          <div className={styles['site-header__greeting']}>
            {greeting_message}! My name is
          </div>
          <h1>Jan Michael <span>Menina</span></h1>
          <div className={styles['site-header__chips']}>
            <span>Software Developer</span>
            <span>Web Developer</span>
            <span>Membrane Computing Researcher</span>
          </div>
        </div>
      </div>
    </header>
  );
}
