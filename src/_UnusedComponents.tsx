import { useState } from "react";
import styles from "./App.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faJs, faPython, faReact, faRust } from "@fortawesome/free-brands-svg-icons";
import { faC, faL } from "@fortawesome/free-solid-svg-icons";

export function LanguagesComponent() {
  const base_size = 80;
  return (
    <div className={styles.about__langs}>
      <LanguageCircle 
        size={base_size}
        percentage={60}
        label={"React"}
        icon={faReact}
      />
      <LanguageCircle 
        size={base_size}
        percentage={90}
        label={"Python"}
        icon={faPython}
      />
      <LanguageCircle 
        size={base_size}
        percentage={70}
        label={"Javascript"}
        icon={faJs}
      />
      <LanguageCircle 
        size={base_size}
        percentage={50}
        label={"Rust"}
        icon={faRust}
      />
      <LanguageCircle 
        size={base_size}
        percentage={90}
        label={"C"}
        icon={faC}
      />
      <LanguageCircle 
        size={base_size}
        percentage={70}
        label={"C++"}
        icon={faC}
      />
      <LanguageCircle 
        size={base_size}
        percentage={50}
        label={"C#"}
        icon={faC}
      />
      <LanguageCircle 
        size={base_size}
        percentage={90}
        label={"LaTeX"}
        icon={faL}
      />
    </div>
  );
}

function LanguageCircle( { 
  size,
  percentage,
  label,
  icon,
}: {
  size: number,
  percentage: number,
  label: string,
  icon: IconDefinition
}) {
  const cx = size / 2;
  const cy = size / 2;
  const circle_radius = (size * 0.5) * 0.5;
  const circle_core = (
    <circle
      cx={cx}
      cy={cy}
      r={circle_radius}
      fill="white"
      className={styles.about__langs__lang__graphic__circle} 
    />
  );
  
  const label_size = circle_radius * 0.7;
  const label_graphic = (
    <g>
      <FontAwesomeIcon 
        icon={icon}
        x={cx - label_size}
        y={cy - label_size}
        width={label_size * 2}
        height={label_size * 2}
        className={styles.about__langs__lang__graphic__circle__label}
      />
    </g>
  );
  
  const donut_gap = 6;
  const donut_width = (size / 2 - circle_radius - donut_gap);

  const donut_radius = donut_gap + circle_radius + donut_width / 2;
  const donut_circumference = (2 * Math.PI * donut_radius);
  const donut_meter_progress = (percentage * donut_circumference) / 100;
  const donut_meter_fg = (
    <circle 
      cx={cx}
      cy={cy}
      r={donut_radius}
      strokeWidth={donut_width}
      strokeDashoffset={donut_circumference / 4}
      strokeLinecap={"round"}
      strokeDasharray={donut_meter_progress + " " + (donut_circumference - donut_meter_progress)}
      fill="none"
      className={styles.about__langs__lang__graphic__donut__meter}
    />
  );
  const donut_meter_bg = (
    <circle 
      cx={cx}
      cy={cy}
      r={donut_radius}
      strokeWidth={donut_width}
      fill="none"
      className={[styles["about__langs__lang__graphic__donut__meter"], styles["about__langs__lang__graphic__donut__bg"]].join(" ")}
    />
  );
  const donut_meter = (
    <g
      className={styles['about__langs__lang__graphic__donut']}
    >
      {donut_meter_bg}
      {donut_meter_fg}
    </g>
  )

  return (
    <div className={styles.about__langs__lang}>
      <div className={styles.about__langs__lang__graphic}>
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          overflow={"visible"}
        >
          {circle_core}
          {donut_meter}
          {label_graphic}
        </svg>
      </div>
      <span className={styles.about__langs__lang__tooltip}>{label}</span>
    </div>
  );
}

export function SkillCircle_Pie( { 
  size,
  filled_bars,
  total_bars 
}: {
  size: number,
  filled_bars: number,
  total_bars: number
}) {
  const [ hover_states, setHoverStates ]: [
    hover_states: boolean[],
    setHoverStates: React.Dispatch<React.SetStateAction<boolean[]>>
  ] = useState(new Array(total_bars).fill(false));

  const roundNumber = (num: number) => {
    const _precision = 1e5;
    return (Math.round(num * _precision) / _precision);
  };
  const polarToRect = ({r, t}: {r:number, t:number}) => {
    // THETA (t) IS IN DEGREES
    const _base_rotation = -90;
    
    return {
      x: roundNumber(r * Math.cos((t + _base_rotation) * (Math.PI / 180))), 
      y: roundNumber(r * Math.sin((t + _base_rotation) * (Math.PI / 180)))
    };
  };

  const cx = size / 2;
  const cy = size / 2;
  const circle_radius = (size * 0.5) * 0.5;
  const donut_radius = circle_radius + 5;
  const donut_width = 8;

  const bar_gap = 0;
  const angle_per_bar = 180 / total_bars;
  const bar_paths = [];
  for (let i = 0; i < total_bars; i++) {    
    const curr_angle = i * angle_per_bar;
    const curr_donut_radius = hover_states[i] ? donut_radius + 0 : donut_radius;
    const curr_donut_width =  hover_states[i] ? donut_width + 8 : donut_width;
    const curr_bar_gap = hover_states[i] ? 0 : hover_states.some((i) => (i)) ? bar_gap + 0 : bar_gap;

    const _inner_start = polarToRect({r: curr_donut_radius, t: curr_angle + curr_bar_gap});
    const _inner_end = polarToRect({r: curr_donut_radius, t: curr_angle + angle_per_bar - curr_bar_gap});
    const _outer_start = polarToRect({r: curr_donut_radius + curr_donut_width, t: curr_angle + angle_per_bar - curr_bar_gap});
    const _outer_end = polarToRect({r: curr_donut_radius + curr_donut_width, t: curr_angle + curr_bar_gap});
    
    bar_paths.push(<path 
      d={`
        M ${cx + _inner_start.x},${cy + _inner_start.y}
        A ${curr_donut_radius},${curr_donut_radius} 0 0,1 ${cx + _inner_end.x},${cy + _inner_end.y}
        L ${cx + _outer_start.x},${cy + _outer_start.y}
        A ${curr_donut_radius + curr_donut_width},${curr_donut_radius + curr_donut_width} 0 0,0 ${cx + _outer_end.x},${cy + _outer_end.y}
        Z
      `} 
      strokeWidth={2}
      key={i}
      className={[styles.about__langs__bar__meter, i < filled_bars ? styles['about__langs__bar__meter-filled'] : ""].join(" ")}
      onMouseOver={() => {
        const new_hover_states = hover_states.map((_state, idx) => ((idx === i) ? true : false));
        setHoverStates(new_hover_states);
      }}
      onMouseOut={() => {
        const new_hover_states = hover_states.map(() => (false));
        setHoverStates(new_hover_states);
      }}
    />);
  }
  
  return (
    <div className={styles.about__langs__bar}>
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        overflow={"visible"}
      >
        <circle
          cx={cx}
          cy={cy}
          r={circle_radius}
          fill="white"
          className={styles.about__langs__bar__circle}
        />

        {bar_paths}
        
        <FontAwesomeIcon 
          icon={faReact}
          x={cx - circle_radius}
          y={cy - circle_radius}
          width={circle_radius*2}
          height={circle_radius*2}
          className={styles.about__langs__bar__circle__label}
        />
      </svg>
    </div>
  );
}