export interface ResponseData{
  code:number,
  message:string,
  ok:boolean
}
//提交订单接口
export interface SubmitOrder extends ResponseData{
  data:number
}