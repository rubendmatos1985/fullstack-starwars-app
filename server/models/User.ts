import { IEntity } from "../types/interfaces/Entity";

export enum PermissionKeys{
    Write='write',
    Read='read',
    Delete='delete',
    AddEditor='addEditor',
    DeleteEditor='deleteEditor',
    AddAdmin='addAdmin',
    DeleteAdmin='deleteAdmin',
    All = 'all'
}

export enum UserFields{
    Id = 'id',
    Name = 'name',
    Email = 'email',
    Permissions = 'permissions',
    Password = 'password',
    Created = 'created',
    Updated = 'updated',
    LastConexion = 'last_conexion',
    ApiKey = 'api_key',
    
}


export interface IUserEntity extends IEntity{
    name: string
    email: string
    password: string,
    created: Date,
    updated: Date,
    last_conexion: Date,
    api_key?: string
}