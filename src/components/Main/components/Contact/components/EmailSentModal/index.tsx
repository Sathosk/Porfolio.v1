import { useRef } from "react";

import { X } from "phosphor-react";
import { ModalContainer, ModalOverlay } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export function EmailSentModal({ isOpen, closeModal }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    function handleCloseModal(
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
    ) {
        if (
            e.target === overlayRef.current ||
            buttonRef.current?.contains(e.target as Node)
        ) {
            closeModal();
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                >
                    <ModalOverlay
                        onClick={(e) => handleCloseModal(e)}
                        ref={overlayRef}
                    >
                        <ModalContainer>
                            <p>
                                Thanks for getting in touch! I will get back to
                                you as soon as possible.
                            </p>
                            <button onClick={closeModal} ref={buttonRef}>
                                <X size={24} weight="bold" />
                            </button>
                        </ModalContainer>
                    </ModalOverlay>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
