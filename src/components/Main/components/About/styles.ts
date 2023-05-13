import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 17%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.3) 62%, rgba(0, 0, 0, 0.2) 100%);
        background-attachment: fixed;

    min-height: 100vh;
    background-color: ${props => props.theme["--blue-500"]};
`;

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    min-width: 19rem;
    padding: 3rem 0;
    text-align: center;

    h2 {
        font-weight: 400;
    }

    p {
        max-width: 40.625rem;
        font-weight: 300;
        font-style: italic;
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
    padding: 1rem;
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