import { OrderInfo } from './type';
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}
//提交订单接口
export interface SubmitOrder extends ResponseData {
  data: number;
}

export interface OrderInfo {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    orderStatusString: string;
  };
  userId: number;
  outTradeNo: string;
  hoscode: string;
  hosname: string;
  depcode: string;
  depname: string;
  scheduleId: string;
  title: string;
  reserveDate: string;
  reserveTime: number;
  patientId: number;
  patientName: string;
  patientPhone: string;
  hosRecordId: string;
  number: number;
  fetchTime: string;
  fetchAddress: string;
  amount: number;
  quitTime: string;
  orderStatus: number;
}
//获取订单详情接口
export interface OrderResponseData extends ResponseData {
  data: OrderInfo;
}

//支付二维码返回接口
export interface Qrcode {
  codeUrl: string;
  orderId: number;
  totalFee: number;
  resultCode: string;
}
export interface QrcodeResponseData extends ResponseData {
  data: Qrcode;
}

//查询支付状态
export interface PayStatusResponseData extends ResponseData {
  data: boolean;
}

//会员信息数据类型
export interface Member {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  openid: string;
  nickname: string;
  phone: string;
  name: string;
  certificatesType: string;
  certificatesNo: string;
  certificatesUrl: string;
  authStatus: number;
  status: number;
}
//接口返回的会员信息数据类型
export interface MemberResponseData extends ResponseData {
  data: Member;
}

//证件类型数据类型
export interface CertificatesType {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}
export type CertationArr = CertificatesType[];
export interface CertificatesTypeResponseData extends ResponseData {
  data: CertationArr;
}
//用户认证的ts类型
export interface UserParams {
  certificatesNo: string;
  certificatesType: string;
  certificatesUrl: string;
  name: string;
}

export type Records = OrderInfo[];
export interface OrderInfoResponseData extends ResponseData {
  data:{
    records: Records;
    total: number;
    size: number;
    current: number;
    orders: any[];
    hitCount: boolean;
    searchCount: boolean;
    pages: number;
  }
}

//获取全部就诊人的ts类型
export interface User {
  id: number,
  createTime: string,
  updateTime: string,
  isDeleted: number,
  param: {
    certificatesTypeString: string,
    contactsCertificatesTypeString: string,
    cityString: string,
    fullAddress: string,
    districtString: string,
    provinceString: string,
  },
  userId: number,
  name: string,
  certificatesType: string,
  certficatesNo: string,
  sex: number,
  birthdate: string,
  phone: string,
  isMarry: number,
  provinceCode: string,
  cityCode: string,
  districtCode: string,
  address: string,
  contactsName: string,
  contactsCertificatesType: string,
  contactsCertificatesNo: string,
  contactsPhone: string,
  isInsure: number,
  cardNo: string,
  status: string
}

export type UserArr = User[];

export interface UserResponseData extends ResponseData {
  data: UserArr;
}

export interface OrderState{
  comment:string;
  status:number;
}
export type AllOrderState = OrderState[]
export interface AllOrderStateResponseData extends ResponseData {
  data: AllOrderState;
}

export interface UpdateUser{
  id?:string,
  name: string,
  certificatesType: string,
  certficatesNo: string,
  sex: number,
  birthdate: string,
  phone: string,
  isMarry: number,
  address: string,
  contactsName: string,
  contactsCertificatesType: string,
  contactsCertificatesNo: string,
  contactsPhone: string,
  isInsure: number,
  addressSelected:[]
}