<template>
  <el-row>
    <el-col :md="8" :sm="24" >
      <search-user />
    </el-col>
    <el-col :md="16" :sm="24" >
      <router-view/>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import searchUser from './components/searchUser/index.vue'
</script>

<style sass>
</style>
