import { EntityTable } from "../types/Tables";
declare type GetByIdHandler = (a: any) => () => Promise<any>;
export declare const getAll: (table: EntityTable, configuredGetByIdHandler: GetByIdHandler) => () => Promise<any>;
export {};
