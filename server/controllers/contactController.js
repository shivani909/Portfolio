/** @format */

import sendEmail from "../config/mailer.js";

const sendMail = async (req, res) => {
	try {
		const { firstName, email, subject, message } = req.body;

		await sendEmail(firstName, email, subject, message);

		res.status(200).json({
			success: true,
			message: "Email sent successfully",
		});
	} catch (err) {
		console.log(err);

		res.status(500).json({
			success: false,
			message: "Failed to send email",
		});
	}
};

export default sendMail;
