import {
    SkillsContainer,
    SkillsOverlay,
    SkillsWrapper,
    ToolBox,
    Tools,
} from "./styles";
import { tools } from "../../../../data/skills.js";

export function SkillsSection() {
    return (
        <SkillsContainer id="skills" className="fixedBackground">
            <SkillsOverlay>
                <SkillsWrapper className="container">
                    <h2
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        TOOLING
                    </h2>
                    <Tools>
                        {tools.map((tool, index) => {
                            console.log(tool.name);
                            return (
                                <ToolBox
                                    data-aos="fade-right"
                                    data-aos-delay={`${(index + 1) * 300}`}
                                    data-aos-easing="ease-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                >
                                    <img
                                        src={tool.src}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <span>{tool.name}</span>
                                </ToolBox>
                            );
                        })}
                    </Tools>
                </SkillsWrapper>
            </SkillsOverlay>
        </SkillsContainer>
    );
}
