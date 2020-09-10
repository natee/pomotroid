const config = {
  d3: {
    depUrl: '/static/js/d3.min.js',
    isReady: false,
  },
  moment: {
    depUrl: '/static/js/moment/moment.min.js',
    isReady: false,
  },
  'moment-zh-cn': {
    depUrl: '/static/js/moment/zh-cn.js',
    isReady: false,
  },
  'cal-heatmap': {
    depUrl: '/static/js/cal-heatmap.js',
    isReady: false,
  },
}

function asyncLoadJS(module) {
  module = typeof module === 'string' ? [module] : module
  const prs = []

  for (let i = 0; i < module.length; i++) {
    const name = module[i];
    const target = config[name]
    if (target.isReady) {
      // 已经加载过
      prs.push(Promise.resolve())
    }else{
      const p = new Promise(function(resolve, reject) {
        const el = window.document.createElement('script')
        el.type = 'text/javascript'
        el.charset = 'utf-8'
        el.addEventListener(
          'load',
          function() {
            target.isReady = true
            resolve()
          },
          false
        )
        el.addEventListener(
          'error',
          function() {
            reject()
          },
          false
        )
        el.src = target.depUrl
        el.crossOrigin = 'anonymous'
        window.document.body.appendChild(el)
      })
      prs.push(p)
    }
  }

  return Promise.all(prs)
}

export { asyncLoadJS }
