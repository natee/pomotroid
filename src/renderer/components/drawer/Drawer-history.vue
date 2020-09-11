<template>
  <div class="Container">
    <!-- <div class="Calendar-view">
      <div
        class="Calendar-view-item"
        :class="selectedView.type === v.type ? 'is-active' : 'is-inactive'"
        v-for="(v, i) in views"
        :key="i"
        @click="selectCalendarType(v)"
      >
        {{ v.name }}
      </div>
    </div> -->
    <div class="Calendar" id="calendar"></div>
  </div>
</template>

<script>
import userHistory from '@/utils/History'
import { asyncLoadJS } from '@/utils/AsyncLoad'

export default {
  name: 'DrawerHistory',
  data() {
    return {
      selectedView: {},
      views: [
        {
          type: 'year',
          name: '年',
          domain: 'month',
          subDomain: 'x_day'
        },
        {
          type: 'month',
          name: '月',
          domain: 'week',
          subDomain: 'x_day'
        },
        {
          type: 'week',
          name: '周',
          domain: 'week',
          subDomain: 'hour'
        },
      ],
      data: userHistory.anualData(),
    }
  },
  created() {
    this.selectCalendarType(this.views[0])
  },
  mounted() {
    asyncLoadJS(['d3', 'moment']).then(() => {
      asyncLoadJS(['moment-zh-cn', 'cal-heatmap']).then(async () => {
        moment.locale('zh-cn')
        this.draw()
      })
    })
  },
  methods: {
    selectCalendarType(view) {
      this.selectedView = view
    },
    draw() {
      const date = userHistory.date()
      let cal = new CalHeatMap()
      // cal = cal.destroy()
      cal.init({
        itemSelector: '#calendar',
        data: userHistory.anualData(),
        afterLoadData: userHistory.parser.bind(userHistory),
        domain: this.selectedView.domain,
        subDomain: this.selectedView.subDomain,
        start: new Date(date.year, 0),
        RTL: true, // 倒着展示
        cellSize: 28,
        cellRadius: 14,
        cellPadding: 5,
        domainGutter: 0,
        domainMargin: [10, 20],
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
          filled: '专注 {count} 分钟',
        },
        // 每个小方块表示的内容
        // itemName: ['分', '分钟'],
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
.Calendar {
  margin-top: 36px;
  .cal-heatmap-container {
    .domain-background {
      fill: rgba(255, 255, 255, 0.12);
    }
    .graph-label {
      font-size: 14px;
      fill: var(--color-foreground-darker);
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
    }
    .graph-rect {
      fill: var(--color-background-light);
    }
    .subdomain-text {
      fill: var(--color-foreground-darker);
      font-size: 10px;
    }
    .graph-subdomain-group rect:hover {
      stroke: var(--color-background-lightest);
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
.Calendar-view {
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--color-background-light);
  padding-bottom: 10px;

  .Calendar-view-item {
    flex: 1;
    text-align: center;
    padding: 8px 10px;
    position: relative;
    cursor: pointer;
    font-size: 12px;

    &::after {
      background-color: var(--color-accent);
      content: '';
      margin: 0 auto;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      transition: $transitionSnappy;
      width: 0;
      height: 2px;
    }
    &.is-active::after {
      width: 33%;
    }
  }
}
</style>
