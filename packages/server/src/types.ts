export type Action = {
	path: string;
	// eslint-disable-next-line no-unused-vars
	action: (data: any) => Promise<any>;
};
