import styled from "styled-components";

export const Intro = styled.section`
    position: relative;
    height: 100vh;
    background-image: url('src/assets/pxfuel.jpg');
`;

export const IntroContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    height: 100%;

    z-index: 998;

    h1 {
        font-size: 3.75rem;
    }

    span {
        font-weight: 300;
        display: block;
    }
`;

export const NextSection = styled.a`
    all: unset;
    position: absolute;
    bottom: 5rem;
    opacity: 0.6;

    transition: opacity 300ms ease;
    
    &:hover {
        opacity: 1;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        bottom: 5rem;
    }
`;