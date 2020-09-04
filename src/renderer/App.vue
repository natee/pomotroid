<template>
  <div id="app" class="app" :class="{ 'app-theme--image': useBackground }">
    <app-titlebar />
    <transition name="slide-left" mode="out-in">
      <app-drawer v-if="drawerOpen" />
    </transition>
    <app-timer />
    <app-notification-win v-if="os === 'win32' && notifications" />
    <app-notification v-else-if="os !== 'win32' && notifications" />

    <img v-if="useBackground && usedImage" class="app-bg" :src="usedImage" />
  </div>
</template>

<script>
import appDrawer from '@/components/drawer/Drawer'
import appNotification from '@/components/notification/Notification'
import appNotificationWin from '@/components/notification/Notification-win'
import appTimer from '@/components/timer/Timer'
import appTitlebar from '@/components/Titlebar'
import themer from '@/utils/Themer'
import userImage from '@/utils/UserImage'

export default {
  name: 'pomotroid',

  components: {
    appDrawer,
    appNotification,
    appNotificationWin,
    appTimer,
    appTitlebar,
  },

  computed: {
    // store getters
    drawerOpen() {
      return this.$store.getters.drawerOpen
    },

    alwaysOnTop() {
      return this.$store.getters.alwaysOnTop
    },

    notifications() {
      return this.$store.getters.notifications
    },

    os() {
      return this.$store.getters.os
    },

    theme() {
      return this.$store.getters.theme
    },

    useBackground() {
      return this.$store.getters.useBackground
    },

    usedImage() {
      return this.$store.getters.usedImage
    },
  },

  created() {
    if (!this.theme || this.theme === 'pomotroid') return
    themer.apply(this.theme)

    if (this.useBackground) {
      userImage.apply(this.usedImage)
    }
  },
}
</script>

<style lang="scss">
.app {
  animation: fade-in 0.5s ease forwards;
  position: relative;
  overflow: hidden;
  height: 100vh;
}
// .app-theme--image::before {
//   content: "";
//   position: absolute;
//   z-index: -1;
//   top: 0px;
//   right: 0px;
//   bottom: 0px;
//   left: 0px;
//   // https://stackoverflow.com/questions/59687869/how-to-use-css-variable-in-background-image-in-webpack
//   background-image: var(--used-image);
//   background-size: cover;
//   background-position: center;
//   opacity: 0.5
// }
.app-bg {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.5;
  z-index: -1;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
