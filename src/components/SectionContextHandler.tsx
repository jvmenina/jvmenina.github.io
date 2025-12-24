import { useState, createContext, useRef } from "react";
import { Section } from "../sections/SectionNames";

export type SectionSwitcherType = {
  header: () => void,
  about: () => void,
  academics: () => void,
  credentials: () => void,
  experiences: () => void,
  projects: () => void,
};

type SectionContextsType = {
  activeSection: Section,
  sectionSwitcher: SectionSwitcherType,
  manualSectionSwitcher: (section:Section) => void,
  sectionRefs: {
    header: React.RefObject<HTMLElement>,
    about: React.RefObject<HTMLElement>,
    academics: React.RefObject<HTMLElement>,
    credentials: React.RefObject<HTMLElement>,
    experiences: React.RefObject<HTMLElement>,
    projects: React.RefObject<HTMLElement>,
  },
  isActive: {
    header: boolean,
    about: boolean,
    academics: boolean,
    credentials: boolean,
    experiences: boolean,
    projects: boolean,
  }
};

type NavContextsType = {
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
};

export type SectionContextSetType = {
  sectionContexts: SectionContextsType,
  navContexts: NavContextsType
};

export const SectionContext = createContext<SectionContextSetType | null>(null);

/**
 * A context provider for all sections.
 */

export function SectionContextProvider({ children }: { children: JSX.Element | JSX.Element[]; }) {
  /**
   * Section Contexts
   */
  // const [activeSection, setActiveSection] = useState<Section>(Section.About);
  const [activeSection, setActiveSection] = useState<Section>(Section.Header);

  const sectionSwitcher = {
    header: () => { setActiveSection(Section.Header); },
    about: () => { setActiveSection(Section.About); },
    academics: () => { setActiveSection(Section.Academics); },
    credentials: () => { setActiveSection(Section.Credentials); },
    experiences: () => { setActiveSection(Section.Experiences); },
    projects: () => { setActiveSection(Section.Projects); },
  };

  const manualSectionSwitcher = (section: Section) => { setActiveSection(section); };

  const sectionRefs = {
    header: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    academics: useRef<HTMLElement>(null),
    credentials: useRef<HTMLElement>(null),
    experiences: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  };

  const isActive = {
    header: activeSection === Section.Header,
    about: activeSection === Section.About,
    academics: activeSection === Section.Academics,
    credentials: activeSection === Section.Credentials,
    experiences: activeSection === Section.Experiences,
    projects: activeSection === Section.Projects,
  };

  /**
   * Navigation Bar Contexts
   */

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sectionContexts: SectionContextsType = {activeSection, sectionSwitcher, manualSectionSwitcher, sectionRefs, isActive};
  const navContexts: NavContextsType = {activeIndex, setActiveIndex};

  return (
    <SectionContext.Provider value={{ sectionContexts, navContexts }}>
      {children}
    </SectionContext.Provider>
  );
}

