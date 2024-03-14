import styles from "./App.module.css";
import useElementOnScreen from "./IntersectionObserver.tsx";
import { NavigationAnchor } from "./NavigationAnchor.tsx";

type ExperienceProps = {
  company: string;
  work: string;
  location: string;
  year: string;
  description: string[];
};

function ExperienceComp(props: ExperienceProps) {
  const {
    company,
    work,
    location,
    year,
    description,
  }: ExperienceProps = props;

  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <div ref={containerRef} className={[
      styles.__card, 
      styles.experiences__experience,
      isVisible ? styles['__visible'] : styles['__not-visible']
    ].join(" ")}>
      <div className={styles.experiences__experience__details}>
        <span className={styles.experiences__experience__details__company}>
          {company}
        </span>
        <span className={styles.experiences__experience__details__location}>
          {location}
        </span>
        <span className={styles.experiences__experience__details__work}>
          {work}
        </span>
        <span className={styles.experiences__experience__details__year}>
          {year}
        </span>
      </div>
      <ul className={styles.experiences__experience__details__description}>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export function ExperiencesSection() {
  return (
    <section>
      <NavigationAnchor id="Experiences" />
      <div className={[
        styles['__section-container'], 
        styles['__limit-width']
      ].join(" ")}>
        <h2>Experiences</h2>
        <div className={styles['__section-contents']}>
          <ExperienceComp
            company={"Algorithms and Complexity Laboratory, University of the Philippines Diliman"}
            work={"Research Work"}
            location={"Quezon City, Philippines"}
            year={"2021 - Present"}
            description={[
              "Assisted in the development of \"WebSnapse v2\", a visual simulator for \"Spiking Neural P Systems\", as a software tester.",
              "Developed parallel systems that can generate Hilbert and Sierpiński Space-Filling Curves."
            ]}
          />
          <ExperienceComp
            company={"University of Perpetual Help System DALTA Las Piñas"}
            work={"Work Immersion"}
            location={"Las Piñas City, Philippines"}
            year={"2017"}
            description={[
              "Determined proper practices and measures in ensuring safety and health inside workspaces.",
              "Modeled and designed 3D models of mechanical parts with varying complexities.",
              "Performed programming tasks as part of an introductory training to the C language.",
              "Engaged in team-building activities requiring coordination and cooperation.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
