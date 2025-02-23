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
            The images (i.e. logos) in this website that are being used to represent the <strong>University of the Philippines</strong>, <strong>Navagis Asia Pacific PTE Ltd. - Philippine Branch Office</strong>, <strong>Algorithms and Complexity Laboratory</strong>, and <strong>University of Perpetual Help System DALTA Las Piñas</strong> are owned and trademarked by the respective entities each logo is meant to represent.
          </p>
          <p>
            I claim no ownership of any trademarked or copyrighted materials that are used in this website. Furthermore, these materials are not being used for any kind of monetization.
          </p>
          <p>
            The design of this website and its logo are provided by myself. This website is not monetized by myself in any way.
          </p>
        </div>
      </div>
    </footer>
  );
}