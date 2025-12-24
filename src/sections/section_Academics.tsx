import { useSections } from "../hooks/CustomHooks.tsx";

// import { joinStyles } from "../utils/joinStyles.ts";

import { AppSection } from "./SectionTemplate.tsx";

import up_logo from "/images/up_logo.svg";

// import coreStyles from "../assets/core.module.css";
import acadsStyles from "../assets/academics.module.css";
import { CardComponent } from "../components/Card.tsx";

function UniversityComp() {
  return (
    <CardComponent
      additionalClassNames={[acadsStyles["academics__university"]]}
    >
      <img
        src={up_logo}
        alt="Logo of University of the Philippines" 
        loading="lazy" 
      />
      <div className={acadsStyles.academics__university__details}>
        <h4 className={acadsStyles.academics__university__details__title}>
          University of the Philippines Diliman
        </h4>
        <div className={acadsStyles.academics__university__details__subtitle}>
          <span className={acadsStyles["academics__university__details__subtitle__degree"]}>Bachelor of Science in Computer Science</span>
          <hr />
          <span className={acadsStyles["academics__university__details__subtitle__date"]}>2024</span>
        </div>
        <div className={acadsStyles["academics__university__details__body"]}>
          <ul>
            <li>Graduated with <strong>Cum Laude Honors</strong> with GWA of 1.73</li>
          </ul>
        </div>
      </div>
    </CardComponent>
  );
}

function ThesisComp() {
  return (<>
    <h3>Undergraduate Thesis</h3>
    <CardComponent 
      additionalClassNames={[acadsStyles["academics__thesis"]]}
    >
      <h4 className={acadsStyles.academics__thesis__title}>
        Spiking Neural P Systems in Generating Chain Code Pictures for Finite
        Approximations of Hilbert and Sierpin&#769;ski Curves
      </h4>
      <dl className={acadsStyles.academics__thesis__details}>
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
    </CardComponent>
  </>);
}

export function AcademicsSection() {
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.academics;
  const sectionRef = sectionContexts.sectionRefs.academics;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[]}
      headingText={"Academic Background"}
      sectionContents={
        <>
          <UniversityComp />
          <ThesisComp />
        </>
      }
      sectionRef={sectionRef}
    />
  );
}
