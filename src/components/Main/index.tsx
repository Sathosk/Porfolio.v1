import { AboutSection } from "./components/About";
import { IntroSection } from "./components/Intro";
import { SkillsSection } from "./components/Skills";
import { ProjectsSection } from "./components/Projects/index.tsx";
import { ContactSection } from "./components/Contact";
import { MainContainer } from "./styles";

export function Main() {
    return (
        <MainContainer>
            <IntroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </MainContainer>
    );
}
