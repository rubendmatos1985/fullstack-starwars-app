

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

export class Permisions {
    public static readonly Editor:PermissionKeys[] = [PermissionKeys.Read, PermissionKeys.Write, PermissionKeys.Delete];
    public static readonly Administrator:PermissionKeys[] = [PermissionKeys.All]
    public static readonly Normal:PermissionKeys[] = [PermissionKeys.Read]
}


export interface IUserEntity {
    id: string
    name: string
    email: string
    permissions: Permissions[]
}