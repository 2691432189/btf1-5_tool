import axios from 'axios'
axios.defaults.baseURL = 'http://47.97.106.32:7777'
// http://47.97.106.32:7777
// http://localhost:8081

export default {
  // 获取用户信息
  getUserInfo (type:string, userId:string):any {
    return axios.get(`/user/getUserInfo?userId=${userId}&type=${type}`)
  },
  // 标记为外挂
  confirm (userId:string):any {
    return axios.get(`/user/addConfirm?userId=${userId}`)
  },
  // 标记为可疑
  suspicious (userId:string):any {
    return axios.get(`/user/addSuspicious?userId=${userId}`)
  },
  // 获取用户武器信息
  getUserWeapons (type:string, userId:string):any {
    return axios.get(`/user/getUserWeapons?userId=${userId}&type=${type}`)
  },
  // 获取用户载具信息
  getUserVehicles (type:string, userId:string):any {
    return axios.get(`/user/getUserVehicles?userId=${userId}&type=${type}`)
  },
  // 获取用户兵种统计信息
  getUserArms (type:string, userId:string):any {
    return axios.get(`/user/getUserArms?userId=${userId}&type=${type}`)
  }
}
