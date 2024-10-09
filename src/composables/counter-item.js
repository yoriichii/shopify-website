import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {

  
  const count = ref(0);
  const productPrice = 30;
  const items = ref([]);

  const price30 = computed(() =>{
    return count.value * productPrice;
  })
  const increment = () => {
    count.value++;

  };

  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };

  const reset = () => {
    count.value = 0;
  };

  const addItem = (product) => {
    items.value.push(product);
  };

  const removeItem = (index) => {
    items.value.splice(index, 1);
  };

  const totalPrice = computed(() => {
    return items.value.reduce((acc, item) => acc + item.price * item.count, 0);
  });
  return {
    count,
    price30,
    increment,
    decrement,
    reset,
    items,
    addItem,
    removeItem,
    totalPrice,
  };
});
