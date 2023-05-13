import styled from "styled-components";

interface NavProps {
    isOpen: boolean
}

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const NavMenu = styled.ul<NavProps>`
    display: flex;
    justify-content: space-between;

    font-size: 0.812rem;
    line-height: 3.125rem;
    
    margin: 0;
    padding: 0;
    /* gap: 2.5rem; */

    list-style: none;

    transition: height 0.6s ease-in;

    li {
        padding: 0 1.25rem;
        transition: background-color .2s ease-in;
    }

    li a:hover {
        opacity: 0.6;
        color: inherit;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        height: ${props => props.isOpen ? '16.375rem' : '0'};
        width: 100%;
        overflow: hidden;

        position: absolute;
        top: 3.125rem;
        left: 0;
        
        background-color: ${props => props.theme["--black"]};
        opacity: 0.9;

        li {
            background-color: inherit;
        }

        li:first-child {
            padding-top: 1rem;
        }

        li:last-child {
            padding-bottom: 3rem;
        }
    }
`;

export const NavCollapse = styled.div`
    
`;

export const NavToggle = styled.button`
    all: unset;

    display: none;
    cursor: pointer;

    svg {
        color: ${props => props.theme["--white"]};
    }

    svg:hover {
        
        opacity: 0.6;
    }

    @media screen and (max-width: 768px) {
        display: block;
    }
`;