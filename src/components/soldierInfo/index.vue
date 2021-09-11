<template>
  <div v-loading="isLoading" >
    <el-table :data="soldierInfo" stripe style="width: 100%" size="mini">
    <el-table-column prop="className" label="兵种" > </el-table-column>
    <el-table-column prop="kills" label="击杀" > </el-table-column>
    <el-table-column prop="kpm" label="Kpm"> </el-table-column>
    <el-table-column prop="timePlayed" label="时长"> </el-table-column>
  </el-table>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, defineProps, watch, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
// 获取实例
const { appContext } = getCurrentInstance()
const that = appContext.config.globalProperties

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
const soldierInfo = reactive([])
// 控制加载等待
const isLoading = ref(true)
watch([() => props.type, () => props.userId], async (newVal) => {
  // 开启加载等待
  isLoading.value = true
  const { data } = await that.$http.getUserArms(newVal[0], newVal[1])
  if (!data.statusText) return ElMessage.error('获取用户兵种信息失败')
  soldierInfo.length = 0
  data.data.forEach((item:any):void => {
    if (typeof item.timePlayed === 'string' && item.timePlayed.indexOf('day') !== -1) {
      const timeArr = item.timePlayed.split('day,')
      const time1 = timeArr[0] * 24
      const time2 = timeArr[1].split(':')[0] * 1
      item.timePlayed = time1 + time2
    } else if (typeof item.timePlayed === 'string') {
      item.timePlayed = item.timePlayed.split(':')[0]
    }
  })
  soldierInfo.push(...data.data)
  // 关闭加载等待
  isLoading.value = false
}, { immediate: true })
</script>

<style scoped>

</style>
