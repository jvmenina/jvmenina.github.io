import { useRef, useState } from "react";
import { useOutsideTargetClickHandler, useSections } from "../hooks/CustomHooks";

import { joinStyles } from "../utils/joinStyles";

import { CardComponent } from "../components/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import coreStyles from "../assets/core.module.css";
import footerStyles from "../assets/footer.module.css";
import { Section } from "./SectionNames";

export function FooterSection() {
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const { sectionContexts } = useSections();
  const headerIsActive = sectionContexts.isActive.header;

  const infoButtonRef = useRef(null);
  const infoRef = useRef(null);
  useOutsideTargetClickHandler(infoRef, infoButtonRef, ()=>{setIsActive(false);})

  return (
    <footer className={joinStyles(
      footerStyles["site-footer"],
      // headerIsActive ? "" : footerStyles['site-footer--disabled']
    )}>
      <CardComponent
        additionalClassNames={[
          footerStyles["site-footer__container"]
          , isActive && headerIsActive ? "__section--expanded" : "__section--collapsed"
        ]}
        cardRef={infoRef}
      >
        <span style={{display: "none"}}></span>
        {/* <div className={footerStyles["site-footer__socials"]}>
          <a href="https://github.com/jvmenina/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div> */}
        <div className={footerStyles["site-footer__credits"]}>
          <p>
            The images (i.e. logos) in this website that are being used to represent the <strong>University of the Philippines</strong>, <strong>Navagis Asia Pacific PTE Ltd. - Philippine Branch Office</strong>, <strong>Algorithms and Complexity Laboratory</strong>, and <strong>University of Perpetual Help System DALTA Las Piñas</strong> are owned and trademarked by the respective entities each logo is meant to represent.
          </p>
          <p>
            I claim no ownership of any trademarked or copyrighted materials that are used in this website. Furthermore, these materials are not being used for any kind of monetization.
          </p>
          <p>
            The design of this website and its logo are provided by myself. This website is not monetized by myself in any way.
          </p>
        </div>
      </CardComponent>
      <div className={joinStyles(
        footerStyles['site-footer__info-button']
        , isActive || !headerIsActive ? footerStyles['site-footer__info-button--hidden'] : ""
      )}>
        <FontAwesomeIcon 
          icon={faCircleInfo} ref={infoButtonRef} size={"xl"} 
          onClick={() => {setIsActive(true);}
        }/>
      </div>
    </footer>
  );
}