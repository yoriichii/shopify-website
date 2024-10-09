<template>
    <main class="min-h-screen bg-black mt-5 p-8">
        <h1 class="text-4xl font-bold mb-10 relative bottom-5 text-gray-300">
            Products
        </h1>
  
        <div class="max-w-[1150px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="(product, index) in products" :key="index" >
        <router-link :to="product.linkTo">
         <HomeCollections 
         :image="product.image" 
         :sold="product.sold"
         :name="product.name"
         :price="product.price"/>
        </router-link>
        </div>
    </div>

    </main>
    </template>
    
    <script setup>
    import HomeCollections from '../components/home-collections.vue';
    import colShirt1 from '../assets/images/home-collections/sdach-game-shirt-1.webp'
    import colShirt2 from '../assets/images/home-collections/sdach-game-shirt-2.webp'
    import colShirt3 from '../assets/images/home-collections/sdach-game-shirt-3.webp'
    import colShirt4 from '../assets/images/home-collections/sdach-game-shirt-4.webp'
    import colShirt5 from '../assets/images/home-collections/sdach-game-shirt-5.webp'
    import colShirt6 from '../assets/images/home-collections/sdach-game-shirt-6.webp'
    import colShirt7 from '../assets/images/home-collections/sdach-game-shirt-7.webp'
    import colShirt8 from '../assets/images/home-collections/sdach-game-shirt-8.webp'

    const products = [
        {
            image: colShirt1,
            sold: "Sold out",
            name: 'Peace Hoodie (Brown)',
            price: '$42.00',
            linkTo: '/products/peace-hoodie' 
        },
        {
            image: colShirt2,
            sold: "",
            name: `L ' equipe Hoodie (Ash Purple)`,
            price: '$42.00',
            linkTo: '/products/lequipe-hoodie' 
        },
        {
            image: colShirt3,
            name: 'Jong Un Tee (Black)',
            price: '$30.00',
            linkTo: '/products/jong-un-tee'
        },
        {
            image: colShirt4,
            name: 'Jong Un Zip Up (Strone Blue)',
            price: '$42.00',
            linkTo: '/products/jong-un-tee-zip' 
        },
        {
            image: colShirt5,
            sold: "Sold out",
            name: 'Equipe Tee (Charcoal)',
            price: '$30.00',
            linkTo: '/products/equipe-tee' 
        },
        {
            image: colShirt6,
            name: 'Bart Moto Tee (Off-White)',
            price: '$30.00',
            linkTo: '/products/bart-moto-tee-white' 
        },
        {
            image: colShirt7,
            name: 'Bart Moto Tee',
            price: '$30.00',
            linkTo: '/products/bart-moto-tee' 
        },
        {
            image: colShirt8,
            sold: "Sold out",
            name: `KDMV L ' equipe Jersey`,
            price: '$38.00',
            linkTo: '/products/lequipe-jersey' 
        },
    ]

    </script>

<style scoped>

</style>
 
        