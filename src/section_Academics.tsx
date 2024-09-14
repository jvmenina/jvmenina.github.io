import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import useElementOnScreen from "./IntersectionObserver.tsx";

import up_seal from "/images/up_seal.svg";
// import dostsei_seal from "/images/dostsei_seal.png";

function UniversityComp() {
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div ref={containerRef} className={[
      styles.__card, styles['academics__card'], 
      styles['academics__card--big'],
      isVisible ? styles['__visible'] : styles['__not-visible']
    ].join(" ")}>
      <img
        src={up_seal}
        alt="University of the Philippines seal" 
        loading="lazy" 
      />
      <dl className={styles.academics__card__details}>
        <dt className={styles.academics__card__details__head}>
          University of the Philippines Diliman
        </dt>
        <dd className={[
          styles['academics__card__details__body--important'], 
          styles['academics__card__details__body--multi-col']
        ].join(" ")}>
          <span>Bachelor of Science in Computer Science</span>
          <hr className={styles['academics__card__details__body--multi-col--line']} />
          <span className={styles['academics__card__details__body--multi-col--it']}>October 2024</span>
        </dd>
        <dd className={styles['academics__card__details__other-info']}>
          <ul>
            <li>Running for <strong>Cum Laude</strong> with Current GWA of 1.7407</li>
          </ul>
        </dd>
      </dl>
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
        styles['academics__thesis'],
        isVisible ? styles['__visible'] : styles['__not-visible']
      ].join(" ")}>
        <div className={styles.academics__thesis__title}>
          Spiking Neural P Systems in Generating Chain Code Pictures for Finite
          Approximations of Hilbert and Sierpin&#769;ski Curves
        </div>
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
        styles['__section-container'], 
        styles['__limit-width']
      ].join(" ")}>
        <h2>Academic Background</h2>
        <div className={styles['__section-contents']}>
          <UniversityComp />
          <ThesisComp />
        </div>
      </div>
    </section>
  );
}
