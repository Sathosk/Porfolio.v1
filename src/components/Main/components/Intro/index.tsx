import { useEffect } from "react";
import { CaretDown } from "phosphor-react";

import { Intro, IntroContainer, NextSection } from "./styles";

import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

export function IntroSection() {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <Intro id="intro" className="fixedBackground">
            <div className="overlay">
                <IntroContainer>
                    <h1 data-aos="fade-down" data-aos-duration="1000">
                        Hi, I'm Tiago
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "Your next Full Stack Software Engineer",
                            1000,
                            "Your next Front-End Software Engineer",
                            1000,
                            "Your next Back-End Software Engineer",
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        speed={50}
                        repeat={Infinity}
                    />
                    <NextSection
                        href="#about"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <CaretDown size={50} />
                    </NextSection>
                </IntroContainer>
            </div>
        </Intro>
    );
}
