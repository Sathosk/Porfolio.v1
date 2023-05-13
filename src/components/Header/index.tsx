import { Code } from "phosphor-react";
import { HeaderContainer, Brand } from "./styles";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

interface HeaderProps {
    isOnTop: boolean;
    activeSection: string;
}

export function Header({ isOnTop, activeSection }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNavMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderContainer isOnTop={isOnTop}>
            <Brand href="#">
                <Code size={24} color="white" weight="bold" />
                TIAGO CRUZ
            </Brand>

            <Navbar toggleNavMenu={toggleNavMenu} openNavbar={isOpen} activeSection={activeSection} />
        </HeaderContainer>
    )
}