<template>
  <div class="Container">
    <div class="Setting-wrapper">
      <p class="Setting-title">开启背景图</p>
      <div
        class="Checkbox"
        @click="selectUseBackground"
        :class="useBackground ? 'is-active' : 'is-inactive'"
      ></div>
    </div>
    <div class="Image-list">
      <div 
        class="Image-item"
        :class="{'Image-item--active': imgUrl === usedImage}" 
        v-for="(imgUrl, i) in userImage.images" 
        :key="i"
        @click="selectImage(imgUrl)">
        <img :src="imgUrl">
      </div>
    </div>
  </div>
</template>

<script>
import userImage from "@/utils/UserImage";

export default {
  name: "DrawerImage",
  data() {
    return {
      userImage,
    };
  },
  computed: {
    useBackground() {
      return this.$store.getters.useBackground;
    },
    usedImage() {
      return this.$store.getters.usedImage;
    },
  },
  methods: {
    selectUseBackground() {
      this.$store.dispatch("setUseBackground", !this.useBackground);
    },

    selectImage(url) {
      this.$store.dispatch("setUsedImage", url);
      this.userImage.apply(url)
    },
  },
};
</script>

<style lang="scss" scoped>
.Checkbox {
  background-color: var(--color-background);
  border: 2px solid var(--color-background-lightest);
  border-radius: 100%;
  display: inline-block;
  transition: $transitionDefault;
  width: 16px;
  height: 16px;
  &:hover {
    border-color: var(--color-accent);
  }
  &.is-active {
    background-color: var(--color-accent);
    border-color: var(--color-background);
    &:hover {
      // background-color: var(--color-background);
      border-color: var(--color-accent);
    }
  }
}
.Setting-wrapper {
  background-color: var(--color-background);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  padding: 12px;
}

.Setting-title {
  color: var(--color-foreground-darker);
  font-size: 14px;
  letter-spacing: 0.05em;
}

.Image-list {
  display: flex;
  justify-content: space-between;
  .Image-item {
    cursor: pointer;
    flex: 1;
    border: 1px solid var(--color-background-lightest);
    margin: 0 10px 10px 0;
    border-radius: 8px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius:  8px;
    }
  }

  .Image-item--active {
    border: 1px solid var(--color-accent);
  }
}
</style>
