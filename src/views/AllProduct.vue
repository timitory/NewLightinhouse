<template>
    <div>
    <ContactBox/>
    <Navbar />
    <div class="container">
        <h1>ALL PRODUCT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad illum maxime hic consequatur alias asperiores iusto natus nulla, sit repellendus rerum magnam est reprehenderit voluptates nihil tenetur porro dignissimos.</p>
        <h1>Get Current Date And Time</h1>
    <p>Last Clicked Time: {{ lastClickedTime }}</p>
    </div>
</div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import ContactBox from '../components/ContactBox.vue';
export default {
  computed: {
    lastClickedTime() {
      return this.$store.getters.getLastClickedTime;
    }
  },

    components:{
        Navbar,
        ContactBox,
    },

  

}
</script>

<style scoped>
.container{
    text-align: center;
}

</style>