import type { HospitalDetail,DepartmentArr,UserInfo } from '@/api/type'

//定义仓库内部存储数据state的ts类型
export interface DetailState {
  hospitalInfo: HospitalDetail;
  departmentArr:DepartmentArr;
}

//用户仓库相关state数据的ts类型
export interface UserState {
  visiable: boolean;
  captcha: string;
  userInfo: UserInfo;
}