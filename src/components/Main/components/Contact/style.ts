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

    @media (max-width: 500px) {
        width: 95%;
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

    .relative {
        position: relative;
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

    input:focus, textarea:focus {
        outline: none;
    }

    input {
        border-bottom: 1px solid white;
    }

    .inputError, .textAreaError {
        border-bottom: 1px solid ${props => props.theme['--danger']};
        margin-bottom: 0.3rem;
        color: ${props => props.theme['--danger']};
    }

    .textAreaError {
        border: 1px solid ${props => props.theme['--danger']};
    }

    .errorTooltip {
        display: inline-block;
        color: ${props => props.theme['--danger']};
        margin-bottom: 1rem;
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

