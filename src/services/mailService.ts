import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

type TemplateReplacements = Record<string, string>;

const getTemplate = (templateName: string, replacements: TemplateReplacements = {}): string => {
	const filePath = path.join(process.cwd(), 'src/services/emailTemplates', `${templateName}.html`);
	let template = fs.readFileSync(filePath, 'utf8');

	for (const key in replacements) {
		const regex = new RegExp(`{{${key}}}`, 'g');
		template = template.replace(regex, replacements[key]);
	}

	return template;
};

const escapeHtml = (value: string): string =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

export const sendContactForm = async (name: string, email: string, message: string): Promise<void> => {
	const htmlContent = getTemplate('contactForm', {
		name: escapeHtml(name),
		email: escapeHtml(email),
		message: escapeHtml(message),
	});

	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: process.env.PERSONAL_EMAIL,
		replyTo: email,
		subject: `Portfolio contact from ${name}`,
		html: htmlContent,
	});
};

const mailService = {
	sendContactForm,
};

export default mailService;
