import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import site_logo from "/images/site_logo.svg";

function AboutComponent() {
  return (
    <div className={styles['about__about-me']}>
      <img src={site_logo} alt="Site owner's logo" />
      <div className={styles['about__about-me__text']}>
        <p className={styles['__indent-text']}>
          Hello! I am a <strong>graduating B.S. Computer Science student</strong> from the University of the Philippines Diliman. I take passion in learning and sharing my knowledge when allowed to do so, especially those within my expertise.
        </p>
        <p className={styles['__indent-text']}>
          As a developer, I enjoy building tools that enhances my workflow by making it more efficient and robust, possibly alleviating potential headaches in the process.
        </p>
        <p className={styles['__indent-text']}>
          For my hobby, I&apos;ve been doing motion graphics for people for 5 years. There, I bring life into static images and art, and I ensure it appeals to those viewing the animation. In my editor software of choice, I use Javascript to create dynamic movements and have more control over the elements in the canvas.
        </p>
        <p className={styles['__indent-text']}>
          From being a student, one thing I am proud of is that I&apos;ve adopted a work ethic that lets me manage multiple tasks effectively, especially with various deadlines &ndash; by creating schedules. Taking into consideration that this strategy can be very fragile, I make it so that I give myself a lot of leeway so I can easily adapt whenever needed. Through this strategy, I had been able to manage reviewing for an exam, writing my thesis, and coding for a course project &ndash; all of which, I was able to perform successfully.
        </p>
      </div>
    </div>
  );
}

function SkillsComponent() {
  const skillListConstructor = (
    title: string, 
    details: JSX.Element,
    tags?: string[]
  ) => {
    return {
      title: title,
      details: details,
      tags: tags ?? []
    };
  }
  const skill_list = [
    skillListConstructor(
      "Software Developer",
      (
        <>
          <ul>
            <li>
              Have <strong>great understanding</strong> of the core processes surrounding softwares and operating systems (i.e. what happens &quot;under the hood&quot;).
              <ul>
                <li>
                  Supporting this, I am proficient in <strong>C</strong>, the most dominant language used in the Linux kernel codebase, and I have knowledge in <strong>MIPS</strong>, an assembly language.
                </li>
              </ul>
            </li>
            <li>
              Had experiences of working with a team in developing software (e.g. <a href="#Projects-PASG">Post-apocalyptic Survival Game</a> and <a href="#Projects-Lottie">Lottie AI</a>).
            </li>
            <li>
              Studied UNIX-like operating systems like <strong>xv6</strong> and <strong>Linux</strong> and modified some of their core functionalities as desired &ndash; essentially creating a personalized operating system.
            </li>
            <li>
              Worked using <strong>MySQL</strong>, a <strong>Relational Database Management System</strong>.
            </li>
            <li>
              Worked on projects using <strong>Machine Learning and Artificial Intelligence</strong> in <strong>Python</strong>. For example, <a href="#Projects-Lottie">Lottie AI</a>.
            </li>
            <li>
              Worked on academic projects using <strong>C++</strong> (e.g. <a href="#Projects-Chopsticks">LAN Chopsticks</a>) and <strong>Rust</strong> (e.g. Abstract Syntax Trees or AST).
            </li>
            <li>
              Worked on <a href="#Projects-NieR">a personal project</a> of creating a music-lyric video hybrid using solely <strong>C#</strong>.
            </li>
          </ul>
        </>
      ),
      [
        "C", "C++", "C#", "CUDA C", "MIPS", "MySQL", "Python", "Rust"
      ]
    ),
    skillListConstructor(
      "Web Developer",
      (
        <ul>
          <li>
            Made various small projects and mini tools using &quot;vanilla&quot; tools (i.e. <strong>HTML, CSS, and JS</strong>).
          </li>
          <li>
            Created this site using <strong>React JS</strong>.
          </li>
          <li>
            Started with the development of a web-based rhythm game (<a href="#Projects-Reimu">Reimu&apos;s Rhythm Striker</a>) using <strong>TypeScript</strong>.
          </li>
        </ul>
      ),
      [
        "HTML + CSS", "JavaScript", "React", "TypeScript"
      ]
    ),
    skillListConstructor(
      "Membrane Computing Researcher",
      (
        <ul>
          <li>
            Written multiple documents and presentation materials, including illustrations and graphics, using <strong>LaTeX</strong> &ndash; a programmatic, text-based means to create documents, etc.
          </li>
          <li>
            Used <strong>Python</strong> as a tool in automating typesetting and computations. The latter is achieved by creating a personal module that would simulate a &quot;Spiking Neural P System&quot;.
          </li>
          <li>
            Participated in the development process of <strong>WebSnapse v2</strong>, a web simulator for &quot;Spiking Neural P Systems&quot;, with fellow researchers.
          </li>
        </ul>
      ),
      [
        "LaTeX", "Python"
      ]
    ),
  ];
  const skill_count = skill_list.length;

  const [ active_chips, setActiveChips ]: [
    active_chips: boolean[],
    setActiveChips: React.Dispatch<React.SetStateAction<boolean[]>>
  ] = useState(new Array(skill_count). fill(false));

  const clickHandler = (this_idx: number) => {
    const new_state = active_chips.map((val, idx) => (idx === this_idx ? !val : val));
    setActiveChips(new_state);
  };

  const skill_elements: JSX.Element[] = [];
  skill_list.forEach((skill, idx) => {
    const skill_element = (
      <div className={styles.about__skills__skill} key={idx}>
        <div 
          className={[
            styles.about__skills__skill__head
          ].join(" ")}
          onClick={() => {clickHandler(idx);}}
        >
          <div className={styles.about__skills__skill__head__text}>
            <span className={styles.about__skills__skill__head__text__title}>{skill.title}</span>
            <span className={styles.about__skills__skill__head__text__tags}>
              {skill.tags.map((tag, idx) => (<span key={idx}>{tag}</span>))}
            </span>
          </div>
          <span>
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className={[
                styles.about__skills__skill__head__icon, 
                active_chips[idx] ? styles['about__skills__skill__head__icon--active'] : ""
              ].join(" ")} />
          </span>
        </div>
        <div className={[
          styles.about__skills__skill__body, 
          active_chips[idx] ? styles['about__skills__skill__body--active'] : ""
        ].join(" ")}>
          <div className={styles.about__skills__skill__body__container}>
            {skill.details}
          </div>
        </div>
      </div>
    );
    skill_elements.push(skill_element);
  });

  return (
    <div className={styles.about__skills}>
      {skill_elements}
    </div>
  );
}

export function AboutSection() {
  return (
    <section className={styles.about}>
      <NavigationAnchor id="About" />
      <div className={[
        styles['__section-container'], 
        styles['__limit-width']
      ].join(" ")}>
        <h2>About Me</h2>
        <div className={styles['__section-contents']}>
          <AboutComponent />
          <SkillsComponent />
        </div>
      </div>
      <div className={styles.about__bg}>
        <img src={site_logo} alt="Site logo" />
      </div>
    </section>
  );
}
