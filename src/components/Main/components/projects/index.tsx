import { ProjectsContainer, ProjectsWrapper } from "./style";

export function ProjectsSection() {
    return (
        <ProjectsContainer id="projects">
            <ProjectsWrapper className="container">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    Projects
                </h2>
            </ProjectsWrapper>
        </ProjectsContainer>
    );
}
