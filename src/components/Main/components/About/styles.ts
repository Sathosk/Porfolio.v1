import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.3) 100%);
    background-attachment: inherit;

    background-color: ${props => props.theme["--blue-500"]};
`;

export const AboutWrapper = styled.div`
    gap: 2.5rem;
    min-width: 19rem;
    text-align: center;

    p {
        max-width: 60rem;
    }

    img {
        margin: 1rem 0;
        width: 10rem;
        height: 10rem;
        background-color: white;
        border-radius: 50%;
    }
`;

export const Tldr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;  
    opacity: 0.7;
    color: ${props => props.theme["--black"]};
    min-width: 19rem;
    padding: 2rem;
    border: 2px solid ${props => props.theme["--blue-100"]};
    border-radius: 8px;
    background-color: ${props => props.theme["--gray"]};
`;

export const TldrContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const TldrContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
`;