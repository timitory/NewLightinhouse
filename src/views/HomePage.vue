<script>

import Carousel from '../components/Carousel.vue';
import ContactBox from '../components/ContactBox.vue'
import MobileNavbar from '../components/MobileNavbar.vue'
import Navbar from '../components/Navbar.vue'
import NavbarSearch from '../components/NavbarSearch.vue';
import PopularCategories from '../components/PopularCategories.vue';
import Shopbyspace from '../components/Shopbyspace.vue';
import Showroom from '../components/Showroom.vue';
import carsData from '../components/carsData.vue';
import {RouterView} from "vue-router";
import {RouterLink} from 'vue-router'





export default {
  components: {
    ContactBox,
    MobileNavbar,
    Navbar,
    NavbarSearch,
    Carousel,
    Showroom,
    Shopbyspace,
    PopularCategories,
    carsData,
    RouterView,
    RouterLink,
    
  }
}
</script>


<template>
  <div id="app">
  <ContactBox/>
  <MobileNavbar />
  <Navbar/>
  <NavbarSearch/>
  <Carousel />
  <Showroom/>
  <hr>
  <Shopbyspace/>
  <PopularCategories/>
  </div>
  </template>





<style scoped>
@media (max-width:600px) {
  hr{
    border: 1px solid orange;
    width: 420px;
}
}
@media (min-width: 610px) {
  hr{
    display: none;
  }
}

.links {
  padding: 10px
}

.links a {
  margin: 0 3rem
}

</style>
