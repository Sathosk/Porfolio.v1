import { useRef } from "react";
import { ProjectsType } from "../../../../../../data/projects";
import { tools } from "../../../../../../data/skills.js";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";

import styles from "./index.module.css";

interface ModalProps {
    modalOpen: boolean;
    currentProject: ProjectsType;
    closeModal: () => void;
}

export function Modal({ modalOpen, currentProject, closeModal }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toolsObj = Object.fromEntries(
        tools.map((tool) => [tool.name.toLowerCase(), tool.src])
    );

    toolsObj.handlebars =
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg";

    const projectTechs = currentProject.technologies.toLowerCase().split(", ");
    console.log(projectTechs);

    function handleCloseModal(
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
    ) {
        console.log();
        if (
            e.target === overlayRef.current ||
            buttonRef.current?.contains(e.target as Node)
        ) {
            closeModal();
        }
    }

    return (
        <AnimatePresence>
            {modalOpen && (
                // Modal Overlay
                <motion.div
                    className={styles.modalOverlay}
                    ref={overlayRef}
                    onClick={(e) => handleCloseModal(e)}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                >
                    {/* Modal Container */}
                    <motion.div
                        className={styles.modalContainer}
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                    >
                        {/* Close Button */}
                        <button
                            className={styles.closeButton}
                            ref={buttonRef}
                            onClick={(e) => handleCloseModal(e)}
                        >
                            <X weight="bold" />
                        </button>

                        {/* Img Wrapper */}
                        <motion.div
                            className={styles.imgWrapper}
                            initial={{ x: -70, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.6,
                                },
                            }}
                        >
                            <img src={currentProject?.img} alt="" />
                        </motion.div>

                        {/* Desc Wrapper */}
                        <div className={styles.descriptionWrapper}>
                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.8,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <p>{currentProject?.description}</p>
                            </motion.div>

                            <div className={styles.footer}>
                                <div className="links">
                                    <motion.div
                                        initial={{ x: -70, opacity: 0 }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 1.2,
                                                duration: 0.6,
                                            },
                                        }}
                                    >
                                        <span>
                                            {"Live Demo: "}
                                            <a
                                                href={`${currentProject?.liveLink}`}
                                                target="_blank"
                                            >
                                                {currentProject?.liveLink}
                                            </a>
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ x: -70, opacity: 0 }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 1.6,
                                                duration: 0.6,
                                            },
                                        }}
                                    >
                                        <span>
                                            {"GitHub: "}
                                            <a
                                                href={`${currentProject?.githubLink}`}
                                                target="_blank"
                                            >
                                                {currentProject?.githubLink}
                                            </a>
                                        </span>
                                    </motion.div>
                                </div>
                                <div className={styles.modalIcons}>
                                    {projectTechs.map(
                                        (tech) =>
                                            toolsObj[tech] && (
                                                <motion.div
                                                    initial={{
                                                        x: -70,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            delay: 2,
                                                            duration: 0.6,
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        className={styles.icon}
                                                        src={`${toolsObj[tech]}`}
                                                        title={tech}
                                                    />
                                                </motion.div>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
