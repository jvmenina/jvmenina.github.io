import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";

type ProjectProps = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  link?: string | undefined;
  description: string[];
};

function ProjectComp(props: ProjectProps) {
  const {
    id,
    title,
    subtitle,
    year,
    link,
    description,
  }: ProjectProps = props;

  return (
    <div className={[
        styles.__card, 
        styles.projects__project
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
            link={"https://github.com/jmichaelmenina/thlw-rhythm-game-remix"}
            description={[
              "\"Reimu's Rhythm Strike\" is a two-lane rhythm game based on \"Reimu no Oharai Daisakusen\" (霊夢のお祓い大作戦), a mini-game from the mobile game \"Touhou LostWord\" (東方LostWord).",
              "The player has a selection of songs to play. Once the player has chosen, notes start to rush towards the player and they must be struck to the beat to earn points. Depending on the accuracy of the player, each note hit awards the player with points; it is the player's task to earn as many points as they can."
            ]}
          />
          <ProjectComp
            id={"Projects-NieR"}
            title={"\"Song of the Ancients\" Music Video"}
            subtitle={"A solo music video project built in C#"}
            year={"2023"}
            link={"https://github.com/jmichaelmenina/osuStoryboard_Song-of-the-Ancients"}
            description={[
              "A music video (\"storyboard\"), specifically a music-lyric video hybrid, made as a tribute to the video game \"NieR Replicant\". The storyboard aims to capture one of the climaxes of the game's story.",
              "Implements a 2D Particle Generator, a 3D Environment with Camera capabilities, and custom effects and transitions."
            ]}
          />
          <ProjectComp
            id={"Projects-Lottie"}
            title={"Lottie AI"}
            subtitle={"A team technopreneurship venture focused on AI and Geodesy"}
            year={"2023"}
            link={"https://github.com/ENGG-150-Lottie-AI/Lottie-AI"}
            description={[
              "A text-recognition software geared towards Geodetic Engineers that can scan and file land title documents.",
              "It outputs a CAD-readable file containing all pertinent information of the land, as well as a summary containing them, for plotting and data management purposes.",
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
            subtitle={"A solo project built in C++"}
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
