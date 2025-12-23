import { HeaderSection } from "./sections/section_Header.tsx";
import { AboutSection } from "./sections/section_About.tsx";
import { AcademicsSection } from "./sections/section_Academics.tsx";
import { CredentialsSection } from "./sections/section_Credentials.tsx";
import { ProjectsSection } from "./sections/section_Projects.tsx";
import { ExperiencesSection } from "./sections/section_Experiences.tsx";
import { NavigationBar } from "./sections/NavigationBar.tsx";
// import { NavigationAnchor } from "./sections/NavigationAnchor.tsx";

import { SectionContextProvider } from "./components/SectionContextHandler.tsx";

import coreStyles from "./assets/core.module.css";

export default function HomePage() {
  return (
    // <main className={styles["site-main"]}>
    //   <NavigationBar />
    //   <HeaderSection />
    //   <NavigationAnchor id="About" />
    //   <AboutSection />
    //   <NavigationAnchor id="Academics" />
    //   <AcademicsSection />
    //   <NavigationAnchor id="Credentials" />
    //   <CredentialsSection />
    //   <NavigationAnchor id="Experiences" />
    //   <ExperiencesSection />
    //   <NavigationAnchor id="Projects" />
    //   <ProjectsSection />
    //   <FooterSection />
    // </main>

    <main id={coreStyles["main"]}><SectionContextProvider>
      <NavigationBar />
      <div id={coreStyles["main__contents"]}>
        <HeaderSection />
        <AboutSection />
        <AcademicsSection />
        <CredentialsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <div id={coreStyles.main__contents__bg}></div>
      </div>
    </SectionContextProvider></main>
  );
}
