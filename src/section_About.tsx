import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import site_logo from "/images/site_logo.svg";

function AboutComponent() {
  return (
    <div className={styles['about__about-me']}>
      <div className={styles['about__about-me__text']}>
        <p className={styles['__indent-text']}>
          Hi! I&apos;m a <strong>software developer</strong> and an <strong>aspiring lifelong learner</strong> with experiences in developing desktop and web applications, and credentials on <strong>Google Maps Platform Technical</strong> and <strong>Sales Fundamentals</strong>. I am finishing my Bachelor&apos;s Degree in Computer Science in the University of the Philippines Diliman, with my thesis tackling Spiking Neural P Systems. I&apos;m most proficient with C and Python technologies for desktop development, and React and native JS for web development.
        </p>
        <p className={styles['__indent-text']}>
          Professional life aside, as my hobby, I&apos;ve been making <strong>animated graphics</strong> for chart creators in an online rhythm game community for <strong>more than 5 years</strong>. There, I bring life into static images and art, and I ensure it catches the attention of the users viewing the page. In my editor software of choice, I use Javascript to create dynamic movements and have more control over the elements in the canvas.
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
      "General Software Development",
      (
        <ul>
          <li>
            Worked on numerous academic projects using...
            <dl className={styles['__two-column']}>
              <dt><strong>C</strong></dt>
              <dd>Solved problems related to various data structures; Created a local file server with concurrency and mutual exclusion; Generated space-filling curves efficiently using a GPU through <strong>CUDA C</strong></dd>

              <dt><strong>C++</strong></dt>
              <dd>Created a <a href="#Projects-Chopsticks">spinoff</a> of the classic game ”Chopsticks” with new mechanics and LAN-play capabilities.</dd>

              <dt><strong>MIPS Assembly</strong></dt>
              <dd>Created a checkers puzzle solver</dd>

              <dt><strong>Python</strong></dt>
              <dd>Solved for numerical approximations of solutions to differential equations; Created a custom reliable and parameter-adaptive UDP-based protocol</dd>

              <dt><strong>Rust</strong></dt>
              <dd>Created an Abstract Syntax Tree evaluator with arithmetic and comparative capabilities</dd>

              <dt></dt>
              <dd></dd>
            </dl>
          </li>
          <li>
            Worked on software development projects with a <strong>team</strong> (e.g. <a href="#Projects-PASG">Post-apocalyptic Survival Game</a> and <a href="#Projects-Lottie">Lottie AI</a>).
          </li>
          <li>
            Worked on projects using <strong>Machine Learning</strong> models like SVM and Linear Regression with <strong>Python</strong> (e.g. <a href="#Projects-Lottie">Lottie AI</a>).
          </li>
          <li>
            Worked on <a href="#Projects-NieR">a personal project</a> on creating a music-lyric video hybrid using solely <strong>C#</strong>.
          </li>
        </ul>
      ),
      [
        "Assembly (MIPS, x86)", "C", "C++", "C#", "CUDA", "MySQL", "Python", "Rust"
      ]
    ),
    skillListConstructor(
      "Web Development",
      (
        <ul>
          <li>
            Built personal web apps using native <strong>JavaScript</strong> and <strong>React</strong>.
          </li>
          <li>
            Built this site using <strong>React</strong>.
          </li>
          <li>
            Started with the development of a web-based rhythm game (<a href="#Projects-Rhythm-Game">Rhythm Strike</a>) using <strong>TypeScript</strong>.
          </li>
          <li>
            Built a full-stack geospatial web application using <strong>React</strong> (TS), <strong>Python</strong> (FastAPI), and <strong>PostgreSQL</strong> with <strong>Google Maps API</strong>.
          </li>
          
        </ul>
      ),
      [
        "HTML + CSS", "JavaScript", "React", "TypeScript"
      ]
    ),
    skillListConstructor(
      "Specific Technologies",
      (
        <ul>
          <li>
            Worked with <strong>xv6</strong> and <strong>Linux</strong> operating systems, using <strong>C</strong> and <strong>x86 Assembly</strong>, by modifying their core functionalities and behavior as desired, such as creating custom system calls and a custom process scheduling.
          </li>
          <li>
            Built an API using <strong>FastAPI</strong> that interacts with a <strong>PostgreSQL</strong> database for a full-stack geospatial web application that uses the <strong>Google Maps API</strong>.
          </li>
        </ul>
      ),
      [
        "FastAPI", "Google Maps API", "Linux", "PostgreSQL"
      ]
    ),
    skillListConstructor(
      "Membrane Computing Research",
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
      <div className={styles.__dropdown} key={idx}>
        <div 
          className={[
            styles.__dropdown__head,
            styles['__dropdown__head--style-skills'],
            active_chips[idx] ? styles['__dropdown__head--inactive'] : ""
          ].join(" ")}
          onClick={() => {clickHandler(idx);}}
        >
          <div className={styles.__dropdown__head__text}>
            <span className={styles.__dropdown__head__text__title}>{skill.title}</span>
            <span className={styles.__dropdown__head__text__tags}>
              {skill.tags.map((tag, idx) => (<span key={idx}>{tag}</span>))}
            </span>
          </div>
          <span>
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className={[
                styles.__dropdown__head__icon, 
                active_chips[idx] ? styles['__dropdown__head__icon--active'] : ""
              ].join(" ")} />
          </span>
        </div>
        <div className={[
          styles.__dropdown__body, 
          active_chips[idx] ? styles['__dropdown__body--active'] : ""
        ].join(" ")}>
          <div className={styles.__dropdown__body__container}>
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
        <img src={site_logo} alt="Site logo" loading="lazy" />
      </div>
    </section>
  );
}
