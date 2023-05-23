import { useState, useEffect } from "react";
import { Carousel, CarouselItem } from "react-round-carousel";

import { projects, ProjectsType } from "../../../../data/projects.js";

import "/src/styles/carousel.css";
import {
    ButtonComponent,
    ProjectsContainer,
    ProjectsWrapper,
    ResumeContainer,
} from "./style";
import { Modal } from "./Modal/index.js";

export function ProjectsSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentProject, setCurrentProject] = useState<ProjectsType>(
        projects[0]
    );

    // Monitor Screen Size
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Create an array of Carousel Items
    const items: CarouselItem[] = projects.map((project: ProjectsType) => ({
        alt: "",
        image: `${project.img}`,
        content: (
            <div
                onClick={() => handleOpenModal(project)}
                className="carousel__content"
            >
                <strong>{project.title}</strong>
                <span>{project.shortDesc}</span>
            </div>
        ),
    }));

    // Open modal
    function handleOpenModal(project: ProjectsType) {
        setModalOpen(!modalOpen);

        setCurrentProject(project);
        document.body.style.overflow = "hidden";
    }

    // Close modal
    function handleCloseModal() {
        setModalOpen(!modalOpen);
        document.body.style.overflow = "unset";
    }

    return (
        <ProjectsContainer id="projects">
            <Modal
                modalOpen={modalOpen}
                currentProject={currentProject}
                closeModal={handleCloseModal}
            />

            <ProjectsWrapper className="container">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    PROJECTS
                </h2>
                <Carousel
                    items={items}
                    itemWidth={
                        windowWidth <= 960
                            ? windowWidth <= 600
                                ? 280
                                : 500
                            : 900
                    }
                />
            </ProjectsWrapper>

            <ResumeContainer>
                <div className="overlay">
                    <div className="container">
                        <h2>CHECK OUT MY RÉSUMÉ!</h2>
                        <ButtonComponent>
                            <a
                                href="https://docdro.id/0JNTRdU"
                                target="__blank"
                            >
                                Grab a copy
                            </a>
                        </ButtonComponent>
                    </div>
                </div>
            </ResumeContainer>
        </ProjectsContainer>
    );
}
