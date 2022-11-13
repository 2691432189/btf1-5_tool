<template>
  <!-- 工具名 -->
  <div id="name" @click="toFrontPage">
    BTF战绩助手
  </div>
  <!-- 搜索栏 -->
  <div id="searchInput">
    <el-input
      placeholder="请输游戏ID,不要带队标"
      v-model="userId"
      class="input-with-select"
    >
      <!-- 级联选择器 -->
      <template #prepend>
        <el-cascader
          v-model="currentOption"
          :options="options"
          :props="setProps"
          size="mini"
          :show-all-levels="false"
        />
      </template>
      <!-- 搜索按钮 -->
      <template #append>
        <el-button icon="el-icon-search" @click="goSearch"/>
      </template>
    </el-input>
  </div>
  <!-- 官方相关 -->
  <!-- <div id="official">
    <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=oAMJUvTPjN5LJDa8Qf5yIgoPXZ3okGqy&authKey=b8xa4GbL1ZCpIzqng%2F81tlIAx7yXq8ikhlAyGB4nCzpcfvGkBnD50Lb3%2FqtxIsYP&noverify=0&group_code=568784361">官方群一</a>
    <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=ppeUhFP8l-0dNytv2oCxxQ3eOFS5Wd_o&authKey=wC9drx80%2FRm5AocIieReXL79UXxdSb9%2FOKHQtT9IVib4v8rw6p1lLsSd8YwSjeBz&noverify=0&group_code=952151528">官方群二</a>
    <a target="_blank" href="https://support.qq.com/products/316786">意见反馈</a>
    <a target="_blank" href="https://afdian.net/order/create?user_id=6f738d8ea67211ebb14052540025c377">为TA发电</a>
  </div> -->
  <!-- 关注的用户 -->
  <div id="attention" class="hidden-sm-and-down">关注的用户</div>
  <div id="attentionUser" class="hidden-sm-and-down">
    <div v-for="(item, index) in focusOn" :key="index" class="attentionUserItem">
      <el-tag id="focusOn" @click="goFocusOn(item)">{{ item }}</el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

const router = useRouter()
// 级联选择器配置
const options = [
  {
    value: '0',
    label: 'Origin',
    children: [
      {
        value: '1',
        label: '战地一'
      },
      {
        value: '5',
        label: '战地五'
      }
    ]
  },
  {
    value: '1',
    label: 'PS4',
    children: [
      {
        value: '1',
        label: '战地一'
      },
      {
        value: '5',
        label: '战地五'
      }
    ]
  },
  {
    value: '2',
    label: 'Xbox',
    children: [
      {
        value: '1',
        label: '战地一'
      },
      {
        value: '5',
        label: '战地五'
      }
    ]
  }
]
// 级联选择器val
const currentOption = ref(['0', '5'])
const setProps = { expandTrigger: 'hover' }
// 搜索的用户id
const userId = ref<string>('')
// 跳转到搜索页

const goSearch = () => {
  if (userId.value.trim()) {
    router.push('/searchResults/' + userId.value + '/' + currentOption.value[1])
  } else {
    ElMessage.error('用户ID不可为空！！')
  }
}

// 关注的用户列表
const focusOn = ref(JSON.parse(window.localStorage.getItem('focusOn')))
const goFocusOn = (userIds: string) => {
  router.push('/searchResults/' + userIds + '/' + currentOption.value[1])
  userId.value = userIds
}
const store = useStore()
store.commit('severGetUserFn', () => {
  focusOn.value = JSON.parse(window.localStorage.getItem('focusOn'))
})

const toFrontPage = () => {
  router.push('/')
}
</script>

<style sass>
#name {
  color: #000000;
  font-size: 20px;
  text-align: center;
  margin: 20px 0 0 0;
  cursor: pointer;
}

/* 搜索组件栏 */
#searchInput {
  padding: 20px 20px 20px 20px;
}

/* 官方相关 */
#official {
  color: #49a2ff;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  font-size: 14px;
}

#official a {
  color: #49a2ff;
}

/* 关注的用户 */
#attention {
  padding: 20px 20px 20px 20px;
  font-weight: 700;
}

#attentionUser {
  padding: 10px 20px 20px 20px;
}

#focusOn {
  cursor: pointer;
}

.attentionUserItem {
  margin-bottom: 10px;
}

.el-input-group__prepend {
  padding: 0px !important;
}

.el-input--mini .el-input__inner {
  border: 0px;
  background-color: #f5f7fa;
  width: 82px;
}
</style>
