import styles from "../assets/App.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export function FooterSection() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={[
        styles["site-footer__container"], 
        styles["__limit-width"]
      ].join(" ")}>
        <div className={styles["site-footer__socials"]}>
          <a href="https://github.com/jmichaelmenina/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className={styles["site-footer__credits"]}>
          <p>
            The seal used in this website representing the <strong>University of the Philippines</strong> is owned and trademarked by the respective entity it represents. I claim no ownership of any currently trademarked or copyrighted materials.
          </p>
          <p>
            The design of this website and its logo are provided by myself. This website is not monetized by myself in any way.
          </p>
        </div>
      </div>
    </footer>
  );
}