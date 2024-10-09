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
          <h1>Peace Hoodie (Brown)</h1>
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
  import { useCounterStore } from '../../composables/counter-item.js'

  const sizes = ['Small', 'Medium', 'Large', 'Xlarge', '2Xlarge'];
  const outOfStock = ['Small', 'Medium', 'Large', 'Xlarge', '2Xlarge']; 
  
  // Track selected size
  const selectedSize = ref(null);
  const cartStore = useCounterStore();
  

  const isSoldOut = computed(() => sizes.every(size => outOfStock.includes(size)))
  const mainImages = [
    "https://kdmv.io/cdn/shop/files/1-1_44cfb5c6-89cc-4f4d-ae82-9f30b019bdc9.jpg?v=1725205329&width=713",
    "https://kdmv.io/cdn/shop/files/2-1_0013_KDMV_-_LOOKBOOK7000.jpg?v=1725214638&width=1100",
    "https://kdmv.io/cdn/shop/files/1-2_0c40f240-92e9-4401-9dd3-f407fa0aa455.jpg?v=1725205329&width=713",
    "https://kdmv.io/cdn/shop/files/1-3.jpg?v=1725205329&width=713"
  ];
  

  const thumbnailImages = [
    "https://kdmv.io/cdn/shop/files/1-1_44cfb5c6-89cc-4f4d-ae82-9f30b019bdc9.jpg?v=1725205329&width=713",
    "https://kdmv.io/cdn/shop/files/2-1_0013_KDMV_-_LOOKBOOK7000.jpg?v=1725214638&width=1100",
    "https://kdmv.io/cdn/shop/files/1-2_0c40f240-92e9-4401-9dd3-f407fa0aa455.jpg?v=1725205329&width=713",
    "https://kdmv.io/cdn/shop/files/1-3.jpg?v=1725205329&width=713"
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

const addToCart = () => {
  if (selectedSize.value) {
    const product = {
      name: 'Peace Hoodie (Brown)',
      price: 42,
      size: selectedSize.value,
      count: 1,
    };
    cartStore.addItem(product);
  }
};
  </script>
  
  <style scoped>
  </style>
  