<template>
  <div class="promotion">
    <el-row :gutter="40">
      <el-col v-for="(item, index) in 9" :key="index" :md="8" :sm="24">
        <promotion-card :data="{}"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import promotionCard from '../../components/promotionCard/index.vue'

</script>

<style sass scoped>
/* 推荐 */
.promotion {
  padding: 20px 40px  20px 40px;
}
.promotions {
  padding: 64px 40px  20px 40px;
}
.el-col {
  margin-bottom: 10px;
}
</style>
