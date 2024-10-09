<template>
  <div class="flex justify-around items-center mt-3">
    <span v-if="isHomeRoute">{{ currentTime }}</span>
    <router-link
      v-else
      to="/products"
      @click="backToHome"
      class="hover:underline text-lg"
      >Back</router-link
    >
    <img
      @click="backToHome"
      src="https://kdmv.io/cdn/shop/files/KDMV_LOGO_OG_BLACK.png?v=1725215302&width=150"
      alt="KDMV-LOGO"
      class="cursor-pointer"
    />
    <span @click="toggleCart" class="cursor-pointer"
      >CART ({{ store.count }})</span
    >
    <transition name="slide">
      <itemChangeSideBar v-if="isCartOpen" @closeCart="closeCart" />
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from "../composables/counter-item.js";
import itemChangeSideBar from "../components/item-change-side-bar.vue";

const router = useRouter();
const route = useRoute();
const store = useCounterStore();

const isHomeRoute = computed(() => {
  return route.path === "/";
});

const backToHome = () => {
  router.push("/");
};

const currentTime = ref(
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })
);

setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}, 1000);

const isCartOpen = ref(false);

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  if (isCartOpen.value) {
    document.body.classList.add("overflow-hidden");
  }
};

const closeCart = () => {
  isCartOpen.value = false;
  document.body.classList.remove("overflow-hidden");
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
