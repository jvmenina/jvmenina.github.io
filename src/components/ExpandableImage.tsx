import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import coreStyles from "../assets/core.module.css";
import { useState } from "react";
import { createPortal } from 'react-dom';
import { joinStyles } from "../utils/joinStyles";

export function ExpandableImage({
  src,
  alt,
} : {
  src : string,
  alt : string,
}) {
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ isZoomed, setIsZoomed ] = useState<boolean>(false);

  return (<figure>
    <img src={src} alt={alt}  loading="lazy" style={{cursor:"pointer"}} onClick={() => {
      setIsActive(true);
      setIsZoomed(false);
    }} />
    {
      createPortal((
        <div className={isActive ? coreStyles.comp__image : coreStyles['comp__image--hidden']}>
          <FontAwesomeIcon icon={faXmark} size={"2x"} className={coreStyles.comp__image__exit} onClick={() => {
            setIsActive(false);
          }} />
          <div className={coreStyles["comp__image__img-container"]}>
            <img src={src} alt={alt} loading="lazy" className={joinStyles(
              isZoomed ? coreStyles['comp__image__img--zoom-in'] : "",
                  )}
              onDoubleClick={() => {
                setIsZoomed((prev) => (!prev));
              }}
            />
          </div>
        </div>
      ), document.body)
    }
  </figure>);
}