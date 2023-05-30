import sgMail from "@sendgrid/mail";
/* eslint-disable */

exports.handler = async (event, context, callback) => {
    try {
        console.log(event.body);
        const { name, email, message } = JSON.parse(event.body);
        sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

        const mailOptions = {
            to: process.env.VITE_MAIL_RECIPIENT,
            from: process.env.VITE_MAIL_RECIPIENT,
            subject: "Portfolio Contact Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await sgMail.send(mailOptions);

        console.log("Email sent successfully");
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
        });
    } catch (err) {
        console.error("Error sending email:", err);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email" }),
        });
    }
};
