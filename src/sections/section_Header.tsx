import { useEffect, useState } from "react";

import { joinStyles } from "../utils/joinStyles.ts";
import { FooterSection } from "./section_Footer.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, IconDefinition, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import cpp_logo from "/images/c++_logo.svg";
import python_logo from "/images/python_logo.svg";

import { Blinker, FadeInText } from "../components/AnimationComponents.tsx";
import { CardComponent } from "../components/Card.tsx";
import { useSections } from "../hooks/CustomHooks.tsx";

import coreStyles from "../assets/core.module.css";
import headerStyles from "../assets/header.module.css";

function createGreeting(): string {
  const time = new Date().getHours();
  const minute = new Date().getMinutes();
  let greeting_message: string = "Good ";
  if (time < 12) greeting_message += "Morning";
  else if (time === 12 && minute === 0) greeting_message += "Noon";
  else if (time >= 12 && time <= 18) greeting_message += "Afternoon";
  else greeting_message += "Evening";
  return greeting_message;
}

function FeaturedCard({
  svgIcon,
  faIcon,
  text,
  customStyle
} : {
  svgIcon?: string
  faIcon?: IconDefinition,
  text: string,
  customStyle?: React.CSSProperties
}) {
  return (
    <CardComponent
      additionalClassNames={[headerStyles.header__featured__card]}
      customStyle={customStyle}
    >
      <div className={headerStyles.header__featured__card__icon}>
        { faIcon ? <FontAwesomeIcon icon={faIcon} size="2x" /> : <></>}
        { svgIcon ? <img src={svgIcon} alt="" /> : <></> }
      </div>
      <div className={headerStyles.header__featured__card__details}>
        {text}
      </div>
    </CardComponent>
  );
}

const featuredCardsList = [
  { svgIcon: cpp_logo, text: "C++" },
  { svgIcon:python_logo, text:"Python" }, 
  { faIcon:faReact, text:"React" }, 
  { faIcon:faJs, text:"JavaScript" }, 
  { faIcon:faHtml5, text:"HTML" }, 
  { faIcon:faCss3Alt, text:"CSS" }, 
];

const chipsList = [
  "Software Developer",
  "Membrane Computing Researcher",
  "Life-long Learner",
]

export function HeaderSection(
  // { isActive } : {isActive: boolean}
) {
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.header;
  const sectionRef = sectionContexts.sectionRefs.header;

  const [ highlightStyle, setHighlightStyle ] = useState<string>("");
  const [ idx, setIdx ] = useState<number>(0);

  const fullName = "Jan Michael MENINA";
  useEffect(() => {
    let typeInterval: number;
    const delayTimer = setTimeout(() => {
      typeInterval = setInterval(() => {
        setIdx(i => {
          if (i == 12) {
            setHighlightStyle("0 0.5rem");
          }
          if (i >= fullName.length) {
            clearInterval(typeInterval);
            return i;
          }

          return i + 1;
        });
      }, 30);
    }, 1000);

    return () => {
      clearTimeout(delayTimer);
      if (typeInterval) clearInterval(typeInterval);
    }
  }, []);
  const firstName = fullName.slice(0, Math.min(idx, 12));
  const lastName = fullName.slice(12, idx);
  const blinkerGap = idx == fullName.length ? " " : "";

  return (
    <header ref={sectionRef} className={joinStyles(headerStyles["header"], isActive ? coreStyles["__section--expanded"] : coreStyles["__section--collapsed"])}>
      <div className={joinStyles(
        headerStyles["header__container"], 
        coreStyles["__limit-width"]
      )}>
        <div className={headerStyles["header__contents"]}>
          <div className={headerStyles["header__greeting"]}>
            {FadeInText({
              text: `${createGreeting()}! My name is`, 
              msPerCharGap: 15,
              half: true
            })}
          </div>
          <h1 style={{animationDuration: "0ms"}}>
            &gt; {firstName}<span style={{padding: highlightStyle}}>{lastName}</span>{blinkerGap}<Blinker />
          </h1>
          <div className={headerStyles["header__chips"]}>
            {
              chipsList.map((chipText, index) => (
                <span 
                  key={index}
                  style={{animationDelay: `calc(1000ms + ${index} * 200ms)`}}
                >{chipText}</span>
              ))
            }
          </div>
          <div className={headerStyles.header__featured}>
            {
              featuredCardsList.map((card, index) => (
                <FeaturedCard key={index} svgIcon={card.svgIcon} faIcon={card.faIcon} text={card.text} customStyle={{
                  animationDelay: `${1500 + index * 100}ms`,
                  opacity: 0
                }} />
              ))
            }
          </div>
        </div>
      </div>
    </header>
  );
}
