import { motion } from "framer-motion";
import {
    ContactContainer,
    ContactFormWrapper,
    ContactText,
    ContactWrapper,
} from "./style";
import { EnvelopeSimple } from "phosphor-react";

export function ContactSection() {
    return (
        <ContactContainer>
            <div className="container">
                <ContactWrapper>
                    <ContactText>
                        {/* Heading */}
                        <motion.div
                            initial={{ x: -70, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.6,
                                },
                            }}
                        >
                            <h4>
                                Need a new <strong>Developer</strong>, or have a{" "}
                                <strong>Project</strong> in mind?
                            </h4>
                        </motion.div>
                        {/* CTA */}
                        <motion.div
                            initial={{ x: -70, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.7,
                                    duration: 0.6,
                                },
                            }}
                        >
                            <span>Let's get in touch!</span>
                        </motion.div>
                        {/* Paragraph */}
                        <motion.div
                            initial={{ x: -70, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 1,
                                    duration: 0.6,
                                },
                            }}
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
                        </motion.div>
                        {/* Open Mail */}
                        <motion.div
                            initial={{ x: -70, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 1.3,
                                    duration: 0.6,
                                },
                            }}
                        >
                            <a href="mailto:tiagopereira31415@gmail.com">
                                tiagopereira31415@gmail.com
                                <EnvelopeSimple size={24} weight="bold" />
                            </a>
                        </motion.div>
                    </ContactText>
                    <ContactFormWrapper>
                        <form action="">
                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.7,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <h4>Get in touch!</h4>
                            </motion.div>

                            <motion.div
                                className="inputContainer"
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <label htmlFor="name">
                                    What should I call you?
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2.3,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <label htmlFor="email">
                                    Where do I reply you?
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2.6,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <label htmlFor="content">
                                    Pen Your Thoughts
                                </label>
                                <textarea
                                    name=""
                                    id="content"
                                    cols={30}
                                    rows={10}
                                    placeholder="In this space, your words have the power to inspire..."
                                ></textarea>
                            </motion.div>

                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 2.9,
                                        duration: 0.6,
                                    },
                                }}
                            >
                                <button type="submit">Send away</button>
                            </motion.div>
                        </form>
                    </ContactFormWrapper>
                </ContactWrapper>
            </div>
        </ContactContainer>
    );
}
