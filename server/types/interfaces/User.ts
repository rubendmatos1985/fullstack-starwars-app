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
    ApiKey = 'api_key'
}


export interface IUserEntity{
    id: string
    name: string
    email: string
    permissions?: PermissionKeys[],
    password: string,
    created: Date,
    updated: Date,
    last_conexion: Date,
    api_key?: string
}