<template>
  <el-scrollbar height="500px">
    <el-row>
      <el-col v-for="(item, index) in armsAry" :key="index" id="item">
        <div>
         <span id="weaponName">{{item.weaponName}}</span>
         <span></span>
         <span></span>
        </div>
        <el-row id="info">
          <el-col :md="8" :sm="12" :xs="12">击杀: {{item.kills}}</el-col>
          <el-col :md="8" :sm="12" :xs="12">爆头率: {{item.headshots}}</el-col>
          <el-col :md="8" :sm="12" :xs="12">命中率: {{item.accuracy}}</el-col>
          <el-col :md="8" :sm="12" :xs="12">KPM: {{item.killsPerMinute}}</el-col>
          <el-col :md="8" :sm="12" :xs="12">效率: {{item.hitVKills}}</el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  armsAry: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>

<style scoped>
</style>
