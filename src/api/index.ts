import request from '@/utils/request'
import type { hospitalResponseData } from './type'

enum API {
  HOSPITAL_URL = '/hosp/hospital/'
}

export const reqHospital = (page: number, limit: number) => request.get<hospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)

