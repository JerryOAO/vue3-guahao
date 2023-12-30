import request from "@/utils/request";
import type { SubmitOrder,OrderResponseData } from "./type";

enum API {
  //提交订单 获取订单号接口
  SUBMIT_ORDER = '/order/orderInfo/auth/submitOrder/',
  //获取订单详情数据
  GET_ORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/'
}

//提交订单
export const reqSubmitOrder = (hoscode: string,scheduleId:string,patientId:number) => request.post<any, SubmitOrder>(API.SUBMIT_ORDER + `${hoscode}/${scheduleId}/${patientId}`)

//获取订单详情
export const reqGetOrderInfo = (id: string) => request.get<any,OrderResponseData>(API.GET_ORDERINFO_URL + `${id}`)

