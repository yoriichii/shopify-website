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
          <h1>L'equipe Hoodie (Ash Purple)</h1>
          <p class="text-gray-400">SIZE CHART</p>
          <div class="flex gap-3">
            <p>$42.00</p>
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
  const outOfStock = ['', 'Medium', 'Large', '', '2Xlarge'];
  
  const selectedSize = ref(null);
  
  const isSoldOut = computed(() => sizes.every(size => outOfStock.includes(size)))

  
  const mainImages = [
  "https://kdmv.io/cdn/shop/files/3-1_6ba4a104-4ce7-4766-bca4-7f5bb8dbc124.jpg?v=1725205241&width=713",
  "https://kdmv.io/cdn/shop/files/2-1_0014_SDACHGAME_0009_Layer_1.jpg?v=1725214638&width=713",
  "https://kdmv.io/cdn/shop/files/3-2_74f4631b-09ca-4559-84e2-43e04edd6676.jpg?v=1725205241&width=713",
  "https://kdmv.io/cdn/shop/files/3-9_c0201e2b-d569-420a-93b2-4eb648586335.jpg?v=1725205241&width=713"
];

const thumbnailImages = [
"https://kdmv.io/cdn/shop/files/3-1_6ba4a104-4ce7-4766-bca4-7f5bb8dbc124.jpg?v=1725205241&width=713",
  "https://kdmv.io/cdn/shop/files/2-1_0014_SDACHGAME_0009_Layer_1.jpg?v=1725214638&width=713",
  "https://kdmv.io/cdn/shop/files/3-2_74f4631b-09ca-4559-84e2-43e04edd6676.jpg?v=1725205241&width=713",
  "https://kdmv.io/cdn/shop/files/3-9_c0201e2b-d569-420a-93b2-4eb648586335.jpg?v=1725205241&width=713"
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
  
  


