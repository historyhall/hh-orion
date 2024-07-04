export type Action = {
	route: string;
	action: (type: any) => Promise<any>;
};
