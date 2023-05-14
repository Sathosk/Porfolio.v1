import { GameController, Keyboard, Planet } from "phosphor-react";

import Tilt from "react-parallax-tilt";
import {
    AboutContainer,
    AboutWrapper,
    Tldr,
    TldrContent,
    TldrContentWrapper,
} from "./styles";

export function AboutSection() {
    return (
        <AboutContainer id="about">
            <div>
                <AboutWrapper className="container">
                    <h2
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        THE PERSON BEHIND THE PIXELS
                    </h2>
                    <img
                        src=""
                        alt=""
                        data-aos="fade-in"
                        data-aos-duration="1700"
                        data-aos-once="true"
                    />
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        Hi, I'm Tiago, a Full Stack Software Engineer with a
                        passion for all things tech. As a graduate of University
                        Nove de Julho (UNINOVE) with an Associate Degree in
                        Information Technology, I'm constantly seeking out the
                        latest trends and exploring new ideas.<br></br>
                        <br></br>
                        But life isn't all work - I also love to travel, read
                        about science and space, and challenge myself with a
                        good game. I believe in balancing hard work with
                        enjoyment, and I'm always up for a challenge that pushes
                        me to think outside the box.<br></br>
                        <br></br>
                        If you're looking for a software engineer who's
                        passionate, driven, and knows how to have a good time,
                        then let's collaborate and create something amazing
                        together.
                    </p>
                    <Tilt tiltReverse={true} perspective={500}>
                        <Tldr
                            data-aos="flip-up"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-easing="ease-in-out"
                        >
                            <h4>TL;DR</h4>
                            <TldrContentWrapper>
                                <TldrContent>
                                    <Keyboard size={50} />
                                    <span>Full Stack Development</span>
                                </TldrContent>

                                <TldrContent>
                                    <Planet size={50} />
                                    <span>Physics Enthusiast</span>
                                </TldrContent>

                                <TldrContent>
                                    <GameController size={50} />
                                    <span>Gamer</span>
                                </TldrContent>
                            </TldrContentWrapper>
                        </Tldr>
                    </Tilt>
                </AboutWrapper>
            </div>
        </AboutContainer>
    );
}
