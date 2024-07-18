export type UserData = {
	ipAddress: string;
};

export type Action = {
	route: string;
	// eslint-disable-next-line no-unused-vars
	action: (userData: UserData, type: any) => Promise<any>;
};
