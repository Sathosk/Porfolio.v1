import { AboutSection } from "./components/About";
import { IntroSection } from "./components/Intro";
import { SkillsSection } from "./components/Skills";
import { ContactSection } from "./components/Contact";
import ProjectsSection from "./components/Project";
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
