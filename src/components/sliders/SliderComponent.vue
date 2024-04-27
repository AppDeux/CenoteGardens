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
          :src="item.pathImg960.src"
          :srcset="`${item.pathImg256.src} 256w,
           ${item.pathImg460.src} 460w,
           ${item.pathImg960.src} 960w,
           ${item.pathImg1472.src} 1472w,
           ${item.pathImg1710.src} 1710w,
           ${item.pathImg1920.src} 1920w,
           ${item.pathImg2048.src} 2048w,
           `"
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
