import { useState, createContext } from "react";
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

export function SectionContextProvider({ children }: { children: JSX.Element[]; }) {
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

  const sectionContexts: SectionContextsType = {activeSection:activeSection, sectionSwitcher:sectionSwitcher, manualSectionSwitcher:manualSectionSwitcher, isActive:isActive};
  const navContexts: NavContextsType = {activeIndex:activeIndex, setActiveIndex:setActiveIndex};

  return (
    <SectionContext.Provider value={{ sectionContexts, navContexts }}>
      {children}
    </SectionContext.Provider>
  );
}

