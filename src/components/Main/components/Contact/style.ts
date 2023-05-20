import styled from 'styled-components';

export const ContactContainer = styled.section`
    background: linear-gradient(0deg, rgba(27,38,59,1) 50%, rgba(13,27,42,1) 100%);
`;

export const ContactWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
    }
`;

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
`;

export const ContactFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;

    h4 {
        margin-bottom: 2rem;
    }

    form {
        width: 80%;
    }
    
    input, textarea {
        border: none;
        color: white;
        width: 100%;
        padding: 0.5rem;
        background-color: transparent;
    }

    input {
        border-bottom: 1px solid white;
    }

    textarea {
        border: 1px solid white;
        border-radius: 8px;
    }

    input::placeholder, textarea::placeholder {
        
    }

    div > *{
        display: block;
    }

    div > input {
        margin-bottom: 1rem;
    }

    div > label {
        margin-bottom: 0.4rem;
    }

    div > button {
        border: 1px solid white;
        border-radius: 8px;
        padding: 0.7rem 1.5rem;
        margin-top: 1.5rem;

        transition: background 0.4s ease
    }

    div > button:hover {
        color: ${props => props.theme['--blue-500']};
        background: ${props => props.theme['--white']};
    }

    @media (max-width: 1050px) {
        width: 100%;
        padding-top: 2rem;
       
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.4);
        }

        form {
            width: 100%;
        }
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    
    width: 10rem;
    margin-top: 2rem;
`