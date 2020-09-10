import { createLocalStore } from './LocalStore'
import { formatDate } from './helper'

// {
//   '时间戳秒数': [{
//     start: timestamp,
//     end: timestamp,
//     duration: 25
//   }]
// }
const historyStore = createLocalStore('user-history')

class UserHistory {
  constructor() {
    this.history = historyStore.data
   
    console.log(this)
  }

  // 最长连续打卡
  longestHold() {
    return 0
  }

  date() {
    const date = new Date()
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      today: formatDate(date, 'YYYY-MM-dd'),
    }
  }

  // 年度数据
  anualData() {
    return this.history
  }

  // 把我们存储的数据结构转化为 cal-heatmap 所需结果
  parser() {
    const data = this.anualData()
    const stats = {}
    for (let day in data) {
      const dayData = data[day]
      dayData.forEach(v => {
        const s = Math.floor(v.end / 1000)
        stats[s] = v.duration
      })
    }
    return stats
  }

  storeData(newData) {
    const today = formatDate(new Date())
    const todayData = this.getStoreData(today)
    todayData.push(newData)
    historyStore.set(today, todayData)
  }

  getStoreData(date) {
    return this.history[date] || []
  }
}

export default new UserHistory()
