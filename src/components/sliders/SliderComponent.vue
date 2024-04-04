<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper my-5">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="slider-content">
        <img :src="item.pathImg.src" alt="" />
        <p>{{ item.pathImg.src }}</p>
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
// import images for slider
import img1 from "@/assets/imgs/Foto_1.png";
import img2 from "@/assets/imgs/Foto_2.png";
import img3 from "@/assets/imgs/Foto_3.png";
import img4 from "@/assets/imgs/Foto_4.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    arrayItems: {
      type: Array,
      value: [],
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      items: [
        {
          pathImg: img1,
        },
        {
          pathImg: img2,
        },
        {
          pathImg: img3,
        },
        {
          pathImg: img4,
        },
      ],
    };
  },
};
</script>
