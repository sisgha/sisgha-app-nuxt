import { IConfigKeycloak } from "./IConfigKeycloack";
import { IConfigNuxtAuth } from "./IConfigNuxtAuth";
import { IConfigOpenIDClient } from "./IConfigOpenIDClient";
import { IConfigRuntime } from "./IConfigRuntime";

export interface IConfig extends IConfigRuntime, IConfigNuxtAuth, IConfigKeycloak, IConfigOpenIDClient {}
