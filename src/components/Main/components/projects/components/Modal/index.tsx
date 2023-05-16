import { useRef } from "react";
import { ProjectsType } from "../../../../../../data/projects";
import styles from "./index.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";

interface ModalProps {
    modalOpen: boolean;
    currentProject: ProjectsType;
    closeModal: () => void;
}

export function Modal({ modalOpen, currentProject, closeModal }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
                        <div className={styles.imgWrapper}>
                            <img src={currentProject?.img} alt="" />
                        </div>

                        {/* Desc Wrapper */}
                        <div className={styles.descriptionWrapper}>
                            <p>{currentProject?.description}</p>
                            <div className="links">
                                <span>
                                    {"Live Demo: "}
                                    <a
                                        href={`${currentProject?.liveLink}`}
                                        target="_blank"
                                    >
                                        {currentProject?.liveLink}
                                    </a>
                                </span>
                                <span>
                                    {"GitHub: "}
                                    <a
                                        href={`${currentProject?.githubLink}`}
                                        target="_blank"
                                    >
                                        {currentProject?.githubLink}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
