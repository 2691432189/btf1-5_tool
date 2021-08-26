<template>
  <div>
    <el-scrollbar height="500px">
      <el-row>
        <el-col v-for="(item, index) in vehicleAry" :key="index" id="item">
          <div>
           <span id="weaponName">{{item.vehicleName}}</span>
           <span></span>
           <span></span>
          </div>
          <el-row id="info">
            <el-col :md="8" :sm="12" :xs="12">击杀: {{item.kills}}</el-col>
            <el-col :md="8" :sm="12" :xs="12">摧毁: {{item.destroyed}}</el-col>
            <el-col :md="8" :sm="12" :xs="12">KPM: {{item.killsPerMinute}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  vehicleAry: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>

<style scoped>

</style>
