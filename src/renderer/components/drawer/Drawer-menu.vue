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
      title="关于"
      @click="setDrawerComponent('appDrawerAbout')"
      :class="{ 'is-active': currentDrawer === 'appDrawerAbout' }"
    >
      <div class="Drawer-menu-button">
        <div class="Icon-wrapper">
          <svg
            class="Icon-svg"
            viewBox="0 0 1027 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3301"
            width="32"
            height="32"
          >
            <path
              d="M983.838803 313.362669A511.938806 511.938806 0 1 0 1023.96018 512.035755a508.619448 508.619448 0 0 0-40.121377-198.673086zM561.712074 796.404116c0 21.929697-21.540943 39.662847-48.115749 39.662847s-48.115749-17.763054-48.115748-39.662847V409.494486c0-21.929697 21.540943-39.662847 48.115748-39.662847s48.115749 17.763054 48.115749 39.662847zM513.596325 305.607531a58.81146 58.81146 0 1 1 58.81146-58.81146 58.81146 58.81146 0 0 1-58.81146 58.81146z"
              p-id="3302"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer-menu",

  computed: {
    currentDrawer() {
      return this.$store.getters.currentDrawer;
    },
  },

  methods: {
    setDrawerComponent(component) {
      const payload = {
        key: "currentDrawer",
        val: component,
      };
      this.$store.dispatch("setViewState", payload);
    },
  },
};
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
    content: "";
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
</style>
