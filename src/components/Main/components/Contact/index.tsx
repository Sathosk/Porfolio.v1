import {
    ContactContainer,
    ContactFormWrapper,
    ContactText,
    ContactWrapper,
    SocialMedia,
} from "./style";
import { EnvelopeSimple } from "phosphor-react";

export function ContactSection() {
    return (
        <ContactContainer id="contact">
            <div className="container">
                <ContactWrapper>
                    <ContactText>
                        {/* Heading */}
                        <div
                            data-aos="fade-right"
                            data-aos-easing="ease-in"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <h4>
                                Need a new <strong>Developer</strong>, or have a{" "}
                                <strong>Project</strong> in mind?
                            </h4>
                        </div>
                        {/* CTA */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay={200}
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <span>Let's get in touch!</span>
                        </div>
                        {/* Paragraph */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay={400}
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <p>
                                If you have any questions, feedback, or would
                                like to discuss potential job opportunities or
                                collaborations, feel free to get in touch. I'm
                                actively seeking new employment opportunities
                                and am excited to explore how my skills can
                                contribute to your organization. Your inquiries
                                are highly appreciated, and I look forward to
                                connecting with you to discuss how we can work
                                together to achieve mutual success!
                            </p>
                        </div>
                        {/* Open Mail */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay={600}
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <a href="mailto:tiagopereira31415@gmail.com">
                                tiagopereira31415@gmail.com
                                <EnvelopeSimple size={24} weight="bold" />
                            </a>
                        </div>

                        <SocialMedia
                            data-aos="fade-right"
                            data-aos-delay={1200}
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <a
                                href="https://www.linkedin.com/in/tiagocruzpereira/"
                                target="_blank"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                    alt=""
                                    width={60}
                                />
                            </a>
                            <a
                                href="https://github.com/Sathosk"
                                target="_blank"
                            >
                                <img
                                    className="githubIcon"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt=""
                                    width={60}
                                />
                            </a>
                        </SocialMedia>
                    </ContactText>
                    <ContactFormWrapper>
                        <form action="">
                            <div
                                data-aos="fade-right"
                                data-aos-delay={800}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <h4>Get in touch!</h4>
                            </div>

                            <div
                                className="inputContainer"
                                data-aos="fade-right"
                                data-aos-delay={1000}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <label htmlFor="name">
                                    What should I call you?
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                />
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay={1200}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <label htmlFor="email">
                                    Where do I reply you?
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay={1400}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <label htmlFor="content">
                                    Pen Your Thoughts
                                </label>
                                <textarea
                                    required
                                    name=""
                                    id="content"
                                    cols={30}
                                    rows={10}
                                    placeholder="In this space, your words have the power to inspire..."
                                ></textarea>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay={1300}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <button type="submit">Send away</button>
                            </div>
                        </form>
                    </ContactFormWrapper>
                </ContactWrapper>
            </div>
        </ContactContainer>
    );
}
