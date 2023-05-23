import styled from 'styled-components';

export const ModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`

export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem;

    color: white;
    border-radius: 16px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    background: linear-gradient(
        0deg,
        rgba(13, 27, 42, 1) 0%,
        rgba(31, 41, 61, 1) 45%,
        rgba(39, 57, 94, 1) 100%
    );


    width: 20rem;

    button {
        position: absolute;
        top: 7px;
        right: 7px;
    }

    p {
        text-align: center;
        margin: 0;
    }
`;