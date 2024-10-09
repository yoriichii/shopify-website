<template>
    <swiper
      :slidesPerView="1"
      :grabCursor="true"
      :navigation="true"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper w-[80%]"
      :breakpoints="{
      769: { 
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }"
    >
    <swiper-slide v-for="(item, index) in imageListSlides" :key="index">
      <router-link :to="item.linkTo">
        <img :src="item.image" class="w-[350px] mx-auto hover:ease-in duration-300"/>
      </router-link>
    </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  
defineProps({
    imageListSlides: {
    type: Array,
    required: true
    }
  });
  
  const modules = [Navigation, Autoplay];
  </script>
  
  <style scoped>
  </style>
  