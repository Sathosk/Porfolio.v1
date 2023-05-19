import { AboutSection } from "./components/About";
import { IntroSection } from "./components/Intro";
import { SkillsSection } from "./components/Skills";
import { ProjectsSection } from "./components/Projects";
import { MainContainer } from "./styles";
import { ContactSection } from "./components/Contact";

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
