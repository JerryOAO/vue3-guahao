import request from '@/utils/request'
import type { hospitalResponseData } from './type'

enum API {
  //获取医院列表接口
  HOSPITAL_URL = '/hosp/hospital/',
  //获取医院等级与地区接口
  HOSPITAL_LEVEL_AND_REGION_URL = '/cmn/dict/findByDictCode/'
}
//获取医院数据
export const reqHospital = (page: number, limit: number) => request.get<any, hospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)
//获取医院等级或地区数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<API, hospitalResponseData>(API.HOSPITAL_LEVEL_AND_REGION_URL + `${dictCode}`)
