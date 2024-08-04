export type UserData = {
	agent: string;
	ipAddress: string;
	authenticatedUser?: {
		userId: string;
		token: string;
	};
};

export type Action = {
	route: string;

	action: (userData: UserData, type: any) => Promise<any>;
	requiresAuthorization: boolean;
};
