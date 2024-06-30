import {Migration} from "../types";
import {m20240619} from "./m20240619";
import {m20240627} from "./m20240627";
import {m20240628} from "./m20240628";
import {m20240629} from "./m20240629";
import {m20240629b} from "./m20240629b";

export const migrations: Migration[] = [m20240619, m20240627, m20240628, m20240629, m20240629b];