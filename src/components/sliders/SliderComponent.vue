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
        <picture>
          <!-- Imagen para Desk -->
          <source media="(min-width: 768px)" :srcset="item.pathImg.src" />
          <!-- Imagen para Mobile -->
          <img
            :src="item.pathImgMobile.src"
            loading="lazy"
            class="img"
            :alt="'img-carrousel-' + index"
          />
        </picture>
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
