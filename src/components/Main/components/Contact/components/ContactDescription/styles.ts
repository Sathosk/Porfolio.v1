import styled from "styled-components";

export const ContactText = styled.div`
    padding: 0 2rem 2rem 0;
    flex: 1;

    strong {
        text-decoration: underline;
    }

    p {
        font-style: italic;
        padding: 2rem 0;
    }

    a {
        font-size: 1.1rem;
        font-weight: 700;
        
        svg {
            margin-left: 0.5rem;
        }
    }

    a:hover {
        color: inherit;
        opacity: 0.7;
    }

    @media (max-width: 1050px) {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 500px) {
        padding: 0;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    
    width: 10rem;
    margin: 2rem 0;
`