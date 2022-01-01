<template>
  <div v-loading="isLoading">
    <div  id="activePlatoon" @click="showLoading(true)">
      代表的战排：
      <span>
        {{activePlatoon.tag}}
      </span>
      <i>></i>
    </div>
    <div  id="platoons" @click="showLoading(false)">
      加入的战排：
      <span v-for="(item) in platoons" :key="item.id">
        {{item.tag}}
      </span>
      <i>></i>
    </div>
  </div>
  <el-dialog
    :title="dialogData.title"
    v-model="dialogVisible"
    width="70%"
  >
    <el-row v-for="(item) in dialogData.data" :key="item.id">
      <el-col :md="24">
        <el-image
          style="width: 50px; height: 50px"
          :src="item.emblem"
          :fit="fit"
        />
      </el-col>
      <el-col :md="8">
        战队名：{{item.name}}
      </el-col>
      <el-col :md="5">
        战队简称：{{item.tag}}
      </el-col>
      <el-col :md="24">
        战队介绍：{{item.description}}
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script setup lang="ts">
import { getCurrentInstance, defineProps, watch, reactive, ref, toRefs } from 'vue'
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
const battlePlatoon = reactive({
  activePlatoon: {},
  platoons: [],
  dialogData: {}
})
const { activePlatoon, platoons, dialogData } = toRefs(battlePlatoon)
const isLoading = ref(true)
const dialogVisible = ref(false)
watch([() => props.type, () => props.userId], async (newVal) => {
  isLoading.value = true
  const { data } = await that.$http.getUserBattlePlatoon(newVal[0], newVal[1])
  battlePlatoon.activePlatoon = data.data.activePlatoon
  battlePlatoon.platoons = data.data.platoons
  isLoading.value = false
}, { immediate: true })
const showLoading = (item:boolean) => {
  if (item) {
    dialogData.value = {
      title: '代表的战排',
      data: [activePlatoon.value]
    }
    dialogVisible.value = true
  } else {
    dialogData.value = {
      title: '加入的战排',
      data: [...platoons.value]
    }
    dialogVisible.value = true
  }
}
</script>

<style scoped>
#activePlatoon {
  margin-bottom: 5px;
}
#activePlatoon,#platoons {
  position: relative;
  cursor: pointer;
}
#activePlatoon i,#platoons i {
  position: absolute;
  right: 0px;
}
#activePlatoon span{
  font-size: 14px;
  color: rgb(129, 129, 129);
}
#platoons span {
  padding-right: 4px;
  font-size: 14px;
  color: rgb(129, 129, 129);
}
.el-row {
  margin-bottom: 25px;
}
</style>
