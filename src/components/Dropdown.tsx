import coreStyles from "../assets/core.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { joinStyles } from "../utils/joinStyles";

// type CustomDropdownStyle = {
//   customHeadStyle?: React.CSSProperties,
//   customActiveHeadStyle?: React.CSSProperties,
//   customBodyStyle?: React.CSSProperties,
//   customActiveBodyStyle?: React.CSSProperties,
// };

type DropdownProps = {
  head_contents: JSX.Element,
  body_contents: JSX.Element,
  is_rounded?: boolean,
  is_filled?: boolean,
  customClasses?: {
    customHeadClasses?: string[],
    customBodyClasses?: string[],
    customActiveHeadClasses?: string[],
    customActiveBodyClasses?: string[],
  },
};


export function DropdownComponent({
  head_contents,
  body_contents,
  is_rounded,
  is_filled,
  customClasses
}: DropdownProps) {
  const [ is_active, setIsActive ]: [
    active_chip: boolean,
    setActiveChip: React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const clickHandler = () => {
    setIsActive((prev) => (!prev));
  };

  return (
    <div className={coreStyles.comp__dropdown}>
      <div 
        className={joinStyles(
          is_filled ? coreStyles["comp__dropdown__head--filled"] : coreStyles.comp__dropdown__head,
          customClasses && customClasses.customHeadClasses ? joinStyles(...customClasses.customHeadClasses) : "",
          is_active ? coreStyles['comp__dropdown__head--active'] : "",
          is_active && customClasses && customClasses.customActiveHeadClasses ? joinStyles(...customClasses.customActiveHeadClasses) : "",
          is_rounded ? coreStyles['comp__dropdown__head--rounded'] : "",
          // is_rounded && is_active ? styles["__dropdown__head--rounded--inactive"] : ""
        )}
        onClick={() => {clickHandler();}}
      >
        <div className={coreStyles.comp__dropdown__head__contents}>
          {head_contents}
        </div>
        <span className={joinStyles(
          coreStyles['comp__dropdown__head__icon-container'],
          is_active ? coreStyles["comp__dropdown__head__icon-container--active"] : ""
        )}>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={joinStyles(
              coreStyles.comp__dropdown__head__icon, 
            )} />
        </span>
      </div>
      <div className={joinStyles(
        coreStyles.comp__dropdown__body, 
        is_active ? coreStyles["comp__dropdown__body--active"] : "",
        customClasses && customClasses.customBodyClasses ? joinStyles(...customClasses.customBodyClasses) : "",
        is_active && customClasses && customClasses.customActiveBodyClasses ? joinStyles(...customClasses.customActiveBodyClasses) : "",
      )}>
        <div className={coreStyles.comp__dropdown__body__container}>
          {body_contents}
        </div>
      </div>
    </div>
  );
}