<template>
  <div
    class="fixed inset-y-0 right-0 w-full max-w-md bg-[#f6f6f6] shadow-lg flex flex-col z-10"
  >
    <div class="p-4 flex justify-between items-center border-b">
      <div class="w-24 mx-auto">
        <img
          src="https://kdmv.io/cdn/shop/files/KDMV_LOGO_OG_BLACK.png?v=1725215302&width=150"
          alt="kdmv logo"
          class="w-full"
        />
      </div>
      <button @click="closeSidebar" class="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex-grow overflow-y-auto p-4">
      <div class="">
        <div v-if="store.count > 0">
          <h2 class="text-gray-600">Your card</h2>
          <div class="flex items-center mt-8 opacity-50">
            <p class="text-sm ml-1">PRODUCT</p>
            <p class="text-sm absolute right-4">TOTAL</p>
          </div>
          <hr class="border-[0.1rem] opacity-5 border-black relative top-5" />
          <section class="mt-16 flex gap-7">
            <div>
              <img
                src="https://kdmv.io/cdn/shop/files/6-1_0001_1-2.jpg?v=1725215914&width=300"
                class="h-[120px]"
              />
            </div>
            <div class="space-y-1">
              <div class="flex">
                <p>Jong Un Tee (Black)</p>
                <p class="absolute right-4">${{ store.price30 }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-[1rem] opacity-50">${{ store.price30 }}</p>
                <p class="text-[1rem] opacity-50">Size: Small</p>
              </div>
              <div class="flex flex-row">
                <div
                  class="border border-gray-500 py-1 px-5 rounded-md flex gap-10 items-center"
                >
                  <button @click="store.decrement" class="text-3xl">-</button>
                  <span class="text-xl">{{ store.count }}</span>
                  <button @click="store.increment" class="text-2xl">+</button>
                </div>
                <button @click="store.reset" class="ml-5">D</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="p-4 border-t" v-if="store.count === 0">
      <p class="text-lg font-medium mb-4 text-center">Your cart is empty</p>
      <button
        @click="backToHome"
        class="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded hover:bg-gray-300 transition duration-200"
      >
        Continue shopping
      </button>
    </div>
    <div class="p-4 border-t" v-if="store.count > 0">
      <div class="mb-5">
        <span class="text-lg font-medium mb-4 text-center ml-"
          >Estimated total</span
        >
        <span class="opacity-50 absolute right-4"
          >${{ store.price30 }} USD</span
        >
      </div>
      <button
        class="w-full bg-[#29A33D] text-white py-3 px-4 rounded hover:bg-[#297c37] transition duration-200"
      >
        Check Out
      </button>
    </div>
  </div>
  <div></div>
</template>

<script setup>
import { useCounterStore } from "../composables/counter-item.js";
import { defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const backToHome = () => {
  router.push("/");
};
const store = useCounterStore();

const emit = defineEmits(["closeCart"]);

const closeSidebar = () => {
  emit("closeCart");
};
</script>

<style scoped></style>
