<template>
    <swiper
      :style="{
        '--swiper-navigation-color': 'black',
        '--swiper-pagination-color': 'black',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2 w-[400px]"
    >
      <swiper-slide v-for="(image, index) in mainImages" :key="index">
        <img :src="image" />
      </swiper-slide>
    </swiper>
  
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper w-[350px] mt-5"
    >
    <swiper-slide v-for="(image, index) in thumbnailImages" :key="index">
      <img
        :src="image"
        :class="{ 'active-image': selectedImage === image }"
        @click="selectedImage = image"
        class=" rounded-md cursor-pointer"
      />
    </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

defineProps({
  mainImages: {
    type: Array,
    required: true
  },
  thumbnailImages: {
    type: Array,
    required: true
  }
});
  
  const thumbsSwiper = ref(null);

  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
  };
  
  const modules = [FreeMode, Navigation, Thumbs];
  const selectedImage = ref(null);
  </script>
  
  <style scoped>
.active-image {
  @apply border border-black rounded-md; 
}


  </style>