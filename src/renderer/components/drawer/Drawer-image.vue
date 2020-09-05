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

    <p class="Image-title">默认图片</p>
    <div class="Image-list Image-list--default">
      <div
        class="Image-item"
        :class="{ 'Image-item--active': imgUrl === usedImage }"
        v-for="(imgUrl, i) in userImage.images"
        :key="i"
        @click="selectImage(imgUrl)"
      >
        <img :src="imgUrl" />
      </div>
    </div>
    <p class="Image-title">自定义图片</p>
    <div class="Image-list Image-list--custom">
      <div
        class="Image-item"
        :class="{ 'Image-item--active': imgUrl === usedImage }"
        v-for="(imgUrl, i) in userImage.customImages"
        :key="i"
        @click="selectImage(imgUrl)"
      >
        <img :src="imgUrl" />
        <div
          v-if="imgUrl !== usedImage"
          class="Image-remove"
          @click="deleteImage($event, imgUrl)"
        >
          <svg
            class="Icon-svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11885"
            width="32"
            height="32"
          >
            <path
              d="M512 1012.86956522C235.36973913 1012.86956522 11.13043478 788.63026087 11.13043478 512 11.13043478 235.36973913 235.36973913 11.13043478 512 11.13043478c276.63026087 0 500.86956522 224.23930435 500.86956522 500.86956522 0 276.63026087-224.23930435 500.86956522-500.86956522 500.86956522z m226.25947826-727.12904348c-12.65530435-12.65530435-33.19095652-12.65530435-45.84626087 0l-179.47826087 179.47826087-179.51165217-179.51165218c-12.60521739-12.60521739-33.04069565-12.60521739-45.64591305 0-12.58852174 12.60521739-12.58852174 33.04069565 0 45.64591305l179.52834783 179.51165217L287.76069565 690.39304348c-12.65530435 12.65530435-12.65530435 33.17426087 0 45.84626087 12.672 12.65530435 33.19095652 12.65530435 45.84626087 0l179.52834783-179.54504348L690.64347826 734.20243478c12.60521739 12.58852174 33.024 12.58852174 45.62921739 0 12.60521739-12.60521739 12.60521739-33.04069565 0-45.64591304L558.78121739 511.06504348l179.47826087-179.47826087c12.65530435-12.65530435 12.65530435-33.19095652 0-45.84626087z"
              fill="#666666"
              p-id="11886"
            ></path>
          </svg>
        </div>
      </div>
      <div class="Image-item Image-uploader" @click="userImage.chooseImage()">
        <svg
          t="1599220251967"
          class="Icon-svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9298"
          width="32"
          height="32"
        >
          <path
            d="M281.088 483.84h107.52v233.984c0 30.208 20.992 54.784 46.592 54.784h154.112c25.6 0 46.592-24.576 46.592-54.784V483.84h107.52c20.48 0 31.744-28.672 17.408-46.592l-231.424-292.352c-9.216-11.776-25.6-11.776-34.816 0L263.68 437.248c-13.824 17.92-3.072 46.592 17.408 46.592z m539.136 328.192c15.872 0 34.304 16.896 34.304 37.888s-17.92 37.888-34.304 37.888H203.776c-15.872 0-34.304-16.896-34.304-37.888s17.92-37.888 34.304-37.888h616.448z"
            p-id="9299"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import userImage from '@/utils/UserImage'

export default {
  name: 'DrawerImage',
  data() {
    return {
      userImage,
    }
  },
  computed: {
    useBackground() {
      return this.$store.getters.useBackground
    },
    usedImage() {
      return this.$store.getters.usedImage
    },
  },
  methods: {
    selectUseBackground() {
      this.$store.dispatch('setUseBackground', !this.useBackground)
    },

    selectImage(url) {
      this.$store.dispatch('setUsedImage', url)
      userImage.apply(url)
    },

    deleteImage(e, url) {
      e.stopPropagation()
      userImage.removeImage(url)
    },
  },
}
</script>

<style lang="scss" scoped>
$imgWidth: 30%;

.Image-title {
  color: var(--color-foreground-darker);
  font-size: 14px;
  letter-spacing: 0.05em;
}
.Image-list {
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
}

.Image-item {
  float: left;
  cursor: pointer;
  border: 1px solid var(--color-background-lightest);
  border-radius: 4px;
  position: relative;
  width: $imgWidth;
  padding-top: ($imgWidth / 0.618);
  margin-right: 5%;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background-lightest);
    opacity: 0.3;
    transition: all 0.5s;
  }

  img {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

.Image-item--active {
  border: 1px solid var(--color-accent);
}

.Image-item:hover,
.Image-item--active {
  &::after {
    opacity: 0;
  }
}

.Image-list--default {
  .Image-item:nth-child(3n) {
    margin-right: 0;
  }
}

.Image-remove {
  position: absolute;
  right: -10px;
  top: -10px;
  z-index: 3;

  .Icon-svg {
    width: 20px;
    height: 20px;
    path {
      fill: #cc1111;
    }
  }
}

.Image-uploader {
  margin-right: 0;
  .Icon-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: -16px;
    width: 32px;
    height: 32px;
    path {
      fill: var(--color-accent);
    }
  }
}
</style>
