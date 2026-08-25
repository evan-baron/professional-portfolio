'use client';

import { useEffect, useState } from 'react';
import mathQuestions from '@/lib/data/mathQuestions';
import type { ContactFormData } from '@/lib/types/formTypes';
import styles from './contact.module.scss';

const initialState = (antibotIndex: number): ContactFormData => ({
	name: { value: '', touched: false },
	email: { value: '', touched: false },
	message: { value: '', touched: false },
	antibot: { value: '', touched: false },
	antibotIndex,
});

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
	const [questionIndex, setQuestionIndex] = useState<number | null>(null);
	const [formData, setFormData] = useState<ContactFormData | null>(null);
	const [status, setStatus] = useState<Status>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	// Client-only random pick: must run post-mount so server and client
	// don't disagree on the anti-bot question during hydration.
	useEffect(() => {
		const index = Math.floor(Math.random() * mathQuestions.length);
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setQuestionIndex(index);
		setFormData(initialState(index));
	}, []);

	if (!formData || questionIndex === null) {
		return <div className={styles.formLoading}>Loading form…</div>;
	}

	const question = mathQuestions[questionIndex];

	const isValid =
		formData.name.value.trim() !== '' &&
		formData.email.value.trim() !== '' &&
		formData.message.value.trim() !== '' &&
		formData.antibot.value.trim() === question.answer.toString();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormData((prev) =>
			prev
				? {
						...prev,
						name: { ...prev.name, touched: true },
						email: { ...prev.email, touched: true },
						message: { ...prev.message, touched: true },
						antibot: { ...prev.antibot, touched: true },
					}
				: prev
		);

		if (!isValid) return;

		setStatus('submitting');
		setErrorMessage('');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.name.value.trim(),
					email: formData.email.value.trim(),
					message: formData.message.value.trim(),
					antibot: formData.antibot.value.trim(),
					antibotIndex: questionIndex,
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({ message: 'Something went wrong' }));
				throw new Error(data.message ?? 'Something went wrong');
			}

			setStatus('success');
			const newIndex = Math.floor(Math.random() * mathQuestions.length);
			setQuestionIndex(newIndex);
			setFormData(initialState(newIndex));
		} catch (err) {
			setStatus('error');
			setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit} noValidate>
			<div className={styles.field}>
				<label htmlFor='name'>
					Name<span aria-hidden='true'>*</span>
				</label>
				<input
					id='name'
					name='name'
					type='text'
					autoComplete='name'
					required
					aria-required='true'
					value={formData.name.value}
					onChange={(e) =>
						setFormData((prev) => (prev ? { ...prev, name: { ...prev.name, value: e.target.value } } : prev))
					}
					onBlur={() =>
						setFormData((prev) => (prev ? { ...prev, name: { ...prev.name, touched: true } } : prev))
					}
					aria-invalid={formData.name.touched && formData.name.value.trim() === ''}
				/>
				{formData.name.touched && formData.name.value.trim() === '' && (
					<span className={styles.error} role='alert'>
						This field is required
					</span>
				)}
			</div>

			<div className={styles.field}>
				<label htmlFor='email'>
					Email<span aria-hidden='true'>*</span>
				</label>
				<input
					id='email'
					name='email'
					type='email'
					autoComplete='email'
					required
					aria-required='true'
					value={formData.email.value}
					onChange={(e) =>
						setFormData((prev) => (prev ? { ...prev, email: { ...prev.email, value: e.target.value } } : prev))
					}
					onBlur={() =>
						setFormData((prev) => (prev ? { ...prev, email: { ...prev.email, touched: true } } : prev))
					}
					aria-invalid={formData.email.touched && formData.email.value.trim() === ''}
				/>
				{formData.email.touched && formData.email.value.trim() === '' && (
					<span className={styles.error} role='alert'>
						This field is required
					</span>
				)}
			</div>

			<div className={styles.field}>
				<label htmlFor='message'>
					Message<span aria-hidden='true'>*</span>
				</label>
				<textarea
					id='message'
					name='message'
					rows={5}
					required
					aria-required='true'
					value={formData.message.value}
					onChange={(e) =>
						setFormData((prev) =>
							prev ? { ...prev, message: { ...prev.message, value: e.target.value } } : prev
						)
					}
					onBlur={() =>
						setFormData((prev) => (prev ? { ...prev, message: { ...prev.message, touched: true } } : prev))
					}
					aria-invalid={formData.message.touched && formData.message.value.trim() === ''}
				/>
				{formData.message.touched && formData.message.value.trim() === '' && (
					<span className={styles.error} role='alert'>
						This field is required
					</span>
				)}
			</div>

			<div className={styles.field}>
				<label htmlFor='antibot'>
					What is {question.a} {question.op} {question.b}?<span aria-hidden='true'>*</span>
				</label>
				<input
					id='antibot'
					name='antibot'
					type='text'
					inputMode='numeric'
					pattern='[0-9]*'
					maxLength={2}
					autoComplete='off'
					required
					aria-required='true'
					value={formData.antibot.value}
					onChange={(e) => {
						const value = e.target.value.replace(/[^0-9]/g, '');
						setFormData((prev) => (prev ? { ...prev, antibot: { ...prev.antibot, value } } : prev));
					}}
					onBlur={() =>
						setFormData((prev) => (prev ? { ...prev, antibot: { ...prev.antibot, touched: true } } : prev))
					}
					aria-invalid={
						formData.antibot.touched && formData.antibot.value.trim() !== question.answer.toString()
					}
				/>
				{formData.antibot.touched && formData.antibot.value.trim() === '' && (
					<span className={styles.error} role='alert'>
						This field is required
					</span>
				)}
			</div>

			<button type='submit' className={styles.submit} disabled={status === 'submitting'}>
				{status === 'submitting' ? 'Sending…' : 'Send message'}
			</button>

			<div aria-live='polite'>
				{status === 'success' && (
					<p className={styles.success}>Message sent. I&apos;ll get back to you soon.</p>
				)}
				{status === 'error' && <p className={styles.formError}>{errorMessage}</p>}
			</div>
		</form>
	);
};

export default ContactForm;
