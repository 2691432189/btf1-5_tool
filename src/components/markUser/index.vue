<template>
  <div>
    <el-card>
    <el-row id="mark">
      <el-col :sm="24" :md="12">
        <span id="userName">{{userInfo.userId}}</span>
        <span id="views">({{userInfo.views+'浏览'}})</span>
      </el-col>
      <el-col :sm="24" :md="12" class="hidden-sm-and-down">
        <el-checkbox @change="change" v-model="isFocusOn">
          关注
        </el-checkbox>
      </el-col>
      <el-col id="confirm" :sm="24" :md="12">
        <el-popconfirm
          title="确定标记为外挂吗？"
          @confirm="confirm"
        >
          <template #reference>
            <span>已被{{ userInfo.confirm }}人标记为外挂</span>
          </template>
        </el-popconfirm>
      </el-col>
      <el-col id="suspicious" :sm="24" :md="12">
         <el-popconfirm
          title="确定标记为可疑吗？"
          @confirm="suspicious"
        >
          <template #reference>
            <span>已被{{userInfo.suspicious}}人标记为可疑</span>
          </template>
        </el-popconfirm>
      </el-col>
    </el-row>
    <div id="LBan">联ban查询结果:{{'未查到举报信息'}} <span @click="dialogVisible = true">提交举报</span></div>
    </el-card>
    <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="55%"
  >
    <span id="lbOfficial">
      如果发现该玩家开挂，可以去 bfban.com 举报，目前联ban已实现石锤列表自动踢挂功能，已石锤的ID将会被自动踢出，更多详情，请访问 <a href="https://bfban.com" target="_block">bfban.com</a>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          <a href="https://bfban.com/#/signin" target="_block">确 定</a>
        </el-button>
      </span>
    </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { defineProps, ref, getCurrentInstance, toRef, watch, reactive } from 'vue'
const { appContext } = getCurrentInstance()
const that = appContext.config.globalProperties
const props = defineProps({
  userInfo: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
const userInfo = toRef(props, 'userInfo')
const dialogVisible = ref(false)
// 标记为外挂
const confirm = async () => {
  const { data } = await that.$http.confirm(userInfo.value.userId)
  if (data.statusText) {
    userInfo.value.confirm = data.confirm
    ElMessage.success({
      message: '标记为外挂成功',
      type: 'success'
    })
  } else {
    ElMessage.error('标记为外挂失败')
  }
}
// 标记为可疑
const suspicious = async () => {
  const { data } = await that.$http.suspicious(userInfo.value.userId)
  if (data.statusText) {
    userInfo.value.suspicious = data.suspicious
    ElMessage.success({
      message: '标记为可疑成功',
      type: 'success'
    })
  } else {
    ElMessage.error('标记为可疑失败')
  }
}
const isFocusOn = ref<boolean | null>(false)
// 关注的用户列表
const focusOn = ref<string | null>(window.localStorage.getItem('focusOn'))
const focusOns = reactive(focusOn.value ? focusOn.value.split(',') : [])
watch(() => props.userInfo, () => {
  if (focusOn.value !== null) {
    isFocusOn.value = false
    focusOns.forEach(item => {
      if (item === userInfo.value.userId) {
        isFocusOn.value = true
      }
    })
  }
}, { immediate: true })
//  关注用户
const change = async (is:boolean) => {
  if (is) {
    if (focusOn.value === null || focusOn.value === '') {
      window.localStorage.setItem('focusOn', userInfo.value.userId)
    } else {
      window.localStorage.setItem('focusOn', focusOn.value + ',' + userInfo.value.userId)
    }
  } else {
    let a = ''
    focusOns.forEach((item, index) => {
      if (item !== userInfo.value.userId && item !== '') {
        if (index === focusOns.length - 1 || focusOns.length - 1 === 0) {
          a += item
        } else {
          a += item + ','
        }
      }
    })
    focusOn.value = a
    if (a === '') {
      window.localStorage.removeItem('focusOn')
    } else {
      window.localStorage.setItem('focusOn', a)
    }
  }
}
</script>

<style scoped>
#mark >.el-col {
  padding-bottom: 5px;
}
#userName {
  font-size: 16px;
  font-weight: 700;
}
#views {
  color: #808080;
  font-size: 12px;
}
#suspicious {
  color: #ebb563;
  font-size: 16px;
  cursor: pointer;
}
#confirm {
  color: #f56d6d;
  font-size: 16px;
  cursor: pointer;
}
#LBan {
  color: #8795a8;
  font-size: 16px;
}
#LBan span {
  color: #49a2ff;
  font-size: 16px;
  cursor: pointer;
}
#lbOfficial a {
   color: #49a2ff;
}
</style>
