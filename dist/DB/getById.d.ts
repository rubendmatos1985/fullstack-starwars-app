import { ManyToManyTable, EntityTable, OneToManyTable } from '../types/Tables';
export interface IMMFieldsData extends IFieldsData, IShowFields {
}
export interface IMMFieldsDataWithFieldsTransformed extends IFieldsData, IShowFieldsTransformed {
}
export interface IShowFields {
    showFields: string[];
}
export interface IShowFieldsTransformed {
    showFields: string;
}
export interface IFieldsData {
    tableName: EntityTable;
    fieldNameInResponse: string;
    manyToManyTableName: ManyToManyTable | OneToManyTable;
    intersectEntityOn: string;
    where: string;
}
export interface IFieldWithQuery {
    fieldName: string;
    query: string;
}
export declare function getByIdQuery<T, B>(tableName: T, foreignFields?: IMMFieldsData[] | undefined): (id: string) => Promise<any>;
export declare const buildMMFQuery: ((f: IMMFieldsData) => (w: string) => IFieldWithQuery);
