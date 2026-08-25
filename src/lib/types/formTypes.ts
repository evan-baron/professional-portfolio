export type FormField = {
	value: string;
	touched: boolean;
};

export type ContactFormData = {
	name: FormField;
	email: FormField;
	message: FormField;
	antibot: FormField;
	antibotIndex: number;
};

export type ContactPayload = {
	name: string;
	email: string;
	message: string;
	antibot: string;
	antibotIndex: number;
};
