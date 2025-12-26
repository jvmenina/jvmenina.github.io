import { useSections } from "../hooks/CustomHooks.tsx";

// import { joinStyles } from "../utils/joinStyles.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import site_logo from "/images/site_logo.svg";
import postgres_logo from "/images/postgresql_logo.svg";
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
import { joinStyles } from "../utils/joinStyles.ts";

function AboutComponent() {
  return (
    <div className={aboutStyles["about__about-me"]}>
      <div className={joinStyles(aboutStyles["about__about-me__text"], coreStyles['__indent-text'])}>
        <p>
          I&apos;m a <strong>software developer</strong> and an <strong>aspiring lifelong learner</strong> from the <strong>Philippines</strong>. I&apos;m most proficient with <em>Python</em>, <em>C</em>, and <em>C++</em> for desktop development, and <em>React</em> (JavaScript and TypeScript) for web development.
        </p>
        <p>
          I finished my <strong>Bachelor&apos;s Degree in Computer Science</strong> with Cum Laude honors in the <strong>University of the Philippines Diliman</strong>, with my thesis tackling <em>Spiking Neural P Systems</em>.
        </p>
        <p>
          I have credentials on <strong>Google Maps Platform Technical and Sales Fundamentals</strong> and <strong>AWS Cloud Essentials</strong>. Additionally, I completed Google&apos;s training on becoming a <strong>Cloud Digital Leader</strong>.
        </p>
        <p>
          As a hobby, I&apos;ve been making <strong>animated graphics</strong> for content creators in an online rhythm game community for <strong>more than 6 years</strong>. In my editor software of choice, I use <strong>Javascript</strong> to create and control dynamic elements.
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
            <h4 className={aboutStyles.about__skills__skillset__title}>
              {title}
            </h4>
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
            <TooltipComponent classNames={aboutStyles['about__skills__featured__icons__container__sub-container']} tip={"PostgreSQL"}><img src={postgres_logo} /></TooltipComponent>
            <TooltipComponent classNames={aboutStyles['about__skills__featured__icons__container__sub-container']} tip={"React"}><FontAwesomeIcon icon={faReact} size="3x" /></TooltipComponent>
            <TooltipComponent classNames={aboutStyles['about__skills__featured__icons__container__sub-container']} tip={"JavaScript"}><FontAwesomeIcon icon={faJs} size="3x" /></TooltipComponent>
            <TooltipComponent classNames={aboutStyles['about__skills__featured__icons__container__sub-container']} tip={"HTML"}><FontAwesomeIcon icon={faHtml5} size="3x" /></TooltipComponent>
            <TooltipComponent classNames={aboutStyles['about__skills__featured__icons__container__sub-container']} tip={"CSS"}><FontAwesomeIcon icon={faCss3Alt} size="3x" /></TooltipComponent>
          </div>
        </div>
        <div className={aboutStyles.about__skills__featured__text}>
          <div>
            <h4>Choice Places Near Me</h4>
            <div style={{fontWeight: "bolder", marginBottom: "1rem"}}>A full-stack geospatial web application built using React</div>
            <div className={coreStyles['__indent-text']}>
              <p>I built a full-stack interactive place locator using <strong>React</strong>, <strong>Python</strong>, and <strong>PostgreSQL</strong> with the Google Maps API to create a dynamic experience. Here, users can see details about nearby restaurants, cafes, and stores from their set location.</p>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}

function SkillsComponent() {
  return (
    <div className={aboutStyles.about__skills}>
      <h3>Featured Project</h3>
      <FeaturedSkillsComponent />
      <h3>What do I do?</h3>
      <SkillSetComponent
        title={"General Software Development"}
        tags={[
          "C", "C++", "C#", "CUDA", "Python"
        ]}
        skills={[
          createSkillObject((<>Created a local file server with concurrency and mutual exclusion.</>),["C"]),
          createSkillObject((<>Optimized computationally intensive tasks, like generation of space-filling curves, using <strong>CUDA C</strong>.</>),["CUDA (C)", "GPU Computing"]),
          createSkillObject((<>Created <CrossSectionAnchor href="#Projects-ytdlp-CLI" targetSection={Section.Projects}>an easy-to-use command-line user interface</CrossSectionAnchor> for yt-dlp, a content downloader which can be daunting to use.</>),["C++"]),
          createSkillObject((<>
            Worked on software development projects with a <strong>team</strong> (e.g. <CrossSectionAnchor href="#Projects-PASG" targetSection={Section.Projects}>Post-apocalyptic Survival Game</CrossSectionAnchor> and <CrossSectionAnchor href="#Projects-Lottie" targetSection={Section.Projects}>Lottie AI</CrossSectionAnchor>).
          </>), ["Python", "Team Project"]),
          createSkillObject((<>
            Worked on academic projects using <strong>Machine Learning</strong> models like SVM and Linear Regression with <strong>Python</strong>.
          </>), ["Python", "Machine Learning"]),
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
            Built <CrossSectionAnchor href="#Projects-Geospatial-Intern" targetSection={Section.Projects}>a full-stack geospatial web application</CrossSectionAnchor> using <strong>React</strong> (TS), <strong>Python</strong> (FastAPI), and <strong>PostgreSQL</strong> with <strong>Google Maps API</strong>.
          </>), ["Python", "FastAPI", "PostgreSQL", "Google Maps API"]),
          createSkillObject((<>
            Built personal web apps and pages using native <strong>JavaScript</strong> and <strong>React</strong>, including <strong>this site</strong>.
          </>), ["JavaScript", "React"]),
          createSkillObject((<>
            Created <CrossSectionAnchor href="#Projects-Rhythm-Game" targetSection={Section.Projects}>a web-based rhythm game</CrossSectionAnchor> using <strong>TypeScript</strong> and the <strong>Phaser</strong> game engine.
          </>), ["TypeScript", "Phaser"]),
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
            Built an API using <strong>FastAPI</strong> that interacts with a <strong>PostgreSQL</strong> database as part of the back-end for <CrossSectionAnchor href="#Projects-Geospatial-Intern" targetSection={Section.Projects}>a full-stack geospatial web application</CrossSectionAnchor> that uses the <strong>Google Maps API</strong>.
          </>), ["FastAPI", "PostgreSQL", "Google Maps API"]),
        ]}
      />
      <SkillSetComponent
        title={"Research Studies"}
        tags={[
          "LaTeX", "Python"
        ]}
        skills={[
          createSkillObject((<>
            Wrote multiple documents and presentation materials, including illustrations and graphics, using <strong>LaTeX</strong> &ndash; a programmatic, text-based means to create documents, etc.
          </>), ["LaTeX"]),
          createSkillObject((<>
            Used <strong>Python</strong> as a tool in automating typesetting and computations. For example, by creating a module that would simulate a &quot;Spiking Neural P System&quot;.
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
  const sectionRef = sectionContexts.sectionRefs.about;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[aboutStyles.about]}
      headingText={"About Me"}
      sectionContents={
        <>
          <h3>Hi, I&apos;m Michael!</h3>
          <AboutComponent />
          <SkillsComponent />
        </>
      }
      unboundedSectionContents={
        <div className={aboutStyles.about__bg}>
          <img src={site_logo} alt="Site logo" />
        </div>
      }
      sectionRef={sectionRef}
    />
  );
}
