// import useElementOnScreen from "./IntersectionObserver.tsx";
import { useSections } from "../hooks/CustomHooks.tsx";

// import { joinStyles } from "../utils/joinStyles.ts";

import { NavigationAnchor } from "./NavigationAnchor.tsx";
import { DropdownComponent } from "../components/Dropdown.tsx";
import { AppSection } from "./SectionTemplate.tsx";

import simply_preview from "/images/proj_simply.jpg";

import easyytdlp_preview from "/images/proj_easy_ytdlp_cli.jpg";

import reimu_preview_1 from "/images/proj_reimu_1.jpg";
import reimu_preview_2 from "/images/proj_reimu_2.jpg";
import reimu_preview_3 from "/images/proj_reimu_3.jpg";

// import coreStyles from "../assets/core.module.css";
import projectsStyles from "../assets/projects.module.css";
import { CardComponent } from "../components/Card.tsx";
import { ExpandableImage } from "../components/ExpandableImage.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PreviewPane(contents: JSX.Element) {
  return (
    <div className={projectsStyles.projects__project__preview}>
      <DropdownComponent
        head_contents={
          <span>Preview</span>
        }
        body_contents={
          <div className={projectsStyles.projects__project__preview__contents}>
            {contents}
          </div>
        }
        is_rounded={true}
        is_filled={true}
        customClasses={{customHeadClasses:[projectsStyles["projects__project__preview__dropdown-head"]]}}
      />
    </div>
  );
}

type ProjectProps = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  link?: string;
  tags?: string[];
  description: (string | JSX.Element)[];
  preview?: JSX.Element;
};

function ProjectComp(props: ProjectProps) {
  const {
    id,
    title,
    subtitle,
    year,
    link,
    tags,
    description,
    preview,
  }: ProjectProps = props;
  // const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <CardComponent
      additionalClassNames={[
        projectsStyles.projects__project,
        // isVisible ? coreStyles["__visible"] : coreStyles["__not-visible"]
      ]}
      // cardRef={containerRef}
    >
      <NavigationAnchor id={id} />
      <div className={projectsStyles.projects__project__details}>
        <h4 className={projectsStyles.projects__project__details__title}>
          {
            link
              ? <a className={projectsStyles.projects__project__details__link} href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /></a>
              : <></>
          }{title}
        </h4>
        <hr />
        <span className={projectsStyles.projects__project__details__year}>{year}</span>
        {
          subtitle
            ? <span className={projectsStyles.projects__project__details__subtitle}>{`${subtitle}`}</span> 
            : <></>
        }
      </div>
      { tags ? 
        <div>
          <span className={projectsStyles.projects__project__tags}>
            {
              tags.map((tag, index) => (
                <span key={index} className={projectsStyles.projects__project__tags__tag}>{tag}</span>
              ))
            }
          </span>
        </div>
      : <></> }
      <ul className={projectsStyles.projects__project__description}>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      {
        preview
          ? PreviewPane(preview)
          : <></>
      }
    </CardComponent>
  );
}

function ProjectsComp() {
  return (<>
    <ProjectComp
      id={"Projects__SimplyFFmpeg-Web"}
      title={"SimplyFFmpeg (Web)"}
      subtitle={"A full-stack multimedia processor web app built using Bootstrap, Django, and SQLite"}
      year={"2025"}
      tags={["HTML", "CSS", "Python", "Django", "Bootstrap", "SQLite"]}
      description={[
        "An app designed to provide an easy-to-use, web-based interface for the powerful media processing tool FFmpeg, which is normally complicated to non-technical users, by abstracting essential and most frequently used options.",
        <>This is the web app version of <a href="#Projects__SimplyFFmpeg">SimplyFFmpeg</a>. </>
      ]}
      preview={
        <>
          <ExpandableImage src={simply_preview} alt={"SimplyFFmpeg (Web) Preview #1"} />
        </>
      }
      link={"https://github.com/jvmenina/SimplyFFmpeg-Web"}
    />
    <ProjectComp
      id={"Projects__SimplyFFmpeg"}
      title={"SimplyFFmpeg"}
      subtitle={"A multimedia processor desktop app built using Python and PyQt6"}
      year={"2025"}
      tags={["Python", "PyQt6"]}
      description={[
        "A desktop graphical interface for FFmpeg, a powerful multimedia processing tool, created to alleviate the complexity of the tool and be able to quickly process audio and video files with some degree of customizability."
      ]}
      link={"https://github.com/jvmenina/SimplyFFmpeg"}
    />
    <ProjectComp
      id={"Projects__ytdlp-CLI"}
      title={"Easy yt-dlp CLI"}
      subtitle={"An easy-to-use command-line interface that provides abstractions for the essential capabilities of yt-dlp"}
      year={"2025"}
      tags={["C++"]}
      description={[
        "A command-line interface (CLI) that's meant to simplify the usage of a user's copy of yt-dlp, a feature-rich multimedia downloader, which can be daunting to use."
      ]}
      link={"https://github.com/jvmenina/Easy-yt-dlp-CLI"}
      preview={
        <>
          <ExpandableImage src={easyytdlp_preview} alt={"Easy yt-dlp CLI Preview #1"} />
        </>
      }
    />
    <ProjectComp
      id={"Projects__Choice-Places"}
      title={"Choice Places Near Me"}
      subtitle={"A full-stack geospatial web application built using React"}
      year={"2024"}
      tags={["HTML", "CSS", "JavaScript", "TypeScript", "React", "PostgreSQL", "FastAPI", "Google Maps API"]}
      description={[
        "An interactive place locator with a dynamic map utilizing the Google Maps API, where users can see details about nearby restaurants, cafes, and stores, and know which ones are nearest to their location.",
        "Reviewed and assessed by select sales and technical leads at Navagis (Philippine Branch)."
      ]}
    />
    <ProjectComp
      id={"Projects__Rhythm-Strike"}
      title={"Rhythm Strike"}
      subtitle={"A WebGL rhythm game built using TypeScript with the Phaser game engine"}
      year={"2024"}
      tags={["TypeScript", "Phaser"]}
      description={[
        "\"Rhythm Strike\" is a two-lane rhythm game based on \"Reimu no Oharai Daisakusen\" (霊夢のお祓い大作戦), a mini-game from the mobile game \"Touhou LostWord\" (東方LostWord).",
        "A two-lane rhythm game where notes rush towards the player's position and they must be struck to the beat to gain points.",
      ]}
      preview={
        <>
          {/* <p style={{textAlign: "center", fontWeight: "bold", paddingBottom: "1rem"}}>In-development preview</p> */}
          {/* <figure>
            <img src={reimu_preview_1} alt="Rhythm Strike Preview #1" loading="lazy" />
          </figure> */}
          <ExpandableImage src={reimu_preview_1} alt={"Rhythm Strike Preview #1"} />
          <ExpandableImage src={reimu_preview_2} alt={"Rhythm Strike Preview #2"} />
          <ExpandableImage src={reimu_preview_3} alt={"Rhythm Strike Preview #3"} />
        </>
      }
    />
    <ProjectComp
      id={"Projects__NieR-MV"}
      title={"\"Song of the Ancients\" Music Video in C#"}
      subtitle={"A solo music video project built using C#"}
      year={"2023"}
      tags={["C#"]}
      description={[
        "A music video made as a tribute to the video game \"NieR Replicant\", aiming to capture one of the climaxes of the game's story.",
        "Implemented a custom Particle Generator, a custom 3D Environment with Camera capabilities, and a number of other custom effects and transitions."
      ]}
    />
    <ProjectComp
      id={"Projects__Lottie-AI"}
      title={"Lottie AI"}
      subtitle={"A team technopreneurship venture on a smart OCR for Geodetic Engineers"}
      year={"2023"}
      link={"https://github.com/ENGG-150-Lottie-AI/Lottie-AI"}
      tags={["Python", "Tesseract OCR"]}
      description={[
        "A text-recognition software for Geodetic engineers that can scan, file, and summarize land title documents.",
        "Outputs a CAD-readable file containing all important details of a land for plotting and data management purposes.",
        "Worked as the back-end lead developer; Planned and implemented the entire program logic."
      ]}
    />
    <ProjectComp
      id={"Projects__Survival-Game"}
      title={"Post-apocalyptic Survival Game"}
      subtitle={"A team project built using Python"}
      year={"2021"}
      link={
        "https://github.com/CS-192-S3-2020-2021-Group-2/Post-Apocalyptic-Survival-Game"
      }
      tags={["Python", "pyglet"]}
      description={[
        "A text-based \"Choose Your Own Adventure\" RPG game, set in a world overrun by zombies.",
        "The player has just suffered memory loss. Helped by an old friend, it's their task to survive and piece together the player's memories.",
        "Worked as a back-end developer; Implemented a number of core game features."
      ]}
    />
    <ProjectComp
      id={"Projects__Chopsticks"}
      title={"LAN Chopsticks"}
      subtitle={"A remix of a classic game built using C++"}
      year={"2019"}
      tags={["C++"]}
      description={[
        "A spinoff of the classic game \"Chopsticks\" with new mechanics with LAN-play capabilities.",
      ]}
    />
  </>);
}

export function ProjectsSection() {
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.projects;
  const sectionRef = sectionContexts.sectionRefs.projects;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[projectsStyles.projects]}
      headingText={"Projects"}
      sectionContents={
        <div className={projectsStyles.projects__contents}>
          <ProjectsComp />
        </div>
      }
      sectionRef={sectionRef}
    />
  );
}
