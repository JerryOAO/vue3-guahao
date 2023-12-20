import { defineStore } from "pinia";
import { reqHospitalDepartment, reqHospitalDetail } from "@/api";
import type {HospitalDetail,DepartmentResponseData,DepartmentArr} from '@/api/type'
import type { DetailState } from "./interface";

const useDetailStore = defineStore('Detail',{
  state:():DetailState=>{
    return{
      hospitalInfo:({} as HospitalDetail),
      departmentArr:({} as DepartmentArr)
    }
  },
  actions:{
    //获取医院详情
    async getHospital(hoscode:string){
      let result:HospitalDetail  =  await reqHospitalDetail(hoscode)
      console.log('result666666666666',result)
      if(result.code === 200){
        this.hospitalInfo = result.data
      }
    },
    //获取医院科室数据
    async getDepartment(hoscode:string){
      let result:DepartmentResponseData = await reqHospitalDepartment(hoscode)
      console.log('result88888888888888',result)
      if(result.code === 200){
        this.departmentArr = result.data
      }
    }
  },
  getters:{}
})

export default useDetailStore