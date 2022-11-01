export interface AuthUser {
  id?: number;
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  token?: string;
  role?: string[] | string;
  accountId?: number;
  fullName?: string;
  userName?: string;
  companyId?: number;
  companyName?: string;
  roleId?: number
}
