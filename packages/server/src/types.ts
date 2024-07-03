export type Action = {
	path: string;
	action: (type: any) => Promise<any>;
};
