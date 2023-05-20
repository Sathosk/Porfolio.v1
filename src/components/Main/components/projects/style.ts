import styled from "styled-components";
import resumeImage from "/../../../../assets/resumeSection.jpg";

export const ProjectsContainer = styled.section`
    position: relative;
    height: auto;
    background: linear-gradient(0deg, rgba(39,57,94,1) 30%, rgba(31,41,61,1) 70%, rgba(13,27,42,1) 100%);
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: column;
    height: auto;
    gap: 2rem;
`;

export const ResumeContainer = styled.section`
    position: relative;
    width: 100%;
    height: 20rem;

    background-size: cover;
    background-image: url(${resumeImage});
    background-attachment: fixed;
    background-position: center;
`;

export const ButtonComponent = styled.button`
    font-weight: 600;
    margin-top: 1.5rem;
    padding: 0.6rem 1.6rem;
    background: white;
    color: ${props => props.theme["--black"]};
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
    border: 2px solid black;
    border-radius: 8px;

    &:hover {
        opacity: 0.7;
    }

    a {
        all: unset;
    }
`