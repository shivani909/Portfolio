/** @format */

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

const sendEmail = async (firstName, email, subject, message) => {
	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: `Portfolio Contact: ${subject}`,
		html: `
            <h2>New Message From Portfolio</h2>

            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
    `,
	});
};

export default sendEmail;
