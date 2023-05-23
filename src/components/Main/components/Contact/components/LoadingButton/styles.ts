import styled from 'styled-components';

export const ButtonLoading = styled.button`
    border: 1px solid white;
    border-radius: 8px;
    width: 80px;
    height: 24px;
    padding: 0.7rem 1.5rem;
    margin-top: 1.5rem;
    
    transition: background 0.4s ease;

    &:hover {
        background: ${props => props.theme['--white']};

        .lds-ring div {
            border-color: ${props => props.theme['--blue-500']} transparent transparent transparent;
        }
    }

    .lds-ring {
        display: inline-block;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .lds-ring div {
        display: block;
        position: absolute;
        left: 35%;
        top: 10%;
        width: 20px;
        height: 20px;
        border: 1px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
}
`