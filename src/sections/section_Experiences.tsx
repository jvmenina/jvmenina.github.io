import { useSections } from "../hooks/CustomHooks.tsx";

// import { joinStyles } from "../utils/joinStyles.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faCalendar, 
  // faBriefcase 
} from "@fortawesome/free-solid-svg-icons";

import { AppSection } from "./SectionTemplate.tsx";

// import coreStyles from "../assets/core.module.css";
import expStyles from "../assets/experience.module.css";
import { CardComponent } from "../components/Card.tsx";

type ExperienceProps = {
  logo_path: string;
  company: string;
  work: string;
  location: string;
  year: string;
  description: (string|JSX.Element)[];
};

function ExperienceComp(props: ExperienceProps) {
  const {
    logo_path,
    company,
    work,
    location,
    year,
    description,
  }: ExperienceProps = props;

  return (
    <CardComponent
      additionalClassNames={[
        expStyles.experiences__experience,
        // isVisible ? styles["__visible"] : styles["__not-visible"]
      ]}
    >
      <img src={logo_path} alt={`Logo of ${company}`} className={expStyles.experiences__experience__logo} loading="lazy" />
      <div className={expStyles.experiences__experience__details}>
        <h4 className={expStyles.experiences__experience__details__company}>
          {company}
        </h4>
        <span className={expStyles.experiences__experience__details__location}>
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </span>
        <span className={expStyles.experiences__experience__details__work}>
          {work}
          {/* <FontAwesomeIcon icon={faBriefcase} /> {work} */}
        </span>
        <span className={expStyles.experiences__experience__details__year}>
          <FontAwesomeIcon icon={faCalendar} /> {year}
        </span>
      </div>
      <ul className={expStyles.experiences__experience__details__description}>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </CardComponent>
  );
}

function ExperiencesComp() {
  return (
    <>
      <ExperienceComp
        logo_path={"/images/navagis_logo.jpg"}
        company={"Navagis Asia Pacific PTE Ltd. - Philippine Branch Office"}
        work={"Software Engineer Intern"}
        location={"Taguig City, Philippines"}
        year={"July 2024 - August 2024"}
        description={[
          "Completed the Google Cloud Digital Leader course.",
          "Attained credentials on Google Maps Platform Technical and Sales Fundamentals.",
          "Built a full-stack geospatial web application using Google Maps Platform APIs."
        ]}
      />
      <ExperienceComp
        logo_path={"/images/aclab_logo.png"}
        company={"Algorithms and Complexity Laboratory, University of the Philippines Diliman"}
        work={"Research Work"}
        location={"Quezon City, Philippines"}
        year={"September 2021 - May 2022"}
        description={[
          "Developed Spiking Neural P Systems - computing systems capable of being maximally parallel - that can generate Space-Filling Curves.",
          <>Assisted in the development of &quot;WebSnapse v2&quot; (<a href="https://www.researchgate.net/figure/A-screen-of-WebSnapse-V2-with-some-new-features-improved-access-to-edit-parts-eg_fig3_380182615" target="_blank" rel="noreferrer">Screenshot</a>) (<a href="https://aclab.dcs.upd.edu.ph/productions/software/websnapse" target="_blank" rel="noreferrer">Details</a>) (<a href="https://github.com/nccruel/websnapse_extended" target="_blank" rel="noreferrer">GitHub</a>), a visual simulator for Spiking Neural P Systems, as a software tester.</>,
          "Cooperated with fellow researchers by evaluating each others' research projects."
        ]}
      />
      <ExperienceComp
        logo_path={"/images/uphsd_logo.jpg"}
        company={"University of Perpetual Help System DALTA Las Piñas"}
        // company={"University of Perpetual Help System DALTA Las Pi\u{00f1}as"}
        work={"Engineering Work Immersion Student"}
        location={"Las Piñas City, Philippines"}
        year={"Novermber 2017 - December 2017"}
        description={[
          "Engaged in multiple projects involving various fields of Engineering, like Surveying, 3D Designing and Modeling, Computer Programming in C, and Electronics and Circuitry.",
          "Engaged in team-building activities requiring coordination and cooperation.",
        ]}
      />
    </>
  );
}

export function ExperiencesSection() {
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.experiences;
  const sectionRef = sectionContexts.sectionRefs.experiences;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[]}
      headingText={"Experience"}
      sectionContents={
        <div className={expStyles.experiences__contents}>
          <ExperiencesComp />
        </div>
      }
      sectionRef={sectionRef}
    />
  );
}
