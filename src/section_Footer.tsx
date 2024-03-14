import styles from "./App.module.css";

export function FooterSection() {
  return (
    <footer className={styles['site-footer']}>
      <div className={[
        styles['site-footer__container'], 
        styles['__limit-width']
      ].join(" ")}>
        <div className={styles['site-footer__socials']}></div>
        <div className={styles['site-footer__credits']}>
          <p>
            The seals representing the <strong>University of the Philippines</strong> and the <strong>Department of Science and Technology - Science Education Institute </strong> are owned and trademarked by the respective entities they represent; I claim no ownership of these seals.
          </p>
          <p>
            The design of this website, its logo, and my personal photo are provided by myself and can be seen <a href="https://github.com/jmichaelmenina/jmichaelmenina.github.io/" target="_blank" rel="noreferrer">here</a>. This website is not monetized by myself in any way.
          </p>
        </div>
      </div>
    </footer>
  );
}