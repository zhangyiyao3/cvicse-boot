import store from '@/store'
import setting from '@/setting'

// 许可类型常量
export const ANONYMOUS = 'anonymous'
export const LOGGEDIN = 'loggedIn'
export const CHECK = 'check'

// Vue Mixin
export default {
  methods: {
    checkPermission
  }
}

// 当前用户许可检查
export function checkPermission (...uris) {
  // 对 uri 筛选过滤
  let checks = []
  for (let i in uris) {
    const uri = uris[i]
    let permissionSetting = setting.permissions[uri]
    switch (permissionSetting) {
      case ANONYMOUS:
        return true
      case CHECK:
        checks.push(uri)
        break
      case LOGGEDIN:
      default: // 默认按照 LOGGEDIN 处理
        if (store.getters['session/loggedIn']) {
          return true
        }
    }
  }
  return forEachMatch(checks, store.state.session.user.permissions)
}

// 逐条对比匹配算法
export function forEachMatch (facts, rules) {
  // const permissions = setting.permissions
  // TODO 先简单实现验证思路，后续需要改进：1、采用缓冲减少匹配次数；2、使用树搜索算法提高匹配效率
  for (let i in facts) {
    for (let j in rules) {
      if (facts[i].startsWith(rules[j])) { // 针对带参路由的情况，先使用前向匹配
        // console.log(`匹配成功：${facts[i]} => ${rules[j]}`)
        return true
      }
    }
  }
  return false
}

// 树状查找匹配算法
export function treeMatch (facts, rules) {
  return true
}
