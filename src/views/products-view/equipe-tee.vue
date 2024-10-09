<template>
    <main class="min-h-screen mx-auto max-w-[1100px]">
      <div class="flex justify-center gap-20 flex-col lg:flex-row">
        <div class="mt-5">
          <gallerySliderVue 
            :mainImages="mainImages" 
            :thumbnailImages="thumbnailImages" 
          />
        </div>
        <section class="mt-16 space-y-2 ml-10">
          <h1>Equipe Tee (Charcoal)</h1>
          <p class="text-gray-400">SIZE CHART</p>
          <div class="flex gap-3">
            <p>$30.00</p>
            <button v-if="isSoldOut" class="bg-black opacity-50 text-white text-sm px-5 rounded-md">Sold out</button>
          </div>

          <SelectShop
            :sizes="sizes"
            :outOfStock="outOfStock"
            @sizeSelected="selectedSize = $event"
          />
        </section>
      </div>
    </main>
    <allListSlider :imageListSlides="imageListSlides"/>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import gallerySliderVue from '../../components/gallery-slider.vue';
  import SelectShop from '../../components/select-shop.vue';
  import allListSlider from '../../components/all-list-slider.vue';
  import colShirt1 from '../../assets/images/home-collections/sdach-game-shirt-1.webp'
  import colShirt2 from '../../assets/images/home-collections/sdach-game-shirt-2.webp'
  import colShirt3 from '../../assets/images/home-collections/sdach-game-shirt-3.webp'
  import colShirt4 from '../../assets/images/home-collections/sdach-game-shirt-4.webp'
  import colShirt5 from '../../assets/images/home-collections/sdach-game-shirt-5.webp'
  import colShirt6 from '../../assets/images/home-collections/sdach-game-shirt-6.webp'
  import colShirt7 from '../../assets/images/home-collections/sdach-game-shirt-7.webp'
  import colShirt8 from '../../assets/images/home-collections/sdach-game-shirt-8.webp'

  const sizes = ['Small', 'Medium', 'Large', 'Xlarge', '2Xlarge'];
  const outOfStock = ['Small', 'Medium', 'Large', 'Xlarge', '2Xlarge']; 
  

  const selectedSize = ref(null);

  const isSoldOut = computed(() => sizes.every(size => outOfStock.includes(size)))

  const mainImages = [
  "https://kdmv.io/cdn/shop/files/6-1_0007_3-2.jpg?v=1725215872&width=713",
  "https://kdmv.io/cdn/shop/files/2-1_80564f55-d5b7-49e1-85d8-ddff82df3776.jpg?v=1725214966&width=713",
  "https://kdmv.io/cdn/shop/files/3-3.jpg?v=1725204148&width=713",
  "https://kdmv.io/cdn/shop/files/6-1_0008_3-1.jpg?v=1725215872&width=713"
];

const thumbnailImages = [
"https://kdmv.io/cdn/shop/files/6-1_0007_3-2.jpg?v=1725215872&width=713",
  "https://kdmv.io/cdn/shop/files/2-1_80564f55-d5b7-49e1-85d8-ddff82df3776.jpg?v=1725214966&width=713",
  "https://kdmv.io/cdn/shop/files/3-3.jpg?v=1725204148&width=713",
  "https://kdmv.io/cdn/shop/files/6-1_0008_3-1.jpg?v=1725215872&width=713"
];

  const imageListSlides = [
  { image: colShirt1, linkTo: '/products/peace-hoodie' },
  { image: colShirt2, linkTo: '/products/lequipe-hoodie' },
  { image: colShirt3, linkTo: '/products/jong-un-tee' },
  { image: colShirt4, linkTo: '/products/jong-un-tee-zip' },
  { image: colShirt5, linkTo: '/products/equipe-tee' },
  { image: colShirt6, linkTo: '/products/bart-moto-tee-white' },
  { image: colShirt7, linkTo: '/products/bart-moto-tee' },
  { image: colShirt8, linkTo: '/products/lequipe-jersey' },
];

  </script>
  
  <style scoped>
  </style>
  
  

