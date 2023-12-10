import { defineStore } from "pinia";
import { reqHospitalDetail } from "@/api";
import type {HospitalDetail} from '@/api/type'
import type { DetailState } from "./interface";

const useDetailStore = defineStore('Detail',{
  state:():DetailState=>{
    return{
      hospitalInfo:({} as HospitalDetail)
    }
  },
  actions:{
    //获取医院详情
    async getHospital(hoscode:string){
      let result:HospitalDetail  =  await reqHospitalDetail(hoscode)
      // console.log('result',result)
      if(result.code === 200){
        this.hospitalInfo = result.data
      }
    }
  },
  getters:{}
})

export default useDetailStore