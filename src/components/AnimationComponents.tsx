import { useEffect, useState, useRef } from "react";
// import { joinStyles } from "../utils/joinStyles";

import coreStyles from "../assets/core.module.css";

/**
 * An underline that blinks
 */
export const Blinker = () => (
  <span className={coreStyles["comp__blink"]}> <span></span> </span>
);

/**
 * Per-character fade-in text
 */

type FadeInTextProps = {
  text: string, 
  msCharFadeDuration?: number,
  msPerCharGap?: number,
  msDelay?: number,
  half?: boolean
}

export function FadeInText({
  text, 
  msCharFadeDuration = 400,
  msPerCharGap = 25,
  msDelay = 0,
  half = false
} : FadeInTextProps): JSX.Element {
  return (
      <>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={coreStyles['comp__fade-char']}
            style={{ 
              animationDelay: `calc(${index} * ${msPerCharGap}ms + ${msDelay}ms)`,
              animationIterationCount: half ? "0.5" : "1",
              animationDuration: `${msCharFadeDuration}ms`
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </>
    );
}

/**
 * A typewriter text effect. Returns a raw text.
 */

//// Timeout version
// function TypewriterComponent({ 
//   text,
//   characterInterval,
//   animationDelay,
// }: {
//   text : string,
//   characterInterval : number,
//   animationDelay : number,
// }) {
//   const [ idx, setIdx ] = useState<number>(0);
//   useEffect(() => {
//     setIdx(0);
//     const t = text;
//     let typeInterval: number;
//     const delayTimer = setTimeout(() => {
//       typeInterval = setInterval(() => {
//         setIdx(i => {
//           if (i >= t.length) {
//             clearInterval(typeInterval);
//             return i;
//           }

//           return i + 1;
//         });
//       }, characterInterval);
//     }, animationDelay);

//     return () => {
//       clearTimeout(delayTimer);
//       if (typeInterval) clearInterval(typeInterval);
//     }
//   }, [text, characterInterval, animationDelay]);

//   return (
//     <>
//       {text.slice(0,idx)}
//     </>
//   );
// }

// Animation version
export function TypewriterComponent({ 
  text,
  characterInterval,
  animationDelay,
}: {
  text : string,
  characterInterval : number,
  animationDelay : number,
}) {
  const [idx, setIdx] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    setIdx(0);
    startTimeRef.current = null;

    const delayTimer = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        
        const elapsed = timestamp - startTimeRef.current;
        const newIdx = Math.min(
          Math.floor(elapsed / characterInterval),
          text.length
        );
        
        setIdx(newIdx);
        
        if (newIdx < text.length) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      
      rafRef.current = requestAnimationFrame(animate);
    }, animationDelay);

    return () => {
      clearTimeout(delayTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, characterInterval, animationDelay]);

  const [texts, setTexts] = useState<string[]>([]);
  useEffect(() => {
    const spaces = [];
    for (let i = 0; i < text.length; i++) if (text[i] === " ") spaces.push(i);

    // const texts: string[] = [];
    let prev = 0;
    const texts_temp = [];
    spaces.forEach((spaceIndex) => {
      texts_temp.push(text.slice(prev, Math.min(idx, spaceIndex+1)));
      // setTexts((old) => [...old, text.slice(prev, spaceIndex)]);
      prev = spaceIndex+1;
    });
    texts_temp.push(text.slice(prev, idx));
    // setTexts((old) => [...old, text.slice(prev)]);
    setTexts(texts_temp);
  }, [text, idx]);

  // return <>{text.slice(0, idx)}</>;
  return <>{
    texts.map((t, i) => (
      <span style={{display:"inline-block", whiteSpace:"pre"}} key={i}>
        {t}{i === texts.length - 1 ? (<Blinker />) : <></>}
      </span>
    ))
  }</>;
}
