import { Code } from "phosphor-react";
import { HeaderContainer, Brand } from "./styles";
import { Navbar } from "./components/Navbar";
import { useEffect, useMemo, useState } from "react";

export function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPageOnTop, setIsOnTop] = useState(true);
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
                    const scrollPosition = window.pageYOffset;

                    if (scrollPosition === 0) setIsOnTop(true);
                    if (scrollPosition > 0 && isPageOnTop !== false) {
                        setIsOnTop(false);
                    }

                    const currentSection = sectionOffsets.find((section) => {
                        return section.offsetTop - 50 <= scrollPosition;
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
    }, [sectionOffsets, activeSection, isPageOnTop]);

    function toggleNavMenu() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <HeaderContainer isOnTop={isPageOnTop}>
            <Brand href="#">
                <Code size={24} color="white" weight="bold" />
                TIAGO CRUZ
            </Brand>

            <Navbar
                toggleNavMenu={toggleNavMenu}
                openNavbar={isDropdownOpen}
                activeSection={activeSection}
            />
        </HeaderContainer>
    );
}
