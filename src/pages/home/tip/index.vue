<template>
  <div class="tip">
    <!-- 常见科室 -->
    <div class="deparment">
      <div class="header">
        <div class="left">
          <svg t="1700369940538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4350" width="13" height="13">
            <path
              d="M809.130667 930.304H207.530667a61.44 61.44 0 0 1-61.44-61.44l-1.194667-362.837333a53.248 53.248 0 0 1-42.496-15.36 53.248 53.248 0 0 1 5.632-74.069334L474.112 106.325333a52.736 52.736 0 0 1 68.266667 0l364.714666 309.589334h1.024a53.418667 53.418667 0 0 1 18.090667 40.277333 52.565333 52.565333 0 0 1-18.944 39.936 57.173333 57.173333 0 0 1-40.448 10.069333L870.4 868.693333a61.44 61.44 0 0 1-61.269333 61.610667zM155.136 456.533333a39.594667 39.594667 0 0 1 26.624 10.410667 39.082667 39.082667 0 0 1 12.288 27.989333l1.194667 373.589334a12.288 12.288 0 0 0 12.288 12.288h601.6a12.288 12.288 0 0 0 12.117333-12.288L817.493333 503.466667a45.909333 45.909333 0 0 1 14.336-34.133334 44.885333 44.885333 0 0 1 34.133334-12.458666 73.045333 73.045333 0 0 0 10.922666 0 2.389333 2.389333 0 0 0 0-1.024 4.437333 4.437333 0 0 0-1.024-2.56L510.464 143.872a3.754667 3.754667 0 0 0-4.608 0L140.458667 453.973333a3.413333 3.413333 0 0 0-1.024 2.389334 58.538667 58.538667 0 0 0 12.970666 0z m720.384 2.730667z"
              p-id="4351"></path>
            <path
              d="M306.176 754.858667h63.317333a9.386667 9.386667 0 0 1 10.581334 10.581333v63.317333a9.386667 9.386667 0 0 1-10.581334 10.581334h-63.317333a9.216 9.216 0 0 1-10.410667-10.581334v-63.317333a9.216 9.216 0 0 1 10.410667-10.581333z m168.789333 0h63.317334a9.386667 9.386667 0 0 1 10.581333 10.581333v63.317333a9.386667 9.386667 0 0 1-10.581333 10.581334h-63.317334a9.386667 9.386667 0 0 1-10.581333-10.581334v-63.317333a9.386667 9.386667 0 0 1 10.581333-10.581333z m-168.789333-112.298667h63.317333a9.386667 9.386667 0 0 1 10.581334 10.581333V716.8a9.216 9.216 0 0 1-10.581334 10.410667h-63.317333a9.216 9.216 0 0 1-10.410667-10.410667v-63.658667a9.216 9.216 0 0 1 10.410667-10.581333z m0-111.957333h63.317333a9.216 9.216 0 0 1 10.581334 10.410666v63.317334a9.386667 9.386667 0 0 1-10.581334 10.581333h-63.317333a9.216 9.216 0 0 1-10.410667-10.581333V541.013333a9.216 9.216 0 0 1 10.410667-10.410666z m168.789333 111.957333h63.317334a9.386667 9.386667 0 0 1 10.581333 10.581333V716.8a9.216 9.216 0 0 1-10.581333 10.410667h-63.317334a9.216 9.216 0 0 1-10.581333-10.410667v-63.658667a9.386667 9.386667 0 0 1 10.581333-10.581333z m168.789334 112.298667h63.317333a9.386667 9.386667 0 0 1 10.581333 10.581333v63.317333a9.386667 9.386667 0 0 1-10.581333 10.581334h-63.317333a9.386667 9.386667 0 0 1-10.581334-10.581334v-63.317333a9.386667 9.386667 0 0 1 10.581334-10.581333z m0 0"
              opacity=".5" p-id="4352"></path>
            <path
              d="M580.266667 387.413333l-60.074667-60.245333a17.066667 17.066667 0 0 0-24.234667 0l-60.074666 60.245333a17.066667 17.066667 0 0 0 0 24.064l60.245333 60.245334a17.066667 17.066667 0 0 0 24.234667 0L580.266667 411.477333a17.066667 17.066667 0 0 0 0-24.064zM546.133333 409.6h-27.306666v27.306667a10.24 10.24 0 0 1-20.48 0V409.6h-27.306667a10.069333 10.069333 0 0 1-10.24-10.069333 10.24 10.24 0 0 1 10.24-10.24h27.306667v-27.306667a10.24 10.24 0 0 1 20.48 0v27.306667H546.133333a10.069333 10.069333 0 0 1 10.069334 10.24 9.898667 9.898667 0 0 1-10.069334 10.069333z"
              p-id="4353"></path>
          </svg>
          <span>常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
      <div class="content">
        <ul>
          <li><el-link :underline="false">神经内科</el-link></li>
          <li><el-link :underline="false">呼吸内科</el-link></li>
          <li><el-link :underline="false">消化内科</el-link></li>
          <li><el-link :underline="false">内科</el-link></li>
          <li><el-link :underline="false">神经外科</el-link></li>
          <li><el-link :underline="false">妇科</el-link></li>
          <li><el-link :underline="false">产科</el-link></li>
          <li><el-link :underline="false">儿科</el-link></li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <div class="header">
        <div class="left">
          <svg t="1700371379088" class="noticeIcon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="5113" width="16" height="16">
            <path d="M342 391.1h24.7v180.4H342z" fill="#FFFFFF" p-id="5114"></path>
            <path
              d="M404.6 711.5c-0.4 3.7-0.6 7.5-0.6 11.2v70c0 59.7 48.4 108 108 108 59.7 0 108-48.4 108-108v-70c0-3.8-0.2-7.5-0.6-11.2H404.6z m0 0"
              fill="#CCE5F6" p-id="5115"></path>
            <path
              d="M512 923.9c-72.3 0-131.1-58.8-131.1-131.1v-70c0-4.5 0.2-9.1 0.7-13.6 1.2-11.8 11.1-20.7 23-20.7h214.9c11.8 0 21.8 8.9 23 20.7 0.5 4.5 0.7 9.1 0.7 13.6v70c-0.1 72.3-58.9 131.1-131.2 131.1z m-84.9-189.3v58.1c0 46.8 38.1 84.9 84.9 84.9 46.8 0 84.9-38.1 84.9-84.9v-58.1H427.1z m148-477.2c-0.8 0-1.6 0-2.4-0.1-12.7-1.3-21.9-12.7-20.6-25.4 0.1-1.4 0.2-2.8 0.2-4.2v-41.1c0-22.2-18.1-40.3-40.3-40.3-22.2 0-40.3 18.1-40.3 40.3v41.1c0 1.4 0.1 2.8 0.2 4.2 1.3 12.7-7.9 24.1-20.6 25.4-12.7 1.3-24.1-7.9-25.4-20.6-0.3-3-0.5-6-0.5-9v-41.1c0-47.7 38.8-86.5 86.5-86.5s86.5 38.8 86.5 86.5v41.1c0 3-0.2 6-0.5 9-1.1 11.9-11.1 20.7-22.8 20.7z m0 0"
              fill="#2197EF" p-id="5116"></path>
            <path
              d="M756.7 616.9c-12.8 0-23.1-10.3-23.1-23.1V481.3c0-122.2-99.4-221.6-221.6-221.6-122.2 0-221.6 99.4-221.6 221.6v112.5c0 12.8-10.3 23.1-23.1 23.1s-23.1-10.3-23.1-23.1V481.3c0-147.7 120.2-267.8 267.8-267.8 147.7 0 267.9 120.2 267.9 267.8v112.5c0 12.8-10.4 23.1-23.2 23.1z m0 0"
              fill="#2197EF" p-id="5117"></path>
            <path d="M168.3 677h687.5v113.6H168.3z" fill="#CCE5F6" p-id="5118"></path>
            <path
              d="M855.7 813.7H168.3c-12.8 0-23.1-10.3-23.1-23.1V677c0-12.8 10.3-23.1 23.1-23.1h687.5c12.8 0 23.1 10.4 23.1 23.1v113.6c0 12.8-10.4 23.1-23.2 23.1z m-664.3-46.2h641.3v-67.4H191.4v67.4z m0 0"
              fill="#2197EF" p-id="5119"></path>
          </svg>
          <span>平台公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
      <div class="content">
        <ul>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="关于延长北京大学国际医院放假的通知"
              placement="top-start">关于延长北京大学国际医院放假的通知</el-tooltip></li>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="北京中医药大学东方医院部分科室医生门诊医"
              placement="top-start">北京中医药大学东方医院部分科室医生门诊医</el-tooltip></li>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="武警总医院号源暂停更新通知" placement="top-start">武警总医院号源暂停更新通知</el-tooltip>
          </li>
        </ul>
      </div>
    </div>
    <div class="closeNotice">
      <div class="header">
        <div class="left">
          <svg t="1700372071008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5321" width="16" height="16">
            <path
              d="M521.8304 198.912l-223.104 127.4624-98.2272 0.0256A57.6 57.6 0 0 0 142.8992 384v256l0.128 3.9424a57.6 57.6 0 0 0 57.472 53.6576l98.176-0.0256 223.1552 127.5136a57.6 57.6 0 0 0 86.1952-49.9968V248.9088a57.6 57.6 0 0 0-86.1952-49.9968z m22.1696 61.0304v504.0896l-228.2752-130.432-108.8512-0.0256v-243.2l108.8512 0.0256 228.2752-130.4576zM653.952 371.0208a32 32 0 0 1 44.8512-5.9648c42.1376 32.2304 63.3088 79.488 63.3088 138.624s-21.1712 106.3936-63.3088 138.624a32 32 0 0 1-38.8864-50.8416c25.5488-19.5328 38.1952-47.7696 38.1952-87.808 0-40.0128-12.6464-68.224-38.1952-87.7824a32 32 0 0 1-5.9648-44.8512z"
              fill="#FB553C" p-id="5322"></path>
            <path
              d="M723.9168 261.7088a32 32 0 0 1 44.8512-5.9648c74.8288 57.216 112.3328 140.9024 112.3328 247.936 0 107.008-37.504 190.72-112.3328 247.936a32 32 0 1 1-38.8864-50.8416c58.24-44.544 87.2192-109.2096 87.2192-197.12 0-87.8848-28.9792-152.5504-87.2192-197.0944a32 32 0 0 1-5.9648-44.8512z"
              fill="#FB553C" p-id="5323"></path>
          </svg>
          <span>停诊公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
      <div class="content">
        <ul>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告"
              placement="top-start">中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告</el-tooltip></li>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="首都医科大学附属北京潞河医院老年医学科门诊停诊公告"
              placement="top-start">首都医科大学附属北京潞河医院老年医学科门诊停诊公告</el-tooltip></li>
          <li><el-icon>
              <Paperclip />
            </el-icon><el-tooltip effect="dark" content="中日友好医院中西医结合心内科门诊停诊公告"
              placement="top-start">中日友好医院中西医结合心内科门诊停诊公告</el-tooltip></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Paperclip } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.tip {
  color: #7f7f7f;
  font-size: 14px;

  .header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
    }

    .right {
      display: flex;
    }
  }

  .content {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: 40%;
        margin-top: 20px;
      }
    }
  }

  .notice,
  .closeNotice {
    margin-top: 30px;

    .content {
      ul {
        display: block;

        li {
          .el-icon {
            vertical-align: bottom;
            margin-right: 2px;
          }

          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

.el-icon {
  font-size: 14px;
  color: #999;
}
</style>