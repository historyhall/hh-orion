type Migration = {
    id: string;
    name: string;
    date: Date;
    success: boolean;
}
export type response = Migration[];
export const route = 'migrations/get-all';