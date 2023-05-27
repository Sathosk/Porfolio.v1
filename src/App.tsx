import { useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
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
                    setScrollPosition(currentPosition);

                    const currentSection = sectionOffsets.find((section) => {
                        return section.offsetTop - 50 <= currentPosition;
                    });

                    if (currentSection) {
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
    }, [sectionOffsets]);

    const isOnTop = scrollPosition === 0;

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Header isOnTop={isOnTop} activeSection={activeSection} />
                <Main />
                <Footer />
            </ThemeProvider>

            <GlobalStyle />
        </>
    );
}

export default App;
