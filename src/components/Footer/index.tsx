import { ArrowLineUp, Copyright } from "phosphor-react";
import { FooterContainer, FooterWrapper } from "./style";

export function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <div className="copyright">
                    <Copyright size={20} color="#fefbfb" weight="fill" />
                    <span>Tiago Cruz Pereira, 2023</span>
                </div>
                <div className="toTop">
                    <a href="#">
                        <ArrowLineUp size={30} color="#fefbfb" weight="fill" />
                    </a>
                </div>
                <div className="socialMediaIcons">
                    <a
                        href="https://www.linkedin.com/in/tiagocruzpereira/"
                        target="_blank"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            alt=""
                            width={40}
                        />
                    </a>

                    <a href="https://github.com/Sathosk" target="_blank">
                        <img
                            className="githubIcon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt=""
                            width={40}
                        />
                    </a>
                </div>
            </FooterWrapper>
        </FooterContainer>
    );
}
