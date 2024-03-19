import { useState } from "react";
import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useElementOnScreen from "./IntersectionObserver.tsx";

import reimu_preview_1 from "/images/proj_reimu_1.jpg";
import reimu_preview_2 from "/images/proj_reimu_2.jpg";
import reimu_preview_3 from "/images/proj_reimu_3.jpg";

import sota_preview_1 from "/images/proj_sota_1.jpg";
import sota_preview_2 from "/images/proj_sota_2.jpg";
import sota_preview_3 from "/images/proj_sota_3.jpg";
import sota_preview_4 from "/images/proj_sota_4.jpg";
import sota_preview_5 from "/images/proj_sota_5.jpg";

function PreviewPane(contents: JSX.Element, is_active:boolean, clickHandler: () => void) {
  return (
    <div className={styles.__dropdown}>
      <div 
        className={[
          styles.__dropdown__head,
          styles['__dropdown__head--style-previews'],
          is_active ? styles['__dropdown__head--inactive'] : ""
        ].join(" ")}
        onClick={() => {clickHandler();}}
      >
        <div className={styles.__dropdown__head__text}>
          <span className={styles.__dropdown__head__text__title}>Preview</span>
        </div>
        <span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={[
              styles.__dropdown__head__icon, 
              is_active ? styles['__dropdown__head__icon--active'] : ""
            ].join(" ")} />
        </span>
      </div>
      <div 
        className={[
          styles.__dropdown__body, 
          is_active ? styles['__dropdown__body--active'] : ""
        ].join(" ")}
        style={{
          backgroundColor: "transparent",
          marginTop: 0,
        }}
      >
        <div className={[
          styles.__dropdown__body__container,
          styles.projects__project__preview
        ].join(" ")}>
          {contents}
        </div>
      </div>
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

  const [ preview_visible, setPreviewVisibility ]: [
    preview_visible: boolean,
    setPreviewVisibility: React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const clickHandler = () => {
    setPreviewVisibility((prev) => (!prev));
  };

  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <div ref={containerRef} className={[
        styles.__card, 
        styles.projects__project,
        isVisible ? styles['__visible'] : styles['__not-visible']
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
          ? PreviewPane(preview, preview_visible, clickHandler)
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
        styles['__section-container'], 
        styles['__limit-width']
      ].join(" ")}>
        <h2>Projects</h2>
        <div className={styles['__section-contents']}>
          <ProjectComp
            id={"Projects-Reimu"}
            title={"Reimu's Rhythm Strike"}
            subtitle={"A WebGL rhythm game built in TypeScript"}
            year={"2024"}
            description={[
              "\"Reimu's Rhythm Strike\" is a two-lane rhythm game based on \"Reimu no Oharai Daisakusen\" (霊夢のお祓い大作戦), a mini-game from the mobile game \"Touhou LostWord\" (東方LostWord).",
              "The player has a selection of songs to play. Once the player has chosen, notes start to rush towards the player and they must be struck to the beat to earn points. Depending on the accuracy of the player, each note hit awards the player with points; it is the player's task to earn as many points as they can."
            ]}
            preview={
              <>
                <p style={{textAlign: "center", fontWeight: "bolder"}}>In-development preview</p>
                <figure>
                  <img src={reimu_preview_1} alt="Reimu's Rhythm Strike Preview #1" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
                <figure>
                  <img src={reimu_preview_2} alt="Reimu's Rhythm Strike Preview #2" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
                <figure>
                  <img src={reimu_preview_3} alt="Reimu's Rhythm Strike Preview #3" loading="lazy" />
                  {/* <figcaption>Preview #1</figcaption> */}
                </figure>
              </>
            }
          />
          <ProjectComp
            id={"Projects-NieR"}
            title={"\"Song of the Ancients\" Music Video in C#"}
            subtitle={"A solo music video project built in C#"}
            year={"2023"}
            description={[
              "A music video (\"storyboard\"), specifically a music-lyric video hybrid, made as a tribute to the video game \"NieR Replicant\". The storyboard aims to capture one of the climaxes of the game's story.",
              "Implements a 2D Particle Generator, a 3D Environment with Camera capabilities, and custom effects and transitions."
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
            subtitle={"A team technopreneurship venture focused on AI and Geodesy"}
            year={"2023"}
            link={"https://github.com/ENGG-150-Lottie-AI/Lottie-AI"}
            description={[
              "A text-recognition software geared towards Geodetic Engineers that can scan and file land title documents.",
              "Outputs a CAD-readable file containing all pertinent information of the land, as well as a summary containing them, for plotting and data management purposes.",
            ]}
          />
          <ProjectComp
            id={"Projects-PASG"}
            title={"Post-apocalyptic Survival Game"}
            subtitle={"A team project built in Python"}
            year={"2021"}
            link={
              "https://github.com/CS-192-S3-2020-2021-Group-2/Post-Apocalyptic-Survival-Game"
            }
            description={[
              "A text-based \"Choose Your Own Adventure\" RPG game, set in a world overrun by zombies.",
              "The player has just suffered memory loss. Helped by an old friend, it's their task to survive and piece together their memories.",
            ]}
          />
          <ProjectComp
            id={"Projects-Chopsticks"}
            title={"LAN Chopsticks"}
            subtitle={"A remix of a classic game built in C++"}
            year={"2019"}
            description={[
              'A spinoff of the classic game "Chopsticks" with new mechanics with LAN-play capabilities.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
