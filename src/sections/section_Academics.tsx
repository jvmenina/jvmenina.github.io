import styles from "../assets/App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import useElementOnScreen from "./IntersectionObserver.tsx";

import up_logo from "/images/up_logo.svg";

function UniversityComp() {
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div ref={containerRef} className={[
      styles.__card,
      styles["academics__university"], 
      isVisible ? styles["__visible"] : styles["__not-visible"]
    ].join(" ")}>
      <img
        src={up_logo}
        alt="Logo of University of the Philippines" 
        loading="lazy" 
      />
      <div className={styles.academics__university__details}>
        <p className={styles.academics__university__details__title}>
          University of the Philippines Diliman
        </p>
        <div className={styles.academics__university__details__subtitle}>
          <span className={styles["academics__university__details__subtitle__degree"]}>Bachelor of Science in Computer Science</span>
          <hr />
          <span className={styles["academics__university__details__subtitle__date"]}>August 2024</span>
        </div>
        <div className={styles["academics__university__details__body"]}>
          <ul>
            <li>Graduated with <strong>Cum Laude Honors</strong> with GWA of 1.73</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ThesisComp() {
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div>
      <h3>Undergraduate Thesis</h3>
      <div ref={containerRef} className={[
        styles.__card, 
        styles["academics__thesis"],
        isVisible ? styles["__visible"] : styles["__not-visible"]
      ].join(" ")}>
        <p className={styles.academics__thesis__title}>
          Spiking Neural P Systems in Generating Chain Code Pictures for Finite
          Approximations of Hilbert and Sierpin&#769;ski Curves
        </p>
        <dl className={styles.academics__thesis__details}>
          <dt>Research Adviser:</dt>
          <dd>Dr. Francis George Cabarle</dd>
          <dt>Research Department:</dt>
          <dd>Algorithms and Complexity Laboratory, Department of Computer Science</dd>
          <dt>Status:</dt>
          <dd>Complete with achieved grade of 1.0</dd>
          <dt>Description:</dt>
          <dd>
            <p>
              Generating space-filling curves using a relatively unexplored
              computing model inspired by biological systems that is capable of
              maximizing parallelization in hopes of improving computational efficiency in solving difficult computing problems.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export function AcademicsSection() { 
  return (
    <section className={styles.academics}>
      <NavigationAnchor id="Academics" />
      <div className={[
        styles["__section-container"], 
        styles["__limit-width"]
      ].join(" ")}>
        <h2>Academic Background</h2>
        <div className={styles["__section-contents"]}>
          <UniversityComp />
          <ThesisComp />
        </div>
      </div>
    </section>
  );
}
