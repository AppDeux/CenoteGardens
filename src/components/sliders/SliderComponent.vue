<template>
  <swiper :autoHeight="true" :navigation="true" :modules="modules" class="mySwiper my-5">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="slider-content">
        <img
          :src="item.pathImg.src"
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
