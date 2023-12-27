import request from "@/utils/request";
import type { SubmitOrder } from "./type";

enum API {
  SUBMIT_ORDER = '/order/orderInfo/auth/submitOrder/'
}

//提交订单
export const reqSubmitOrder = (hoscode: string,scheduleId:string,patientId:number) => request.post<any, SubmitOrder>(API.SUBMIT_ORDER + `${hoscode}/${scheduleId}/${patientId}`)