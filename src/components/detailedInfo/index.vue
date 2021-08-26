<template>
  <div v-loading="isLoading">
    <el-tabs model-value="first">
      <el-tab-pane label="武器" name="first">
        <arms-list :armsAry="armsAry"/>
      </el-tab-pane>
      <el-tab-pane label="载具" name="second">
        <vehicle-list  :vehicleAry="vehicleAry"/>
      </el-tab-pane>
      <el-tab-pane label="飞机" name="third">
        <airplane-list :airplaneAry="airplaneAry"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, defineProps, watch, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import armsList from '../arms/index.vue'
import vehicleList from '../vehicle/index.vue'
import airplaneList from '../airplane/index.vue'
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
const armsAry = reactive([])
const vehicleAry = reactive([])
const airplaneAry = reactive([])
const isLoading = ref(true)
watch([() => props.type, () => props.userId], async (newVal) => {
  isLoading.value = true
  const { data: resArms } = await that.$http.getUserWeapons(newVal[0], newVal[1])
  const { data: resVehicleAirplane } = await that.$http.getUserVehicles(newVal[0], newVal[1])
  if (!resArms.statusText) return ElMessage.error('获取用户武器信息失败')
  if (!resVehicleAirplane.statusText) return ElMessage.error('获取用户载具信息失败')
  armsAry.length = 0
  vehicleAry.length = 0
  airplaneAry.length = 0
  armsAry.push(...resArms.data)

  resVehicleAirplane.data.forEach(item => {
    if (item.type === '飛機' || item.type === '攻擊機' || item.type === '重型轟炸機' || item.type === '轟炸機' || item.type === '戰鬥機') {
      airplaneAry.push(item)
    } else {
      vehicleAry.push(item)
    }
  })
  isLoading.value = false
}, { immediate: true })
</script>

<style scoped>

</style>
