import styled from "styled-components";
// import skillImage from "/../../../../assets/skill.jpg";

export const SkillsContainer = styled.section`
    /* background-color: ${props => props.theme["--blue-300"]}; */
    background-image: url("/src/assets/skill.jpg");
`;

export const SkillsOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.73) 17%, rgba(0, 0, 0, 0.66) 35%, rgba(0, 0, 0, 0.55) 62%, rgba(0, 0, 0, 0.4) 100%);
    background-attachment: fixed;
`;

export const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    opacity: 0.7;
    padding: 0.5rem;
    

    max-width: 45rem;

    @media screen and (max-width: 1120px) {
        
    }
`;

export const ToolBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    background-color: ${props => props.theme["--black"]};

    font-weight: 700;

    min-width: 8.2rem;
    border-radius: 8px;

    height: 3.75rem;

    img {
        filter: grayscale(1);
        transition: filter 0.7s ease;
    }

    &:hover {
        img {
            filter: none; 
        }
        
        span {
            cursor: default;
        }
    }
`;