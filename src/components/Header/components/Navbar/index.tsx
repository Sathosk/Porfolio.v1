import { List } from 'phosphor-react'

import { NavBarContainer, NavCollapse, NavMenu, NavToggle } from "./styles"

interface NavbarProps {
    openNavbar: boolean;
    activeSection: string;
    toggleNavMenu: () => void;
}

export function Navbar({ toggleNavMenu, activeSection, openNavbar }: NavbarProps) {
    return (
        <NavBarContainer role='navigation'>
            <NavToggle onClick={() => toggleNavMenu()}>
                <List size={24} />
            </NavToggle>

            <NavCollapse>
                <NavMenu isOpen={openNavbar}>
                    <li className={activeSection === 'about' ? 'activeLink ' : 'undefined'}><a href="#about">ABOUT</a></li>
                    <li className={activeSection === 'skills' ? 'activeLink ' : 'undefined'}><a href="#skills">SKILLS</a></li>
                    <li className={activeSection === 'projects' ? 'activeLink ' : 'undefined'}><a href="#projects">PROJECTS</a></li>
                    <li className={activeSection === 'contact' ? 'activeLink ' : 'undefined'}><a href="#contact">CONTACT</a></li>
                </NavMenu>
            </NavCollapse>
        </NavBarContainer>
    )
}