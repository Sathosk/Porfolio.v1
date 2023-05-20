import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(18,36,56,1) 30%, rgba(13,27,42,1) 100%);
`;

export const AboutWrapper = styled.div`
    gap: 2.5rem;
    min-width: 19rem;
    text-align: center;

    p {
        max-width: 60rem;
    }
`;


export const ImgWrapper = styled.div`

    background: white;
    animation: morph 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.6);
    height: 10rem;
    transition: all 1s ease-in-out;
    width: 10rem;
    z-index: 5;


    @keyframes morph {
        0% {
                border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
                background: white;
        } 
        
        50% {
                border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
                background: white;
        }
    
        100% {
            border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
            background: white;
        } 
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