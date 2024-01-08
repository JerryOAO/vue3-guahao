<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>就诊人管理</span>
        <el-button type="success" :icon="User" @click="addUser">添加就诊人</el-button>
      </div>
    </template>
    <div class="visitor" v-if="tag == 0">
      <Visitor class="item" @changeTag="changeTag" v-for="(user, index) in userArr" :key="user.id" :user="user"
        :index="index"></Visitor>
    </div>
    <div class="form" v-if="tag == 1">
      <el-divider content-position="left">就诊人信息</el-divider>
      <el-form style="width:60%;margin:0 auto" label-width="80">
        <el-form-item label="用户姓名">
          <el-input v-model="userParams.name"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型" style="width:100%" v-model="userParams.certificatesType">
            <el-option v-for="item in certationArr" :key="item.id" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="userParams.certficatesNo"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="userParams.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="userParams.birthdate" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userParams.phone"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">建档信息（完善后部分医院首次就诊不排队建档）</el-divider>
      <el-form style="width:60%;margin:0 auto" label-width="80">
        <el-form-item label="婚姻状况">
          <el-radio-group v-model="userParams.isMarry">
            <el-radio label="未婚">未婚</el-radio>
            <el-radio label="已婚">已婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自费/医保">
          <el-radio-group v-model="userParams.isInsure">
            <el-radio label="自费">自费</el-radio>
            <el-radio label="医保">医保</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前住址">
          <el-cascader placeholder="请选择省市区" :props="props" v-model="userParams.addressSelected"></el-cascader>
        </el-form-item>
        <el-form-item label="详细住址">
          <el-input v-model="userParams.address"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">联系人信息（选填）</el-divider>
      <el-form style="width:60%;margin:0 auto" label-width="80">
        <el-form-item label="姓名">
          <el-input v-model="userParams.contactsName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型" style="width:100%" v-model="userParams.contactsCertificatesType">
            <el-option v-for="item in certationArr" :key="item.id" :label="item.name" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="userParams.contactsCertificatesNo"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userParams.contactsPhone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="danger">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ElMessage, type CascaderProps } from 'element-plus'
import { User } from '@element-plus/icons-vue'
import { reqPatientList, reqCertificatesType, reqCity, reqUpdateUser } from '@/api/user'
import { ref, onMounted, reactive } from 'vue'
import type { UserResponseData, UserArr } from '@/api/type';
import type { CertificatesTypeResponseData, CertationArr, UpdateUser } from '@/api/user/type';

let tag = ref<number>(0)
let userArr = ref<UserArr>([])
let certationArr = ref<CertationArr>([])
onMounted(() => {
  getAllUser()
  getCertationType()
})
let userParams = reactive<UpdateUser>({
  name: '6666',
  certificatesType: '10',
  certficatesNo: '421333199203110033',
  sex: 0,
  birthdate: '2024-01-01',
  phone: '13333334432',
  isMarry: 0,
  isInsure: 0,
  addressSelected: [],
  address: '6666666',
  contactsName: '',
  contactsCertificatesType: '',
  contactsCertificatesNo: '',
  contactsPhone: ''
})
const getAllUser = async () => {
  const res: UserResponseData = await reqPatientList()
  if (res.code == 200) userArr.value = res.data
}
const addUser = () => {
  tag.value = 1
}
const changeTag = () => {
  tag.value = 1
}
const getCertationType = async () => {
  let res: CertificatesTypeResponseData = await reqCertificatesType()
  if (res.code == 200) {
    certationArr.value = res.data
  }
}
const props: CascaderProps = {
  lazy: true,
  lazyLoad: async (node: any, resolve: any) => {
    let result: any = await reqCity(node.data.id || '86')
    let showData = result.data.map((item: any) => {
      return {
        id: item.id,
        value: item.value,
        label: item.name,
        leaf: !item.hasChildren,
      };
    });
    resolve(showData)

  },
};
const submit = async () => {
  let res = await reqUpdateUser(userParams)
  if (res.code == 200) {
    ElMessage({
      type: 'success',
      message: userParams.id ? '更新成功' : '新增成功'
    })
    tag.value = 0
    getAllUser()
  } else {
    ElMessage({
      type: 'error',
      message: userParams.id ? `更新失败 code:${res.code}` : `新增失败 code:${res.code}`
    })
  }
}
</script>

<style scoped lang="scss">
.box-card {
  width: 100%;
  height: 100%;
  padding: 20px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .visitor {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 30%;
      margin: 10PX;
    }
  }
}
</style>