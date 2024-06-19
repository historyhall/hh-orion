import {m20240619} from "./m20240619";

interface Migration {
    name: string;
    action: string[];
}

export const migrations: Migration[] = [m20240619];