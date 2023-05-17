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
                    <div>
                        <TypeAnimation
                            sequence={["Your next"]}
                            wrapper="span"
                            className="text-1"
                            cursor={false}
                        ></TypeAnimation>
                        <TypeAnimation
                            sequence={[
                                600,
                                "Full Stack Software Engineer",
                                1000,
                                "Front-End Software Engineer",
                                1000,
                                "Back-End Software Engineer",
                                1000,
                            ]}
                            wrapper="span"
                            className="text-2"
                            cursor={true}
                            speed={50}
                            deletionSpeed={60}
                            repeat={Infinity}
                        />
                    </div>

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
