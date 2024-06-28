import {m20240619} from "./m20240619";
import {m20240627} from "./m20240627";
import {m20240628} from "./m20240628";

type Migration = {
    name: string;
    action: string[];
}

export const migrations: Migration[] = [m20240619, m20240627, m20240628];