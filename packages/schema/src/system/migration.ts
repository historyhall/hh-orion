export namespace Migration {
    type Migration = {
        id: string;
        name: string;
        date: Date;
        success: boolean;
    }

    export namespace GetAll {
        export type Response = Migration[];
        export const route = 'migrations/get-all';
    }
}