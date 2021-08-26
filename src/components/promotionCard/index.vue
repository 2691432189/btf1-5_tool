<template>
  <div>
    <!-- 推荐卡片 -->
    <el-card id="promotionCard">
      <!-- 标题 -->
      <div id="title">
        <div id="names">欢迎来到战地1NOEZ服务111111</div>
        <div id="info">详情</div>
      </div>
      <!-- 介绍 -->
      <div id="introduce">
         <el-scrollbar >
            <div>
              NOEZ一共有三个服务器
1服为限制等级KD的萌新服（小于140级单场KD不超过5）
2服为全地图征服限制60杀。
3服为步战加热门图服，禁止趴地机枪和迫击炮(正在招募常驻管理)。
全服禁止开挂，辱骂，蹲起等等不良行为，禁止起迫击炮车。
管理会带头抗压，尽量平衡局势。
另外还有一个刷枪或者小模式的服务器。
            </div>
        </el-scrollbar>
      </div>
      <!-- 时间 -->
      <div id="time">
        2021年8月19日
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: function () {
      return { }
    }
  }
})
</script>

<style asss scoped>
/* 标题 */
#title {
  position: relative;
  font-size: 16px;
}
/* 标题名 */
#names {
  width: 80%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
/* 详情 */
#info {
  position: absolute;
  right: 0px;
  top: 0px;
  color: #48a2ff;
  cursor: pointer;
  opacity: 0;
  transition: all .5s ;
}
/* 鼠标经过卡片时，显示详情按钮 */
#promotionCard:hover #info {
  opacity: 1;
}
/* 详细介绍 */
#introduce {
  height: 120px;
  padding: 10px 0px;
  font-size: 14px;
  color: #585858;
}
#introduce div {
  width: 100%;
  overflow: hidden;
}
/* 时间 */
#time {
  font-size: 14px;
  color: #585858;
}
</style>
