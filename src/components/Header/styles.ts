import styled from "styled-components";

interface HeaderProps {
    isOnTop: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.isOnTop ? 'transparent' : 'black'};

    padding: 0 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: ${props => props.isOnTop ? '5rem' : '3.125rem'};
    
    transition: height 0.6s ease-in-out, background-color 0.6s ease-in-out;

    z-index: 999;

    @media screen and (max-width: 768px) {
        background-color: black;
        height: 3.125rem;
    }
`;

export const Brand = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.5rem;

    font-weight: 400;
    transition: opacity 300ms ease;

    svg {
        color: ${props => props.theme["--white"]};

        transition: transform 0.7s cubic-bezier(.73,.1,.94,.87);
    }

    &:hover {
        /* color: inherit; */
        opacity: 0.6;

        svg {
            transform: rotate(360deg);
        }
    }
`;