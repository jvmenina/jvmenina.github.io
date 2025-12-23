import { useSections } from "../hooks/CustomHooks";
import { Section } from "../sections/SectionNames";

export function CrossSectionAnchor({ 
  href,
  targetSection,
  children
} : {
  href?: string,
  targetSection: Section,
  children: string | JSX.Element | JSX.Element[]
}) {
  const { sectionContexts, navContexts } = useSections();
  const switchTo = sectionContexts.manualSectionSwitcher;
  const setActiveIndex = navContexts.setActiveIndex;
  return (
    <a 
      href={href}
      onClick={() => {switchTo(targetSection); setActiveIndex(targetSection as number);}}
    >
      {children}
    </a>
  );
}