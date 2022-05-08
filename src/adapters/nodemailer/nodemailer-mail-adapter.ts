import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "38c67c779b78af",
		pass: "737b8ebba6d12c",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({subject, body}: SendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedget.com>",
			to: "Victor Fernando <victorgbpk@gmail.com>",
			subject: subject,
			html: body,
		});
	}
}
