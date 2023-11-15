/*
 * @Author: 1107965666@qq.com
 * @Date: 2023-11-15 11:43:11
 * @LastEditors: Jerry 1107965666@qq.com
 * @LastEditTime: 2023-11-15 11:50:16
 * @FilePath: \vue3-guahao\src\api\index.ts
 * @Description: 这里填写描述
 */
import request from '@/utils/request'
import type { hospitalResponseData, HospitalLevelAndRegionResponseData } from './type'

enum API {
  //获取医院列表接口
  HOSPITAL_URL = '/hosp/hospital/',
  //获取医院等级与地区接口
  HOSPITAL_LEVEL_AND_REGION_URL = '/cmn/dict/findByDictCode/'
}
//获取医院数据
export const reqHospital = (page: number, limit: number) => request.get<any, hospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)
//获取医院等级或地区数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITAL_LEVEL_AND_REGION_URL + `${dictCode}`)
