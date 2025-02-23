import styles from "../assets/App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import { DropdownComponent } from "./Dropdown.tsx";

import useElementOnScreen from "./IntersectionObserver.tsx";

import reimu_preview_1 from "/images/proj_reimu_1.jpg";
import reimu_preview_2 from "/images/proj_reimu_2.jpg";
import reimu_preview_3 from "/images/proj_reimu_3.jpg";

import sota_preview_1 from "/images/proj_sota_1.jpg";
import sota_preview_2 from "/images/proj_sota_2.jpg";
import sota_preview_3 from "/images/proj_sota_3.jpg";
import sota_preview_4 from "/images/proj_sota_4.jpg";
import sota_preview_5 from "/images/proj_sota_5.jpg";

function PreviewPane(contents: JSX.Element) {
  return (
    <div className={styles.projects__project__preview}>
      <DropdownComponent
        head_contents={
          <span>Preview</span>
        }
        body_contents={
          <div className={styles.projects__project__preview__contents}>
            {contents}
          </div>
        }
        is_rounded={true}
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
  description: string[];
  preview?: JSX.Element;
};

function ProjectComp(props: ProjectProps) {
  const {
    id,
    title,
    subtitle,
    year,
    link,
    description,
    preview,
  }: ProjectProps = props;
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div ref={containerRef} className={[
        styles.__card, 
        styles.projects__project,
        isVisible ? styles["__visible"] : styles["__not-visible"]
    ].join(" ")}>
      <NavigationAnchor id={id} />
      <div className={styles.projects__project__details}>
        <span className={styles.projects__project__details__title}>{title}</span>
        <hr />
        <span className={styles.projects__project__details__year}>{year}</span>
        {
          subtitle
            ? <span className={styles.projects__project__details__subtitle}>{`${subtitle}`}</span> 
            : <></>
        }
        {
          link
            ? <a className={styles.projects__project__details__link} href={link} target="_blank" rel="noreferrer">GitHub</a>
            : <></>
        }
      </div>
      <ul className={styles.projects__project__description}>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      {
        preview
          ? PreviewPane(preview)
          : <></>
      }
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <NavigationAnchor id="Projects" />
      <div className={[
        styles["__section-container"], 
        styles["__limit-width"]
      ].join(" ")}>
        <h2>Projects</h2>
        <div className={styles["__section-contents"]}>
          <ProjectComp
            id={"Projects-Geospatial-Intern"}
            title={"Choice Places Near Me"}
            subtitle={"A full-stack geospatial web application built using React"}
            year={"2024"}
            description={[
              "An interactive place locator with a dynamic map utilizing the Google Maps API, where users can see details about nearby restaurants, cafes, and stores, and know which ones are nearest to their location.",
              "Reviewed and assessed by select sales and technical leads at Navagis (Philippine Branch)."
            ]}
          />
          <ProjectComp
            id={"Projects-Rhythm-Game"}
            title={"Rhythm Strike"}
            subtitle={"A WebGL rhythm game built using TypeScript"}
            year={"2024"}
            description={[
              "\"Rhythm Strike\" is a two-lane rhythm game based on \"Reimu no Oharai Daisakusen\" (霊夢のお祓い大作戦), a mini-game from the mobile game \"Touhou LostWord\" (東方LostWord).",
              "A two-lane rhythm game where notes rush towards the player's position and they must be struck to the beat to gain points.",
            ]}
            preview={
              <>
                <p style={{textAlign: "center", fontWeight: "bold", paddingBottom: "1rem"}}>In-development preview</p>
                <figure>
                  <img src={reimu_preview_1} alt="Rhythm Strike Preview #1" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
                <figure>
                  <img src={reimu_preview_2} alt="Rhythm Strike Preview #2" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
                <figure>
                  <img src={reimu_preview_3} alt="Rhythm Strike Preview #3" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
              </>
            }
          />
          <ProjectComp
            id={"Projects-NieR"}
            title={"\"Song of the Ancients\" Music Video in C#"}
            subtitle={"A solo music video project built using C#"}
            year={"2023"}
            description={[
              "A music video \"storyboard\" made as a tribute to the video game \"NieR Replicant\", aiming to capture one of the climaxes of the game's story.",
              "Implemented a custom Particle Generator, a custom 3D Environment with Camera capabilities, and a number of other custom effects and transitions."
            ]}
            preview={
              <>
                <figure>
                  <img src={sota_preview_1} alt="Song of the Ancients Music Video Preview #1" loading="lazy" />
                </figure>
                <figure>
                  <img src={sota_preview_2} alt="Song of the Ancients Music Video Preview #2" loading="lazy" />
                </figure>
                <figure>
                  <img src={sota_preview_3} alt="Song of the Ancients Music Video Preview #3" loading="lazy" />
                </figure>
                <figure>
                  <img src={sota_preview_4} alt="Song of the Ancients Music Video Preview #4" loading="lazy" />
                </figure>
                <figure>
                  <img src={sota_preview_5} alt="Song of the Ancients Music Video Preview #5" loading="lazy" />
                </figure>
              </>
            }
          />
          <ProjectComp
            id={"Projects-Lottie"}
            title={"Lottie AI"}
            subtitle={"A team technopreneurship venture on a smart OCR for Geodetic Engineers"}
            year={"2023"}
            link={"https://github.com/ENGG-150-Lottie-AI/Lottie-AI"}
            description={[
              "A text-recognition software for Geodetic engineers that can scan, file, and summarize land title documents.",
              "Outputs a CAD-readable file containing all important details of a land for plotting and data management purposes.",
              "Worked as the back-end lead developer; Planned and implemented the entire program logic."
            ]}
          />
          <ProjectComp
            id={"Projects-PASG"}
            title={"Post-apocalyptic Survival Game"}
            subtitle={"A team project built using Python"}
            year={"2021"}
            link={
              "https://github.com/CS-192-S3-2020-2021-Group-2/Post-Apocalyptic-Survival-Game"
            }
            description={[
              "A text-based \"Choose Your Own Adventure\" RPG game, set in a world overrun by zombies.",
              "The player has just suffered memory loss. Helped by an old friend, it's their task to survive and piece together the player's memories.",
              "Worked as a back-end developer; Implemented a number of core game features."
            ]}
          />
          <ProjectComp
            id={"Projects-Chopsticks"}
            title={"LAN Chopsticks"}
            subtitle={"A remix of a classic game built using C++"}
            year={"2019"}
            description={[
              "A spinoff of the classic game \"Chopsticks\" with new mechanics with LAN-play capabilities.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
