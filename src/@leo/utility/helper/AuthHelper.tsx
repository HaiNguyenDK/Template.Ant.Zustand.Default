import { authRole } from "../../../shared/constants/AppConst";

export const getUserFromJwtAuth = (user: any) => {
  if (user)
    return {
      id: 1,
      uid: 1,
      displayName: user?.name ? user.name : "Admin",
      email: user?.email ? user.emai : 'admin@gmail.com',
      photoURL: user?.photoURL ? user.photoURL : "/assets/images/avatar/A11.jpg",
      role: authRole.user,
      accountId: user?.accountId || 0,
      companyId: user?.companyId || 0,
      companyName: user?.companyName || "",
      fullName: user?.fullName || "",
      userName: user?.userName || "",
      roleId: user?.roleId || 0,
      userCode: user?.userCode || ""
    };
  return user;
};