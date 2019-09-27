

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




export interface IUserEntity {
    id: string
    name: string
    email: string
    permissions: PermissionKeys[] 
}