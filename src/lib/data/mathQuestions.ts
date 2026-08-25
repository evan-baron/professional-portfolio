export type MathQuestion = {
	a: number;
	b: number;
	op: '+' | '−';
	answer: number;
};

const mathQuestions: MathQuestion[] = [
	{ a: 2, b: 3, op: '+', answer: 5 },
	{ a: 4, b: 1, op: '+', answer: 5 },
	{ a: 6, b: 2, op: '−', answer: 4 },
	{ a: 3, b: 3, op: '+', answer: 6 },
	{ a: 9, b: 4, op: '−', answer: 5 },
	{ a: 5, b: 5, op: '+', answer: 10 },
	{ a: 8, b: 3, op: '−', answer: 5 },
	{ a: 1, b: 6, op: '+', answer: 7 },
];

export default mathQuestions;
