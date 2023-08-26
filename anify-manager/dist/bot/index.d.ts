import { Client } from "discord.js";
export declare const masterKey: string;
export declare const api: string;
export declare const auth: string;
export declare const frontend: string;
export declare const client: Client<boolean>;
export declare function registerCommands(): Promise<void>;
export declare function loadCommands(): Promise<void>;
export declare function loadEvents(): Promise<void>;
export declare function login(): Promise<void>;