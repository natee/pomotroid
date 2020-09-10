<template>
  <div class="Drawer-menu">
    <div
      class="Drawer-menu-wrapper"
      title="计时器"
      @click="setDrawerComponent('appDrawerTimer')"
      :class="{ 'is-active': currentDrawer === 'appDrawerTimer' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg"
            version="1.2"
            baseProfile="tiny"
            id="timer-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            width="18"
            xml:space="preserve"
          >
            <g>
              <path
                fill="var(--color-background-lightest)"
                d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10c5.5,0,10-4.5,10-10S15.5,0,10,0z M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8
                s8,3.6,8,8S14.4,18,10,18z"
              />
              <path
                fill="var(--color-background-lightest)"
                d="M10.5,5H9v6l5.3,3.1l0.8-1.2l-4.5-2.7V5z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div
      class="Drawer-menu-wrapper"
      title="主题"
      @click="setDrawerComponent('appDrawerTheme')"
      :class="{ 'is-active': currentDrawer === 'appDrawerTheme' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8513"
            width="32"
            height="32"
          >
            <path
              d="M346.1 67.9c-26 0-55.5 2-55.5 2l-23.9 5.8c-15.5 6-25.7 16.5-33.3 24.2l-162 158.3c-4.3 3.8-8.2 8-12.4 12.1-3.6 3.6-7 7.3-11.9 11.5-14.2 12.7-32 28.6-37.5 57.5-3.1 15.9 3.4 30.6 7 38.4 6.4 14.6 16.5 23.9 24.6 31.3l5.5 5.1 6.1 6.3c5.7 5.8 11.4 11.7 17.6 16.9 6.7 6.8 13.4 13.5 20.1 20.3l36.6 35.1 10.5 10.4c4.6 4.7 9.8 10.1 16.8 15.1 12.9 9 29.2 13.9 44.5 13.9 8.1 0 15.9-1.4 22.8-4.3 4.1-1.7 8-3.7 11.8-5.8v346.3c-0.1 13.8-0.3 28.2 4.6 41.2 6.1 16.1 19.3 28.7 29.3 35 16.1 10.5 37 11.4 55.3 11.4l341.5-0.1 30.6 0.3c23.5 0 50.1-1.3 70.1-16.5 12.5-9.5 22.3-25.6 25.6-41.8l0.4-4.7c0.1-30.9 0.3-62 0.3-92.9V521.9c9.8 5.8 21.9 10.4 36.6 10.4 4.6 0 9.2-0.4 14.4-1.4 26.7-5 44.2-24.6 56.9-39l96.4-94 2.1-2.3c5.8-7.4 21-26.6 17.2-54.5 0-2.3-0.1-4.6-0.3-6.8l-1.4-6.4c-6.1-16.9-16.5-27.3-25-35.7-1.8-1.8-3.7-3.7-5.3-5.4-6.4-7-13.4-13.5-20.3-19.9-5.8-5.4-11.7-11-17.9-17.5L792.8 100.9c-7.8-7.8-16.8-16.8-29.2-23.5-11-5.7-25.7-7.8-49.4-7.8-4.3 0-28.7-0.6-46.6-0.6-9 0-16.2 0.1-18.5 0.6-3.4 0.6-11.5 3-15.4 4.6L615.4 86c-7.5 5.5-12.7 12.5-16.6 18.1-2.3 3.1-4.6 6.3-6.3 7.5-18.3 14.5-31 18.9-62.6 25.2-5.7 1.1-10.8 1.8-14.2 1.8l-19.5-1.3c-16.4-3.1-29.7-6.1-41.5-11.1-10-4.1-20.9-11.8-25.5-17.6l-1.6-2c-5.6-7.4-12-15.6-21.1-22.6-6.1-4.7-20.6-12.7-28.3-14.2-7.1-1.5-19.2-1.9-32.1-1.9z"
              p-id="8514"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="Drawer-menu-wrapper"
      title="背景图"
      @click="setDrawerComponent('appDrawerImage')"
      :class="{ 'is-active': currentDrawer === 'appDrawerImage' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2516"
            width="32"
            height="32"
          >
            <path
              d="M0 64A64 64 0 0 1 64 0h896a64 64 0 0 1 64 64v896a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V64z m554.08 548.544c-44.224-111.104-111.968-264.256-149.056-263.84-58.176 0.576-196.768 375.2-196.768 375.2-11.008 28.512 4.96 51.52 35.328 51.552l317.12 1.024c3.488 0 6.752-0.256 9.824-0.832l256.416 0.864c30.464 0.096 42.912-21.248 27.968-47.616 0 0-131.168-241.984-183.968-241.152-27.04 0.416-75.776 63.424-116.896 124.768zM704.416 389.12a92.16 92.16 0 1 0 0-184.32 92.16 92.16 0 1 0 0 184.32z"
              p-id="2517"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="Drawer-menu-wrapper"
      title="时间历程"
      @click="setDrawerComponent('appDrawerHistory')"
      :class="{ 'is-active': currentDrawer === 'appDrawerHistory' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg Icon-svg--calendar"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            <path
              d="M403.2 512l-224 0c-19.2 0-32 12.8-32 32 0 19.2 12.8 32 32 32l224 0c19.2 0 32-12.8 32-32C435.2 524.8 419.2 512 403.2 512z"
              p-id="4042"
            ></path>
            <path
              d="M403.2 672l-224 0c-19.2 0-32 12.8-32 32 0 19.2 12.8 32 32 32l224 0c19.2 0 32-12.8 32-32C435.2 684.8 419.2 672 403.2 672z"
              p-id="4043"
            ></path>
            <path
              d="M819.2 736 800 736l0-64c0-19.2-12.8-32-32-32s-32 12.8-32 32l0 96c0 19.2 3.2 32 19.2 32l64 0c19.2 0 32-12.8 32-32C851.2 748.8 838.4 736 819.2 736z"
              p-id="4044"
            ></path>
            <path
              d="M512 864 512 864l-64 0L153.6 864c-32 0-57.6-12.8-57.6-41.6L96 384l704 0 0 32 0 6.4c0 19.2 12.8 32 32 32s32-12.8 32-32L864 416l0-89.6L864 243.2C864 204.8 835.2 160 796.8 160L704 160 704 60.8C704 44.8 691.2 32 672 32s-32 12.8-32 28.8L640 160 288 160 288 60.8C288 44.8 275.2 32 256 32S224 44.8 224 60.8L224 160 99.2 160C60.8 160 32 204.8 32 243.2l0 633.6C32 912 60.8 928 99.2 928L448 928l64 0 0 0c19.2 0 32-12.8 32-32C544 876.8 531.2 864 512 864zM96 294.4C96 262.4 121.6 224 153.6 224L224 224l0 51.2c0 16 12.8 28.8 32 28.8s32-12.8 32-28.8L288 224l352 0 0 51.2c0 16 12.8 28.8 32 28.8s32-12.8 32-28.8L704 224l38.4 0c32 0 57.6 38.4 57.6 70.4L800 320 96 320 96 294.4z"
              p-id="4045"
            ></path>
            <path
              d="M755.2 512c-131.2 0-240 108.8-240 240s108.8 240 240 240 240-108.8 240-240S889.6 512 755.2 512zM755.2 928c-96 0-176-80-176-176s80-176 176-176 176 80 176 176S854.4 928 755.2 928z"
              p-id="4046"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="Drawer-menu-wrapper"
      title="设置"
      @click="setDrawerComponent('appDrawerSettings')"
      :class="{ 'is-active': currentDrawer === 'appDrawerSettings' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.5 20"
            width="18"
          >
            <path
              d="M17.2,11c0-0.3,0.1-0.6,0.1-1s0-0.7-0.1-1l2.1-1.6c0.2-0.1,0.2-0.4,0.1-0.6l-2-3.5C17.3,3.1,17,3,16.8,3.1
              l-2.5,1c-0.5-0.4-1.1-0.7-1.7-1l-0.4-2.7C12.2,0.2,12,0,11.7,0h-4C7.5,0,7.3,0.2,7.2,0.4L6.9,3.1c-0.6,0.3-1.2,0.6-1.7,1l-2.5-1
              C2.4,3,2.2,3.1,2.1,3.3l-2,3.5C-0.1,6.9,0,7.2,0.2,7.4L2.3,9c0,0.3-0.1,0.6-0.1,1s0,0.7,0.1,1l-2.1,1.6C0,12.8-0.1,13,0.1,13.3
              l2,3.5c0.1,0.2,0.4,0.3,0.6,0.2l2.5-1c0.5,0.4,1.1,0.7,1.7,1l0.4,2.6c0,0.2,0.2,0.4,0.5,0.4h4c0.3,0,0.5-0.2,0.5-0.4l0.4-2.6
              c0.6-0.3,1.2-0.6,1.7-1l2.5,1c0.2,0.1,0.5,0,0.6-0.2l2-3.5c0.1-0.2,0.1-0.5-0.1-0.6L17.2,11z M9.7,13.5c-1.9,0-3.5-1.6-3.5-3.5
              s1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S11.7,13.5,9.7,13.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer-menu',

  computed: {
    currentDrawer() {
      return this.$store.getters.currentDrawer
    },
  },

  methods: {
    setDrawerComponent(component) {
      const payload = {
        key: 'currentDrawer',
        val: component,
      }
      this.$store.dispatch('setViewState', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.Drawer-menu {
  background-color: var(--color-background);
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
}

.Drawer-menu-wrapper {
  cursor: pointer;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
  transition: $transitionDefault;
  height: 100%;
  &:hover {
    background-color: var(--color-background-light);
  }
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

.Drawer-menu-button {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 45px;
  height: 100%;
  &.is-active {
    border-bottom: 4px solid var(--color-accent);
  }
}

.app-theme--image .Drawer-menu {
  background-color: transparent;
}
.Icon-svg--calendar {
  width: 18px;
  height: 18px;
}
</style>
