import { useSections } from "../hooks/CustomHooks.tsx";

// import { joinStyles } from "../utils/joinStyles.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import site_logo from "/images/site_logo.svg";
// import cpp_logo from "/images/c++_logo.svg";
// import python_logo from "/images/python_logo.svg";

import { DropdownComponent } from "../components/Dropdown.tsx";
import { AppSection } from "./SectionTemplate.tsx";
import { CardComponent } from "../components/Card.tsx";

import coreStyles from "../assets/core.module.css";
import aboutStyles from "../assets/about.module.css";
import { CrossSectionAnchor } from "../components/CrossSectionAnchor.tsx";
import { Section } from "./SectionNames.ts";
import { TooltipComponent } from "../components/TooltipComponent.tsx";

function AboutComponent() {
  return (
    <div className={aboutStyles["about__about-me"]}>
      <div className={aboutStyles["about__about-me__text"]}>
        <p className={coreStyles["__indent-text"]}>
          Hi, <strong>Michael</strong>! I&apos;m a <strong>software developer</strong> and an <strong>aspiring lifelong learner</strong>. I&apos;m most proficient with <em>Python</em> and <em>C++</em> for desktop development, and <em>React</em> (JavaScript and TypeScript) for web development.
        </p>
        <p className={coreStyles["__indent-text"]}>
          I finished my <strong>Bachelor&apos;s Degree in Computer Science</strong> with Cum Laude honors in the University of the Philippines Diliman, with my thesis tackling Spiking Neural P Systems.
        </p>
        <p className={coreStyles["__indent-text"]}>
          I have credentials on <strong>Google Maps Platform Technical and Sales Fundamentals</strong> and <strong>AWS Cloud Essentials</strong>. Additoinally, I completed Google&apos;s training on becoming a <strong>Cloud Digital Leader</strong>.
        </p>
        <p className={coreStyles["__indent-text"]}>
          Professional life aside, as my hobby, I&apos;ve been making <strong>animated graphics</strong> for content creators in an online rhythm game community for <strong>more than 5 years</strong>. There, I bring life into static images and art, and I ensure it catches the attention of the users viewing the page. In my editor software of choice, I use Javascript to create dynamic movements and have more control over the elements in the canvas.
        </p>
      </div>
    </div>
  );
}

type SkillObject = {
  details: JSX.Element,
  tags: string[]
}

function createSkillObject(details: JSX.Element, tags?: string[]): SkillObject {
  return {
    details: details,
    tags: tags ?? []
  }
}

function SkillComponent({
  details,
  tags, 
} : {
  details: JSX.Element,
  tags: string[],
}) {
  return (
    <CardComponent 
      additionalClassNames={[aboutStyles.about__skills__skillset__skill]}
    >
      <div className={aboutStyles.about__skills__skillset__skill__details}>
        <div>{details}</div>
      </div>
      { tags.length ? 
        <span className={aboutStyles.about__skills__skillset__skill__tags}>
          {
            tags.map((tag, index) => (
              <span key={index} className={aboutStyles["about__skills__skillset__tags__tag"]}>{tag}</span>
            ))
          }
        </span>
      : <></> }
    </CardComponent>
  )
}

type SkillSetProps = {
  title: string, 
  tags?: string[],
  skills: SkillObject[],
};

function SkillSetComponent({
  title, 
  tags,
  skills, 
}: SkillSetProps) {
  return (
    <div className={aboutStyles.about__skills__skillset}>
      {/* Simple Layout */}
      {/* 
        <div className={aboutStyles.about__skills__skillset__head}>
          <h3 className={aboutStyles.about__skills__skillset__title}>
            {title}
          </h3>
          <span className={aboutStyles["about__skills__skillset__tags"]}>
            {(tags ?? []).map((tag, idx) => (<span 
              key={idx}
              className={aboutStyles["about__skills__skillset__tags__tag"]}
            >{tag}</span>))}
          </span>
        </div>
        <div className={aboutStyles["about__skills__skillset__skills-container"]}>
          {
            skills.map((skill, index) => (<SkillComponent
              details={skill.details}
              tags={skill.tags}
              key={index}
            />))
          }
        </div> 
      */}

      {/* Dropdown Layout */}
      <DropdownComponent
        head_contents={
          <div className={aboutStyles.about__skills__skillset__head}>
            <h3 className={aboutStyles.about__skills__skillset__title}>
              {title}
            </h3>
            <span className={aboutStyles["about__skills__skillset__tags"]}>
              {(tags ?? []).map((tag, idx) => (<span 
                key={idx}
                className={aboutStyles["about__skills__skillset__tags__tag"]}
              >{tag}</span>))}
            </span>
          </div>
        }
        body_contents={
          <div className={aboutStyles["about__skills__skillset__skills-container"]}>
            {
              skills.map((skill, index) => (<SkillComponent
                details={skill.details}
                tags={skill.tags}
                key={index}
              />))
            }
          </div>
        }
        is_rounded={true}
        customClasses={{
          customActiveHeadClasses: [aboutStyles['about__skills__skillset__dropdown__head--active']],
          customHeadClasses: [aboutStyles.about__skills__skillset__dropdown__head]
        }}
      />
    </div>
  );
}

function FeaturedSkillsComponent() {
  return (
    <div className={aboutStyles['about__skills__featured-container']}>
      <CardComponent 
        additionalClassNames={[aboutStyles.about__skills__featured]}
      >
        <div className={aboutStyles.about__skills__featured__icons}>
          <div className={aboutStyles.about__skills__featured__icons__container}>
            {/* <FontAwesomeIcon icon={faReact} size="2xl" /> */}
            <TooltipComponent tip={"React"}><FontAwesomeIcon icon={faReact} size="3x" /></TooltipComponent>
            <TooltipComponent tip={"JavaScript"}><FontAwesomeIcon icon={faJs} size="3x" /></TooltipComponent>
            <TooltipComponent tip={"HTML"}><FontAwesomeIcon icon={faHtml5} size="3x" /></TooltipComponent>
            <TooltipComponent tip={"CSS"}><FontAwesomeIcon icon={faCss3Alt} size="3x" /></TooltipComponent>
          </div>
        </div>
        <div className={aboutStyles.about__skills__featured__text}>
          <ul>
            <li></li>
          </ul>
        </div>
      </CardComponent>
    </div>
  );
}

function SkillsComponent() {
  return (
    <div className={aboutStyles.about__skills}>
      <FeaturedSkillsComponent />
      <SkillSetComponent
        title={"General Software Development"}
        tags={[
          "C", "C++", "C#", "CUDA", "MySQL", "Python", "Rust"
        ]}
        skills={[
          createSkillObject((<>Created a local file server with concurrency and mutual exclusion; Generated space-filling curves efficiently using a GPU through <strong>CUDA C</strong>.</>),["C", "CUDA C"]),
          createSkillObject((<>Created a <CrossSectionAnchor href="#Projects-Chopsticks" targetSection={Section.Projects}>spinoff</CrossSectionAnchor> of the classic game &quot;Chopsticks&quot; with new mechanics and LAN-play capabilities.</>),["C++"]),
          createSkillObject((<>Created an Abstract Syntax Tree evaluator with arithmetic and comparative capabilities</>),["Rust"]),
          createSkillObject((<>
            Worked on software development projects with a <strong>team</strong> (e.g. <CrossSectionAnchor href="#Projects-PASG" targetSection={Section.Projects}>Post-apocalyptic Survival Game</CrossSectionAnchor> and <CrossSectionAnchor href="#Projects-Lottie" targetSection={Section.Projects}>Lottie AI</CrossSectionAnchor>).
          </>), ["Python", "Team Project"]),
          createSkillObject((<>
            Worked on projects using <strong>Machine Learning</strong> models like SVM and Linear Regression with <strong>Python</strong> (e.g. <CrossSectionAnchor href="#Projects-Lottie" targetSection={Section.Projects}>Lottie AI</CrossSectionAnchor>).
          </>), ["Python", "Team Project"]),
          createSkillObject((<>
            Programatically created <CrossSectionAnchor href="#Projects-NieR" targetSection={Section.Projects}>a music video</CrossSectionAnchor> using solely <strong>C#</strong>.
          </>), ["C#"])
        ]}
      />
      <SkillSetComponent
        title={"Web Development"}
        tags={[
          "HTML", "CSS", "JavaScript", "React", "TypeScript"
        ]}
        skills={[
          createSkillObject((<>
            Built a full-stack geospatial web application using <strong>React</strong> (TS), <strong>Python</strong> (FastAPI), and <strong>PostgreSQL</strong> with <strong>Google Maps API</strong>.
          </>), ["Python", "FastAPI", "PostgreSQL", "Google Maps API"]),
          createSkillObject((<>
            Built personal web apps and pages using native <strong>JavaScript</strong> and <strong>React</strong>, including <strong>this site</strong>.
          </>), ["JavaScript", "React"]),
          createSkillObject((<>
            Created a web-based rhythm game (<CrossSectionAnchor href="#Projects-Rhythm-Game" targetSection={Section.Projects}>Rhythm Strike</CrossSectionAnchor>) using <strong>TypeScript</strong>.
          </>), ["TypeScript"]),
        ]}
      />
      <SkillSetComponent
        title={"Specific Technologies"}
        tags={[
          "FastAPI", "Google Maps API", "Linux", "PostgreSQL"
        ]}
        skills={[
          createSkillObject((<>
            Worked with <strong>xv6</strong> and <strong>Linux</strong> operating systems, using <strong>C</strong> and <strong>x86 Assembly</strong>, by modifying their core functionalities and behavior as desired, such as creating custom system calls and a custom process scheduling.
          </>), ["xv6", "Linux", "C", "Assembly"]),
          createSkillObject((<>
            Built an API using <strong>FastAPI</strong> that interacts with a <strong>PostgreSQL</strong> database for a full-stack geospatial web application that uses the <strong>Google Maps API</strong>.
          </>), ["FastAPI", "PostgreSQL", "Google Maps API"]),
        ]}
      />
      <SkillSetComponent
        title={"Membrane Computing Research"}
        tags={[
          "LaTeX", "Python"
        ]}
        skills={[
          createSkillObject((<>
            Written multiple documents and presentation materials, including illustrations and graphics, using <strong>LaTeX</strong> &ndash; a programmatic, text-based means to create documents, etc.
          </>), ["LaTeX"]),
          createSkillObject((<>
            Used <strong>Python</strong> as a tool in automating typesetting and computations. The latter is achieved by creating a personal module that would simulate a &quot;Spiking Neural P System&quot;.
          </>), ["Python", "Research"]),
          createSkillObject((<>
            Participated in the development process of <strong>WebSnapse v2</strong>, a web simulator for &quot;Spiking Neural P Systems&quot;, with fellow researchers.
          </>)),
        ]}
      />
    </div>
  );
}

export function AboutSection() {
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.about;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[aboutStyles.about]}
      headingText={"About Me"}
      sectionContents={
        <>
          <AboutComponent />
          <SkillsComponent />
        </>
      }
      unboundedSectionContents={
        <div className={aboutStyles.about__bg}>
          <img src={site_logo} alt="Site logo" />
        </div>
      }
    />
  );
}
