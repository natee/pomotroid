<template>
  <div class="Container">
    <!-- <h2>时间历程</h2> -->

    <div class="Calendar" id="calendar"></div>
  </div>
</template>

<script>
import userHistory from '@/utils/History'
// import { getDaysByNow } from '@/utils/helper'
import { asyncLoadJS } from '@/utils/AsyncLoad'

export default {
  name: 'DrawerHistory',
  data() {
    return {
      // days: getDaysByNow(),
      data: userHistory.anualData(),
    }
  },
  created() {},
  mounted() {
    asyncLoadJS(['d3', 'moment']).then(() => {
      asyncLoadJS(['moment-zh-cn', 'cal-heatmap']).then(async () => {
        moment.locale('zh-cn')
        this.draw()
      })
    })
  },
  methods: {
    draw() {
      const date = userHistory.date()
      const cal = new CalHeatMap()
      cal.init({
        itemSelector: '#calendar',
        data: userHistory.anualData(),
        afterLoadData: userHistory.parser.bind(userHistory),
        domain: 'month',
        subDomain: 'x_day',
        start: new Date(date.year, 0),
        RTL: true, // 倒着展示
        cellSize: 24,
        cellRadius: 12,
        cellPadding: 4,
        domainGutter: 0,
        domainMargin: 10,
        // 每一大块标签
        domainLabelFormat: function(date) {
          return moment(date).format('MMMM')
        },

        // 每个小方块显示的文字
        subDomainTextFormat: '%d',

        // 每个小方块标签name
        subDomainDateFormat: '%m月%d日',
        // 小方块标题value
        subDomainTitleFormat: {
          filled: '{count} {name} <br/> {date}',
        },
        // 每个小方块表示的内容
        itemName: ['分', '分钟'],
        // 垂直显示
        verticalOrientation: true,
        tooltip: true,
        // 显示多少个大块
        range: date.month + 1, // 今年过去的月份
        label: {
          position: 'left',
          width: 46,
        },
        legendColors: {
          empty: '#ededed',
          min: '#f47983',
          max: '#ff2d51',
        },
        onClick: function(date, nb) {
          console.log(date, nb)
        },
      })
    },
  },
}
</script>

<style lang="scss">
// h2 {
//   color: var(--color-foreground-darkest);
// }
.Calendar {
  margin-top: 40px;

  .cal-heatmap-container {
    .domain-background {
      fill: rgba(255, 255, 255, 0.2);
    }
    .graph-label {
      font-size: 16px;
      fill: var(--color-foreground-darker);
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
    }
    .graph-rect {
      fill: var(--color-background-light);
    }
    .subdomain-text {
      fill: var(--color-foreground-darker);
    }
  }
  .ch-tooltip {
      background: var(--color-background);
      color: var(--color-foreground);
    }

    .ch-tooltip::after {
      border-top-color: var(--color-background);
    }
}
</style>
