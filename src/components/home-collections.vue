<template>
          <div class="group cursor-pointer"> 
              <div class="relative">
                  <img :src="image" alt="Bart Moto Tee" class="w-full ">
                  <div class="absolute top-2 left-2 bg-black text-white text-[0.6rem] font-bold px-2 py-1" v-if="sold">
                      {{ sold }}
                  </div>
              </div>
              <div class="p-4 bg-black text-gray-300">
                  <h2 class="font-medium text-[1.2rem] mb-1 group-hover:underline">{{ name }}</h2>
                  <p class="text-[1.1rem]">{{ price }}</p>
              </div>
          </div>
  </template>
  
  <script setup>
  defineProps(
    ['image', 'sold', 'name', 'price']
  )
  </script>

  
  <script setup>
  </script>

      