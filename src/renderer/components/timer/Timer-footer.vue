<template>
  <section class="Container Footer">
    <div class="Round-wrapper">
      <p>
        {{ round + "/" + workRounds }}
        <span
          v-if="totalWorkRounds > 0"
          class="Total-rounds"
          title="Focus rounds completed"
          >({{ totalWorkRounds }})</span
        >
      </p>
    </div>
    <div class="Icon-group" style="position: absolute; right: 0;">
      <!-- reset -->
      <div class="Icon-wrapper" title="重置当前回合" @click="callForReset">
        <svg
          class="Icon-svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path
            d="M515.480669 0A520.098909 520.098909 0 0 0 173.511215 132.468364l-10.24-81.361455A45.986909 45.986909 0 0 0 107.50976 5.12a45.986909 45.986909 0 0 0-46.010182 56.203636l10.24 137.588364a127.767273 127.767273 0 0 0 127.348364 115.549091h10.216727l137.565091-10.216727a45.986909 45.986909 0 0 0 46.405818-54.225455 45.986909 45.986909 0 0 0-56.622545-46.010182l-100.608 5.12A422.935273 422.935273 0 0 1 511.151942 102.213818c225.349818 0.418909 407.668364 183.458909 407.226182 408.785455-0.418909 225.349818-183.458909 407.668364-408.785455 407.226182-224.721455-0.418909-406.807273-182.504727-407.226182-407.226182a48.337455 48.337455 0 0 0-51.106909-51.083637 48.337455 48.337455 0 0 0-51.083636 51.083637v0.023272c0 282.228364 228.770909 510.999273 510.976 510.999273 282.228364 0 510.999273-228.770909 510.999273-510.999273v-0.046545C1026.061033 232.727273 803.620305 3.956364 525.348305 0.046545 522.066851 0 518.785396 0 515.480669 0z"
            p-id="6460"
          ></path>
        </svg>
      </div>
      <!-- skip -->
      <div class="Icon-wrapper" title="跳过" @click="skipRound">
        <svg
          class="Icon-svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path
            d="M911.187048 0A43.389831 43.389831 0 0 0 867.797218 43.389831v387.731525a122.88 122.88 0 0 0-22.042034-16.314576L235.520607 71.68A111.425085 111.425085 0 0 0 69.424336 168.87322v686.25356a110.730847 110.730847 0 0 0 55.191865 96.325423 109.863051 109.863051 0 0 0 110.904406 0L845.755184 609.19322a122.88 122.88 0 0 0 22.042034-16.314576V980.610169a43.389831 43.389831 0 0 0 86.779661 0v-937.220338A43.389831 43.389831 0 0 0 911.187048 0z"
            p-id="3107"
          ></path>
        </svg>
      </div>
      <!-- mute -->
      <div
        class="Icon-wrapper"
        :title="volume > 0 ? 'Mute' : 'Unmute'"
        @click="toggleMute"
        @mouseenter="volumeSliderHidden = false"
      >
        <transition name="fade" mode="out-in">
          <svg
            class="Icon-svg"
            v-if="localVolume > 0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="32" height="32"
            viewBox="0 0 122.88 115.67"
          >
            <g>
              <path
                class="st0"
                d="M6.71,27.55h27.4c0.58,0,1.04,0.47,1.04,1.04v59.28c0,0.57-0.47,1.04-1.04,1.04H6.7c-3.68,0-6.7-3.01-6.7-6.7 V34.26C0,30.57,3.02,27.55,6.71,27.55L6.71,27.55z M105.96,32.65c-0.22-0.32-0.45-0.63-0.68-0.94l0.04-0.03l-0.11-0.17l-0.88-1.3 l1.26-0.93l5.23-2.51l1.37-1.02l0.96,1.42c3.56,5.22,6.26,11.07,7.89,17.3c1.58,6.01,2.17,12.39,1.62,18.94 c-0.43,5.05-1.52,9.89-3.17,14.44c-1.71,4.69-4.03,9.08-6.85,13.08l-1.22,1.73l-1.37-1.61l-4.68-3.31l-0.81-0.95l0.7-1.03 c2.27-3.36,4.13-7.04,5.51-10.96c1.33-3.78,2.21-7.81,2.57-12.02c0.48-5.65-0.03-11.15-1.37-16.33 C110.69,41.52,108.64,36.87,105.96,32.65L105.96,32.65z M41.89,26.46C57.86,17.7,73.83,8.94,89.79,0.18 c1.53-0.84,3.18,1.43,3.18,3.18v108.77c0,1.84-1.74,4.25-3.35,3.35L41.89,88.56c-0.3-0.17-0.64-0.29-0.64-0.64V27.1 C41.26,26.75,41.59,26.63,41.89,26.46L41.89,26.46z"
              ></path>
            </g>
          </svg>
          <svg
            class="Icon-svg"
            v-else
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="32" height="32"
            viewBox="0 0 122.88 120.97"
          >
            <g>
              <path
                class="st0"
                d="M7.02,28.81h28.65c0.6,0,1.09,0.49,1.09,1.09v44.09L17.76,93H7c-3.85,0-7-3.15-7-7V35.83 C0,31.97,3.16,28.81,7.02,28.81L7.02,28.81z M111.29,6.02l11.59,11.59l-93.17,93.17L18.12,99.19L111.29,6.02L111.29,6.02z M42.33,27.67c16.7-9.16,33.4-18.32,50.09-27.48c1.6-0.88,3.32,1.49,3.32,3.32v11.5L41.66,69.1V28.34 C41.66,27.97,42.01,27.85,42.33,27.67L42.33,27.67z M95.74,51.66v65.6c0,1.92-1.82,4.45-3.5,3.5L50.29,97.11L95.74,51.66 L95.74,51.66z"
              ></path>
            </g>
          </svg>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "@/utils/EventBus";

export default {
  name: "TimerFooter",
  data() {
    return {
      currentMousePosition: {
        x: null,
        y: null,
      },
      localVolume: 0,
      volumeSliderHidden: true,
    };
  },
  computed: {
    // store getters
    currentRound() {
      return this.$store.getters.currentRound;
    },

    round() {
      return this.$store.getters.round;
    },

    workRounds() {
      return this.$store.getters.workRounds;
    },

    totalWorkRounds() {
      return this.$store.getters.totalWorkRounds;
    },

    volume() {
      return this.$store.getters.volume;
    },
  },

  methods: {
    callForReset() {
      EventBus.$emit("call-timer-reset");
    },

    skipRound() {
      EventBus.$emit("timer-completed");
    },

    toggleMute() {
      // set volume to zero if not muted
      // otherwise set to 100 (default)
      if (this.localVolume === "0") {
        this.localVolume = "100";
        this.$store.dispatch("setVolume", 100);
      } else {
        this.localVolume = "0";
        this.$store.dispatch("setVolume", 0);
      }
    }
  },

  mounted() {
    this.localVolume = this.volume;

    // record last mouse position for volume slider timeout
    window.addEventListener("mousemove", (e) => {
      this.currentMousePosition.x = e.clientX;
      this.currentMousePosition.y = e.clientY;
    });
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.Icon-group {
  padding-right: 22px;
}

.Icon-wrapper {
  padding: 8px;
  background: rgba(254,254,254,0.2);
  border-radius: 50%;
  margin-left: 10px;

  &:hover{
    background: rgba(254,254,254,0.1);
    .Icon-svg path {
      fill: var(--color-accent);
    }
  }
}

.Round-wrapper {
  text-align: center;

  .Total-rounds {
    color: var(--color-foreground-darker);
    font-size: 0.7rem;
  }
}

</style>
