import { NextResponse } from 'next/server';
import mailService from '@/services/mailService';
import mathQuestions from '@/lib/data/mathQuestions';
import type { ContactPayload } from '@/lib/types/formTypes';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
	try {
		const body = (await req.json()) as Partial<ContactPayload>;
		const { name, email, message, antibot, antibotIndex } = body;

		if (!name?.trim() || !email?.trim() || !message?.trim()) {
			return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
		}

		if (!EMAIL_RE.test(email)) {
			return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
		}

		const question = typeof antibotIndex === 'number' ? mathQuestions[antibotIndex] : undefined;
		if (!question || antibot !== question.answer.toString()) {
			return NextResponse.json({ message: 'Failed anti-bot check' }, { status: 400 });
		}

		await mailService.sendContactForm(name.trim(), email.trim(), message.trim());

		return NextResponse.json({ message: 'Message sent' }, { status: 201 });
	} catch (err: unknown) {
		console.error('Error sending contact form at /api/contact:', err);
		const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
		return NextResponse.json({ message: errorMessage }, { status: 500 });
	}
}
