export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}


//医院数据类型
export interface hospital {
  id: string;
  createTime: Date;
  updateTime: Date;
  isDeleted: number;
  param: {
    hostypeString: string;
    fullAddress: string;
  }
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  status: number;
  "bookingRule": {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    "rule": string[];
  }
}

//医院全部数组类型
export type Content = hospital[]

//已有医院接口返回的数据类型
export interface hospitalResponseData extends ResponseData {
  data: {
    content: Content;
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      }
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  }
}

export interface HospitalLevelAndRegion{
  id:number;
  createTime:string;
  updateTime:string;
  isDeleted:number;
  param:{};
  parentId:number;
  name:string;
  value:string;
  dictCode:string;
  hasChildren:boolean;
}

export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
//获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData{
  data:HospitalLevelAndRegionArr;
}

export interface HospitalInfo extends ResponseData{
  data:Content;
}

//获取医院详情接口返回数据类型
export interface HospitalDetail{
    bookingRule:{
      cycle: number;
      releaseTime: string;
      stopTime: string;
      quitDay: number;
      quitTime: string;
      rule: string[];
    },
    hospital:{
      id: string;
      createTime: string;
      updateTime: string;
      isDeleted: number;
      param: {
        hostypeString: string;
        fullAddress: string;
      };
      hoscode: string;
      hosname: string;
      hostype: string;
      provinceCode: string;
      cityCode: string;
      districtCode: string;
      address: string;
      logoData: string;
      intro: string;
      route: string;
      status: number;
      bookingRule?: any;
    }
}
export interface HospitalDetail extends ResponseData{
  data:HospitalDetail;
}

//医院科室类型
export interface Department{
  depcode: string,
  depname: string,
  children?:Department[];
}
//医院科室数组类型
export type DepartmentArr = Department[];
//获取医院科室接口返回数据类型
export interface DepartmentResponseData extends ResponseData{
  data:DepartmentArr;
}
//用户登录接口需要携带参数类型
export interface LoginData{
  phone:string;
  code:string;
}
//用户登录接口返回用户信息数据类型
export interface UserInfo{
  name:string;
  token:string;
}
//登录接口返回的数据的ts类型  
export interface UserLoginResponseData extends ResponseData{
  data:UserInfo;
}