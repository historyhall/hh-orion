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
	// eslint-disable-next-line no-unused-vars
	action: (userData: UserData, type: any) => Promise<any>;
	requiresAuthorization: boolean;
};

export type TokenConstructor = {
	id: string;
};

export type TokenPayload = {
	iat: number;
	exp: number;
} & TokenConstructor;
