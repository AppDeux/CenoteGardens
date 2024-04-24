<template>
  <swiper
    :auto-height="true"
    :navigation="true"
    :modules="modules"
    :loop="true"
    class="mySwiper my-5"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="slider-content">
        <img
          :src="item.pathImg.src"
          :srcset="`${item.pathImgMobile.src} 400w, ${item.pathImg.src} 960w`"
          sizes="(min-width: 1280px) 960px, (min-width: 1040px) 832px, (min-width: 780px) 736px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
          loading="lazy"
          class="img"
          :alt="'img-carrousel-' + index"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imgPaths: {
      type: Array,
      default: Array,
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      items: this.imgPaths,
    };
  },
};
</script>
