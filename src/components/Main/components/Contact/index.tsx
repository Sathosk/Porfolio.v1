import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { ContactContainer, ContactFormWrapper, ContactWrapper } from "./style";
import { ContactDescription } from "./components/ContactDescription";

// interface FormData {
//     name: string;
//     email: string;
//     message: string;
// }

const contactFormDataSchema = zod.object({
    name: zod.string().trim().nonempty("This field is required."),
    email: zod.string().email({ message: "Must be a valid email." }),
    message: zod.string().trim().nonempty("This is required"),
});

type FormData = zod.infer<typeof contactFormDataSchema>;

export function ContactSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contactFormDataSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const url = "https://contact-server-fqhx.vercel.app/contact/send";

        try {
            const response = await axios.post(url, data);

            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ContactContainer id="contact">
            <div className="container">
                <ContactWrapper>
                    <ContactDescription />
                    <ContactFormWrapper>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Form Heading */}
                            <div
                                data-aos="fade-right"
                                data-aos-delay={800}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <h4>Get in touch!</h4>
                            </div>
                            {/* Input name */}
                            <div
                                className="inputContainer relative"
                                data-aos="fade-right"
                                data-aos-delay={1000}
                                data-aos-duration="500"
                                data-aos-once="true"
                            >
                                <label htmlFor="name">
                                    What should I call you?
                                </label>
                                <input
                                    className={errors.name && "inputError"}
                                    required
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <span className="errorTooltip">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                            {/* Input email */}
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
                                    className={errors.email && "inputError"}
                                    required
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <span className="errorTooltip">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            {/* Textarea */}
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
                                    className={
                                        errors.message && "textAreaError"
                                    }
                                    required
                                    id="content"
                                    cols={30}
                                    rows={10}
                                    placeholder="In this space, your words have the power to inspire..."
                                    {...register("message")}
                                ></textarea>
                                {errors.message && (
                                    <span className="errorTooltip">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>
                            {/* Submit Button */}
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
