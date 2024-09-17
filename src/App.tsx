import styles from "./assets/App.module.css";
import { HeaderSection } from "./sections/section_Header.tsx";
import { AboutSection } from "./sections/section_About.tsx";
import { AcademicsSection } from "./sections/section_Academics.tsx";
import { CredentialsSection } from "./sections/section_Credentials.tsx";
import { ProjectsSection } from "./sections/section_Projects.tsx";
import { ExperiencesSection } from "./sections/section_Experiences.tsx";
import { NavigationBar } from "./sections/NavigationBar.tsx";
import { FooterSection } from "./sections/section_Footer.tsx";

export default function HomePage() {
  return (
    <main className={styles["site-main"]}>
      <NavigationBar />
      <HeaderSection />
      <AboutSection />
      <AcademicsSection />
      <CredentialsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
