import styles from "../assets/App.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type DropdownProps = {
  head_contents: JSX.Element,
  body_contents: JSX.Element,
  is_rounded: boolean,
};

export function DropdownComponent({
  head_contents,
  body_contents,
  is_rounded
}: DropdownProps) {
  const [ is_active, setIsActive ]: [
    active_chip: boolean,
    setActiveChip: React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const clickHandler = () => {
    setIsActive((prev) => (!prev));
  };

  return (
    <div className={styles.__dropdown}>
      <div 
        className={[
          styles.__dropdown__head,
          is_rounded ? styles["__dropdown__head--rounded"] : "",
          is_rounded && is_active ? styles["__dropdown__head--rounded--inactive"] : ""
        ].join(" ")}
        onClick={() => {clickHandler();}}
      >
        <div className={styles.__dropdown__head__contents}>
          {head_contents}
        </div>
        <span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={[
              styles.__dropdown__head__icon, 
              is_active ? styles["__dropdown__head__icon--active"] : ""
            ].join(" ")} />
        </span>
      </div>
      <div className={[
        styles.__dropdown__body, 
        is_active ? styles["__dropdown__body--active"] : ""
      ].join(" ")}>
        <div className={styles.__dropdown__body__container}>
          {body_contents}
        </div>
      </div>
    </div>
  );
}