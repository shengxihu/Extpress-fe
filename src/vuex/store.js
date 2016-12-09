import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 应用启动时，count 置为0
  count: 0,
  flag: true
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  flagN(state) {
    state.count +=100
    state.flag = false
  },
  flagY(state) {
    state.flag = true
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})