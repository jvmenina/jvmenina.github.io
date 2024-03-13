import styles from "./App.module.css";
import { HeaderSection } from "./section_Header.tsx";
import { AboutSection } from "./section_About.tsx";
import { AcademicsSection } from "./section_Academics.tsx";
import { ProjectsSection } from "./section_Projects.tsx";
import { ExperiencesSection } from "./section_Experiences.tsx";
import { NavigationBar } from "./NavigationBar.tsx";
import { FooterSection } from "./section_Footer.tsx";

export default function HomePage() {
  return (
    <main className={styles['site-main']}>
      <NavigationBar />
      <HeaderSection />
      <AboutSection />
      <AcademicsSection />
      <ProjectsSection />
      <ExperiencesSection />
      <FooterSection />
    </main>
  );
}
