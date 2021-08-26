<template>
  <div v-loading="isLoading">
    <el-row>
      <el-col v-for="(item, index) in sort" :key="index" :md="24" :sm="8" :xs="8" class="userInfo">
        <el-row>
          <el-col :md="12" :sm="24" id="key">
            {{item.name}}
            <span class="hidden-sm-and-down">:</span>
          </el-col>
          <el-col :md="12" :sm="24" id="val">
            {{userInfos[item.key]}}
          </el-col>
        </el-row>
      </el-col>
    </el-row >
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, watch, ref } from 'vue'
const props = defineProps({
  userInfo: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
const userInfos = toRef(props, 'userInfo')
const isLoading = ref(true)
watch(() => props.userInfo.timePlayed, (newVal:number) => {
  isLoading.value = true
  if (typeof newVal === 'string' && newVal.indexOf('days') !== -1) {
    const timeArr = newVal.split('days,')
    const time1 = timeArr[0] * 24
    const time2 = timeArr[1].split(':')[0] * 1
    userInfos.value.timePlayed = time1 + time2
  } else if (typeof newVal === 'string') {
    userInfos.value.timePlayed = newVal.split(':')[0]
  }
  isLoading.value = false
})
const sort = [
  { key: 'timePlayed', name: '游戏时间' },
  { key: 'rank', name: '等级' },
  { key: 'killDeath', name: 'K/D' },
  { key: 'killsPerMinute', name: 'KPM' },
  { key: 'scorePerMinute', name: 'SPM' },
  { key: 'accuracy', name: '命中率' },
  { key: 'headshots', name: '爆头率' },
  { key: 'headShots', name: '爆头数' },
  { key: 'kills', name: '击杀数' },
  { key: 'deaths', name: '死亡数' },
  { key: 'highestKillStreak', name: '最高连杀数' },
  { key: 'longestHeadShot', name: '最远爆头距离' },
  { key: 'wins', name: '胜利场数' },
  { key: 'loses', name: '失败场数' },
  { key: 'winPercent', name: '胜率' }
]
</script>

<style scoped>
.userInfo {
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
#key {
  color: #1d1d1d;
  font-size: 14px;
}
#val {
  color: #797979;
  font-size: 12px;
}
</style>
