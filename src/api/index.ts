/*
 * @Author: 1107965666@qq.com
 * @Date: 2023-11-15 11:43:11
 * @LastEditors: Jerry 1107965666@qq.com
 * @LastEditTime: 2023-11-15 11:50:16
 * @FilePath: \vue3-guahao\src\api\index.ts
 * @Description: 这里填写描述
 */
import request from '@/utils/request'
import type { hospitalResponseData, HospitalLevelAndRegionResponseData, HospitalInfo, HospitalDetail, DepartmentResponseData, LoginData, UserLoginResponseData, WXLoginResponseData } from './type'

enum API {
  //获取医院列表接口
  HOSPITAL_URL = '/hosp/hospital/',
  //获取医院等级与地区接口
  HOSPITAL_LEVEL_AND_REGION_URL = '/cmn/dict/findByDictCode/',
  //根据关键字医院名字获取数据
  HOSPITALINFO_URL = '/hosp/hospital/findByHosname/',
  //获取医院详情
  HOSPITALDETAIL_URL = '/hosp/hospital/',
  //获取医院的科室数据
  HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/',
  //获取验证码接口
  GET_VALIDATE_CODE_URL = '/sms/send/',
  //用户登录接口
  USER_LOGIN_URL = '/user/login',
  //获取微信扫码登录参数
  WXLOGIN_URL = '/user/weixin/getLoginParam/',
}
//获取医院数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<any, hospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院等级或地区数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITAL_LEVEL_AND_REGION_URL + `${dictCode}`)
//根据关键字医院名字获取数据
export const reqHospitalInfo = (hosname: string) => request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + `${hosname}`)
//获取医院详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + `${hoscode}`)
//获取医院的科室数据
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DepartmentResponseData>(API.HOSPITALDEPARTMENT_URL + `${hoscode}`)
//获取验证码接口
export const reqValidateCode = (phone: string) => request.get<any, any>(API.GET_VALIDATE_CODE_URL + `${phone}`)
//用户登录接口
export const reqUserLogin = (data: LoginData) => request.post<any, UserLoginResponseData>(API.USER_LOGIN_URL, data)
//获取微信扫码登录参数
export const reqWxLogin = (wxRedirectUrl:string) => request.get<any, WXLoginResponseData>(API.WXLOGIN_URL+`?wxRedirectUrl=${wxRedirectUrl}`)