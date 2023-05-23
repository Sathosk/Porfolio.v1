import styled from 'styled-components';

export const ButtonSubmit = styled.button`
    border: 1px solid white;
    border-radius: 8px;
    padding: 0.7rem 1.5rem;
    margin-top: 1.5rem;

    transition: background 0.4s ease;

    &:hover {
        color: ${props => props.theme['--blue-500']};
        background: ${props => props.theme['--white']};
    }
`;