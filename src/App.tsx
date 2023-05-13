import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState("intro");

    const sections = ["intro", "about", "skills", "projects"]; // add any other section ids here
    const sectionOffsets = sections.map((section) => {
        return {
            id: section,
            offsetTop: document.getElementById(section)?.offsetTop || 0,
        };
    });

    useEffect(() => {
        function handleScroll() {
            const currentSection = sectionOffsets.reduce((prev, curr) => {
                return curr.offsetTop <= scrollPosition + 50 ? curr : prev;
            }, sectionOffsets[0]);

            setActiveSection(currentSection.id);

            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition, sectionOffsets]);

    const isOnTop = scrollPosition === 0;

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Header isOnTop={isOnTop} activeSection={activeSection} />
                <Main />
            </ThemeProvider>

            <GlobalStyle />
        </>
    );
}

export default App;
