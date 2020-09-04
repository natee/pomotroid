<template>
  <div class="Drawer">
    <transition name="fade" mode="out-in">
      <component :is="currentDrawer" />
    </transition>
    <app-drawer-menu />
  </div>
</template>

<script>
import appDrawerMenu from '@/components/drawer/Drawer-menu'
import appDrawerAbout from '@/components/drawer/Drawer-about'
import appDrawerImage from '@/components/drawer/Drawer-image'
import appDrawerSettings from '@/components/drawer/Drawer-settings'
import appDrawerTheme from '@/components/drawer/Drawer-theme'
import appDrawerTimer from '@/components/drawer/Drawer-timer'

export default {
  name: 'Drawer',

  components: {
    appDrawerMenu,
    appDrawerAbout,
    appDrawerImage,
    appDrawerSettings,
    appDrawerTheme,
    appDrawerTimer
  },

  computed: {
    currentDrawer() {
      return this.$store.getters.currentDrawer
    },
    useBackground() {
      return this.$store.getters.useBackground
    }
  }
}
</script>

<style lang="scss" scoped>
.Drawer {
  background-color: var(--color-background-light);
  position: relative;
  width: 100%;
  height: calc(100% - 68px);
  z-index: 1;
  -webkit-app-region: no-drag;
}
.app-theme--image .Drawer{
  background-color: transparent;
}
</style>
