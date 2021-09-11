<template>
  <div>
    <div id="top">
      <mark-user :userInfo="localData" :isLoading="isLoading"/>
    </div>
    <div>
      <el-row>
        <el-col :md="8" :sm="24" class="bottom">
          <el-card>
            <basis-info :userInfo="officialData" :isLoading="isLoading"/>
          </el-card>
        </el-col>
        <el-col :md="16" :sm="24" class="bottom">
          <el-card id="detailedInfo">
            <detailed-info :userId="userId" :type="type"/>
          </el-card>
          <el-card id="soldierInfo">
            <soldier-info :userId="userId" :type="type"/>
          </el-card>
        </el-col>
      </el-row >
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, reactive, defineProps, getCurrentInstance, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import markUser from '../../components/markUser/index.vue'
import basisInfo from '../../components/basisInfo/index.vue'
import detailedInfo from '../../components/detailedInfo/index.vue'
import soldierInfo from '../../components/soldierInfo/index.vue'

// 获取实例
const { appContext } = getCurrentInstance()
const that = appContext.config.globalProperties
const router = useRouter()

const props = defineProps({
  userId: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})
// 用户信息
const userInfo = reactive({
  officialData: {},
  localData: {}
})
const isLoading = ref(true)
watch([() => props.type, () => props.userId], async (newVal) => {
  // 获取用户信息
  isLoading.value = true
  const { data: res } = await that.$http.getUserInfo(newVal[0], newVal[1])
  if (res.statusText) {
    userInfo.officialData = res.OfficialData
    userInfo.localData = res.localData
  } else {
    ElMessage.error('没有该用户！')
    router.push('/')
  }
  isLoading.value = false
}, { immediate: true })
const { officialData, localData } = toRefs(userInfo)

</script>

<style scoped sass>
#top {
  padding: 20px 20px 20px;
}
.bottom {
  padding: 0px 20px 20px;
}
#detailedInfo {
  margin-bottom: 20px;
}
</style>
