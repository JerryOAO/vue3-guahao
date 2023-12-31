import request from "@/utils/request";
import type { SubmitOrder,OrderResponseData,QrcodeResponseData,PayStatusResponseData,MemberResponseData,CertificatesTypeResponseData,UserParams } from "./type";

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
  USERCERTATION_URL = '/user/auth/userAuah'
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