import { AboutSection } from "./components/About";
import { IntroSection } from "./components/Intro";
import { SkillsSection } from "./components/Skills";
import { ContactSection } from "./components/Contact";
import { MainContainer } from "./styles";
import { ProjectsSection } from "./components/Projects";

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
