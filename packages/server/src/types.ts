export type UserData = {
	ipAddress: string;
	userId?: string;
};

export type Action = {
	route: string;
	// eslint-disable-next-line no-unused-vars
	action: (userData: UserData, type: any) => Promise<any>;
};

export type TokenConstructor = {
	id: string;
	email: string;
};

export type TokenPayload = {
	iat: number;
	exp: number;
} & TokenConstructor;
