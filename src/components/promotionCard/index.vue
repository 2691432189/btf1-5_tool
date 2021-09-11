<template>
  <div>
    <!-- 推荐卡片 -->
    <el-card id="promotionCard">
      <!-- 标题 -->
      <div id="title">
        <div id="names">孤儿没妈</div>
        <div id="info">详情</div>
      </div>
      <!-- 介绍 -->
      <div id="introduce">
         <el-scrollbar>
            <div>
              孤儿都是没有妈的是怎么回事呢？孤儿相信大家都很熟悉，但是孤儿都是没有妈的是怎么回事呢，下面就让小编带大家一起了解吧。<br/>
              孤儿都是没有妈的，其实就是孤儿的马都死了，大家可能会很惊讶孤儿怎么会都是没有妈的呢？但事实就是这样，小编也感到非常惊讶。<br/>
              这就是关于孤儿都是没有妈的的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
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
