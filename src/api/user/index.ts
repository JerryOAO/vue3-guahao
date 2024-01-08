import request from "@/utils/request";
import type { UpdateUser,SubmitOrder,OrderResponseData,QrcodeResponseData,PayStatusResponseData,MemberResponseData,CertificatesTypeResponseData,UserParams,OrderInfoResponseData,UserResponseData,AllOrderStateResponseData } from "./type";

enum API {
  //提交订单 获取订单号接口
  SUBMIT_ORDER = '/order/orderInfo/auth/submitOrder/',
  //获取订单详情数据
  GET_ORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
  //取消订单接口
  CANCEL_ORDER = '/order/orderInfo/auth/cancelOrder/',
  //获取支付订单二维码接口
  QRCODE_URL = '/order/weixin/createNative/',
  //查询支付状态
  GET_PAY_STATUS = '/order/weixin/queryPayStatus/',
  //获取会员信息
  GET_MEMBER = "/user/auth/getUserInfo",
  //获取证件类型接口
  CERTIFICATES_TYPE = '/cmn/dict/findByDictCode/',
  //用户认证
  USERCERTATION_URL = '/user/auth/userAuah',
  //挂号订单接口
  ORDER_INFO = '/order/orderInfo/auth/',
  //获取就诊人接口
  PATIENT_LIST = '/user/patient/auth/findAll',
  //获取订单状态
  ORDER_STATUS = '/order/orderInfo/auth/getStatusList',
  //获取城市的数据 GET /api/cmn/dict/findByParentId/{parentId}
  CITY_URL = '/cmn/dict/findByParentId/',
  //更新就诊人
  UPDATE_USER = '/user/patient/auth/update',
  //新增就诊人
  ADD_USER = '/user/patient/auth/save'
}

//提交订单
export const reqSubmitOrder = (hoscode: string,scheduleId:string,patientId:number) => request.post<any, SubmitOrder>(API.SUBMIT_ORDER + `${hoscode}/${scheduleId}/${patientId}`)

//获取订单详情
export const reqGetOrderInfo = (id: string) => request.get<any,OrderResponseData>(API.GET_ORDERINFO_URL + `${id}`)

//取消订单
export const reqCancelOrder = (orderId: string) => request.get<any>(API.CANCEL_ORDER + `${orderId}`)

//获取支付订单二维码
export const reqQRCODE = (orderId: string) => request.get<any,QrcodeResponseData>(API.QRCODE_URL + `${orderId}`)

//查询支付状态
export const reqPayStatus = (orderId: string) => request.get<any,PayStatusResponseData>(API.GET_PAY_STATUS + `${orderId}`)

//获取会员信息
export const reqGetMember = () => request.get<any,MemberResponseData>(API.GET_MEMBER)

//获取证件类型
export const reqCertificatesType = (CertificatesType='CertificatesType') => request.get<any,CertificatesTypeResponseData>(API.CERTIFICATES_TYPE + `${CertificatesType}`)

//用户认证
export const reqUserCertation = (data: UserParams) => request.post<any>(API.USERCERTATION_URL,data)

//获取挂号订单
export const reqOrderInfo = (page: number,limit:number,patientId:string,orderStatus:string) => request.get<any,OrderInfoResponseData>(API.ORDER_INFO + `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`)

//获取就诊人
export const reqPatientList = () => request.get<any,UserResponseData>(API.PATIENT_LIST)
//获取订单状态
export const reqOrderStatus = () => request.get<any,AllOrderStateResponseData>(API.ORDER_STATUS)

//获取城市的数据
export const reqCity = (parentId: string) => request.get<any>(API.CITY_URL + `${parentId}`)
 
//更新就诊人
export const reqUpdateUser = (data: UpdateUser) => {
  if(data.id){
    return request.put<any,any>(API.UPDATE_USER,data)
  }else{
    return request.post<any,any>(API.ADD_USER,data)
  }
}