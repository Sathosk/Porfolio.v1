import { Code } from "phosphor-react";
import { HeaderContainer, Brand } from "./styles";
import { Navbar } from "./components/Navbar";
import { useEffect, useMemo, useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);
    const [activeSection, setActiveSection] = useState("intro");

    const sections = [
        "intro",
        "about",
        "skills",
        "projects",
        "contact",
    ].reverse(); // add any other section ids here to highlight the menu when on screen.
    const sectionOffsets = useMemo(() => {
        return sections.map((section) => ({
            id: section,
            offsetTop: document.getElementById(section)?.offsetTop || 0,
        }));
    }, [sections]);

    useEffect(() => {
        let isScrolling = false;

        function handleScroll() {
            if (!isScrolling) {
                isScrolling = true;

                requestAnimationFrame(() => {
                    const currentPosition = window.pageYOffset;

                    if (currentPosition === 0) setIsOnTop(true);
                    if (currentPosition > 0 && isOnTop !== false) {
                        setIsOnTop(false);
                    }

                    const currentSection = sectionOffsets.find((section) => {
                        return section.offsetTop - 50 <= currentPosition;
                    });

                    if (currentSection && currentSection.id !== activeSection) {
                        setActiveSection(currentSection.id);
                    }

                    isScrolling = false;
                });
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionOffsets, activeSection, isOnTop]);

    function toggleNavMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <HeaderContainer isOnTop={isOnTop}>
            <Brand href="#">
                <Code size={24} color="white" weight="bold" />
                TIAGO CRUZ
            </Brand>

            <Navbar
                toggleNavMenu={toggleNavMenu}
                openNavbar={isOpen}
                activeSection={activeSection}
            />
        </HeaderContainer>
    );
}
