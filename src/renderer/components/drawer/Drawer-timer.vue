<template>
  <div class="Container Container-timer">
    <div class="Setting-block">
      <div class="Setting-head">
        <span class="Setting-title">专注</span>
        <span class="Setting-value">{{ localTimeWork + ":00" }}</span>
      </div>
      <div class="Slider-wrapper">
        <input
          type="range"
          min="10"
          :max="maxTime"
          step="5"
          class="Slider Slider--red"
          v-model.number="localTimeWork"
          @change="setTimeWork($event, 'work')"
        />
        <div
          class="Slider-bar Slider-bar--red"
          :style="{ width: calcPercentage(localTimeWork, maxTime, 10) + '%' }"
        ></div>
      </div>
    </div>

    <div class="Setting-block">
      <div class="Setting-head">
        <p class="Setting-title">小放松</p>
        <p class="Setting-value">{{ localTimeShortBreak + ":00" }}</p>
      </div>

      <div class="Slider-wrapper">
        <input
          type="range"
          min="5"
          :max="maxShortBreakTime"
          step="5"
          class="Slider Slider--green"
          v-model.number="localTimeShortBreak"
          @change="setTimeShortBreak($event, 'short-break')"
        />
        <div
          class="Slider-bar Slider-bar--green"
          :style="{ width: calcPercentage(localTimeShortBreak, maxShortBreakTime, 5) + '%' }"
        ></div>
      </div>
    </div>

    <div class="Setting-block">
      <div class="Setting-head">
        <p class="Setting-title">大放松</p>
        <p class="Setting-value">{{ localTimeLongBreak + ":00" }}</p>
      </div>

      <div class="Slider-wrapper">
        <input
          type="range"
          min="5"
          :max="maxLongBreakTime"
          step="5"
          class="Slider Slider--blue"
          v-model.number="localTimeLongBreak"
          @change="setTimeLongBreak($event, 'long-break')"
        />
        <div
          class="Slider-bar Slider-bar--blue"
          :style="{ width: calcPercentage(localTimeLongBreak, maxLongBreakTime, 5) + '%' }"
        ></div>
      </div>
    </div>

    <div class="Setting-block">
      <div class="Setting-head">
        <p class="Setting-title">轮次</p>
        <p class="Setting-value">{{ localWorkRounds }}</p>
      </div>

      <div class="Slider-wrapper">
        <input
          type="range"
          min="1"
          :max="maxRounds"
          step="1"
          class="Slider"
          v-model.number="localWorkRounds"
          @change="setWorkRounds"
        />
        <div
          class="Slider-bar Slider-bar--blueGrey"
          :style="{
            width: calcRoundPercentage(localWorkRounds, maxRounds) + '%',
          }"
        ></div>
      </div>
    </div>

    <div class="Setting-block">
      <p class="TextButton" @click="resetDefaults">恢复默认设置</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/EventBus";

export default {
  name: "Drawer-timer",

  data() {
    return {
      localTimeLongBreak: 0,
      localTimeShortBreak: 0,
      localTimeWork: 0,
      localWorkRounds: 0,
      maxTime: 90,
      maxShortBreakTime: 20,
      maxLongBreakTime: 45,
      maxRounds: 12,
    };
  },

  computed: {
    // store getters
    currentRound() {
      return this.$store.getters.currentRound;
    },

    timeLongBreak() {
      return this.$store.getters.timeLongBreak;
    },

    timeShortBreak() {
      return this.$store.getters.timeShortBreak;
    },

    timeWork() {
      return this.$store.getters.timeWork;
    },

    workRounds() {
      return this.$store.getters.workRounds;
    },
  },

  methods: {
    calcPercentage(val, max, min = 0) {
      return ((val - min) / (max - min)) * 100;
    },

    // complex conditional to correctly position slider-bar for round slider
    calcRoundPercentage(val, max) {
      const percentage = (val / max) * 100;
      if (percentage > 25 && percentage < 34) {
        return percentage - 6;
      } else if (percentage > 33 && percentage < 66) {
        return percentage - 5.5;
      } else if (percentage > 50) {
        return percentage - 4;
      } else {
        return percentage - 7;
      }
    },

    checkToResetTimer(setting) {
      if (this.currentRound === setting) {
        EventBus.$emit("timer-init", {
          auto: false,
        });
        EventBus.$emit("call-timer-reset");
      }
    },

    initTimes() {
      this.localTimeLongBreak = this.timeLongBreak;
      this.localTimeShortBreak = this.timeShortBreak;
      this.localTimeWork = this.timeWork;
      this.localWorkRounds = this.workRounds;
    },

    resetDefaults() {
      this.$store.dispatch("resetDefaults");
      this.initTimes();
      EventBus.$emit("timer-init", {
        auto: false,
      });
      EventBus.$emit("call-timer-reset");
    },

    setTimeLongBreak(e, setting) {
      this.$store.dispatch("setTimeLongBreak", parseInt(e.target.value));
      this.checkToResetTimer(setting);
    },

    setTimeShortBreak(e, setting) {
      this.$store.dispatch("setTimeShortBreak", parseInt(e.target.value));
      this.checkToResetTimer(setting);
    },

    setTimeWork(e, setting) {
      this.$store.dispatch("setTimeWork", parseInt(e.target.value));
      this.checkToResetTimer(setting);
    },

    setWorkRounds(e, setting) {
      this.$store.dispatch("setWorkRounds", parseInt(e.target.value));
    },
  },

  mounted() {
    this.initTimes();
  },
};
</script>

<style lang="scss" scoped>
.Container-timer{
  .Setting-block {
    margin: 10px 0 25px;
    text-align: center;
    clear: both;
  }

  .Setting-head {
    overflow: hidden;
    margin-bottom: 8px;
  }

  .Setting-title {
    color: var(--color-foreground-darkest);
    float: left;
  }

  .Setting-value {
    background-color: var(--color-background);
    border-radius: 4px;
    font-family: "RobotoMono", monospace;
    font-size: 12px;
    padding: 2px 6px;
    float: right;
  }
}

.TextButton {
  color: var(--color-foreground-darker);
}
</style>
