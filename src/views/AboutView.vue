<template>
    <div class="container">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad illum maxime hic consequatur alias asperiores iusto natus nulla, sit repellendus rerum magnam est reprehenderit voluptates nihil tenetur porro dignissimos.</p>
        <h1>Get Current Date And Time</h1>
    <p> Todays Date is :-{{currentDate()}}</p>
    <p>The Time Says:-{{ currentTime() }}</p>
    </div>
</template>
<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    },
    currentTime() {
      const time = new Date();
      const timer = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
      return timer;
    }
  }
};
</script>

<style scoped>
.container{
    text-align: center;
}
</style>