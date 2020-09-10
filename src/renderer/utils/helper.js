export function formatDate(date, formatString = 'yyyyMMdd') {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }

  //生成年份信息
  if (/(y+)/.test(formatString)) {
    formatString = formatString.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  //生成格式串中的其它信息
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(formatString)) {
      formatString = formatString.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return formatString
}

export function getDaysByNow() {
  const today = new Date()
  const year = today.getFullYear()
  return Math.floor((today - new Date(year, 0, 1))/(24*3600e3)) + 1;
}
