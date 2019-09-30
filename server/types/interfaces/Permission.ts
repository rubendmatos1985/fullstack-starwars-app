export enum PermissionType{
   Delete = 'delete',
   Create = 'create',
   Edit = 'edit',
   CreateUser = 'createUser',
   DeleteUser = 'deleteUser',
   All = 'all',
   GivePermission = 'givePermission' 
}

export interface Permission{
    id: string,
    permission: PermissionType
}

export enum PermissionFields{
    Id = 'id',
    Permission = 'permission'
}

