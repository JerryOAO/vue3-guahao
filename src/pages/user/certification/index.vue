<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>实名信息</span>
        </div>
      </template>
      <div class="tip">
        <Icon icon="fa6-solid:id-card" />
        <p>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。</p>
      </div>
      <div class="descriptions" v-if="memberInfo.authStatus==1">
        <el-descriptions border column="1">
          <el-descriptions-item label="用户姓名" label-align="center"
            label-class-name="test">{{ memberInfo.name }}</el-descriptions-item>
          <el-descriptions-item label="证件类型" label-align="center"
            label-class-name="test">{{ memberInfo.certificatesType == 10 ? '身份证' : '户口本' }}</el-descriptions-item>
          <el-descriptions-item label="证件号码" label-align="center"
            label-class-name="test">{{ memberInfo.certificatesNo }}</el-descriptions-item>
        </el-descriptions>
      </div>
      <el-form class="forms" label-width="80" v-if="memberInfo.authStatus==0">
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型" v-model="params.certificatesType">
            <el-option :label="item.name" :value="item.value" v-for="(item, index) in arrType" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input placeholder="请输入用户姓名" v-model="params.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input placeholder="请输入证件号码" v-model="params.certificatesNo"></el-input>
        </el-form-item>
        <el-form-item label="上传证件">
          <el-upload list-type="picture-card" ref="upload" :on-remove="handleRemove"
            :on-preview="handlePictureCardPreview" :on-success="successhandler" :on-exceed="exceedhandler"
            action="/api/oss/file/fileUpload?fileHost=userAuah" :limit="1">
            <Icon icon="line-md:uploading-loop" width="100" height="100" />
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img w-full style="width:100%;height:100%" :src="params.certificatesUrl" alt="Preview Image" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { reqGetMember, reqCertificatesType, reqUserCertation } from '@/api/user';
import type { MemberResponseData, CertationArr, UserParams } from '@/api/user/type';
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

let memberInfo = ref<any>([]);
let arrType = ref<CertationArr>([]);
let dialogVisible = ref<boolean>(false);
let upload = ref<any>();
onMounted(() => {
  getMember();
  getType();
});

const getType = async () => {
  const res = await reqCertificatesType();
  if (res.code == 200) {
    arrType.value = res.data;
  }
};
const getMember = async () => {
  const res: MemberResponseData = await reqGetMember();
  if (res.code == 200) {
    memberInfo.value = res.data;
    console.log('memberInfo.value', memberInfo.value.authStatus)
  }
};

let params = reactive<UserParams>({
  certificatesNo: '',
  certificatesType: '',
  certificatesUrl: '',
  name: ''
})

//超出限制
const exceedhandler = () => {
  ElMessage({
    type: 'error',
    message: '图片只能上传1账'
  })
};

const successhandler = (response: any) => {
  if (response.code == 200) {
    params.certificatesUrl = response.data;
  }
};

const handlePictureCardPreview = () => {
  dialogVisible.value = true;
};

const handleRemove = () => {
  params.certificatesUrl = '';
};

const reset = () => {
  upload.value.clearFiles();
  Object.assign(params, {
    certificatesNo: '',
    certificatesType: '',
    certificatesUrl: '',
    name: ''
  })
};

const submit = async () => {
  try {
    let res = await reqUserCertation(params);
    if (res.data.code == 200) {
      ElMessage({
      type: 'success',
      message: '认证成功'
    })
    }
    getMember();
  } catch (error) {
    let res = await reqUserCertation(params);
    ElMessage({
      type: 'error',
      message: res.message
    })
  }
};
</script>

<style scoped lang="scss">
.tip {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip p {
  color: red;
}

.descriptions {
  margin-top: 20px;
  width: 50%;
  padding: 20px;
  :deep(.test) {
    width: 100px !important;
  }
}

.forms {
  margin-top: 20px;
  width: 60%;
  margin: 20px auto;
}</style>