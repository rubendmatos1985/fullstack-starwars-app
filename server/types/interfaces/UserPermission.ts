export interface UserPermission{
    id: string
    user_id: string
    permission_id: string
}

export enum UserPermissionFields{
   Id = 'id',
   UserId = 'user_id',
   PermissionId = 'permission_id' 
}