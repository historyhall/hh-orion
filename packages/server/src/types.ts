export type UserData = {
	ipAddress: string;
	userId?: string;
};

export type Action = {
	route: string;
	// eslint-disable-next-line no-unused-vars
	action: (userData: UserData, type: any) => Promise<any>;
};
