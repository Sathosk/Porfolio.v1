import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: black;
    padding: 2rem;
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
        svg {
            margin-right: 0.4rem;
        }
    }

    .socialMediaIcons {
        a:first-child {
            padding-right: 1rem;
        }
    }

    @media (max-width: 400px) {
        .toTop {
            display: none;
        }
    }
`;