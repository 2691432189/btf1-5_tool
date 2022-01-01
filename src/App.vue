<template>
  <el-row>
    <el-col :md="8" :sm="24" >
      <search-user />
    </el-col>
    <el-col :md="16" :sm="24" >
      <router-view/>
    </el-col>
  </el-row>
  <div id="icp">
    <a href="http://beian.miit.gov.cn/" target="black">黑ICP备2021005574号</a>
  </div>
</template>

<script setup lang="ts">
import searchUser from './components/searchUser/index.vue'
</script>

<style sass>
  #icp {
    padding-bottom: 20px;
    text-align: center;
  }
</style>
