<template>
  <div class="position-relative vh">
    <carousel class="atf" perPage=1 v-bind:pagination-enabled="false">
      <slide>
        <div class="">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="position-relative">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="position-relative">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="position-relative">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="position-relative">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="position-relative">
          <img src="../../assets/images/home/home-ATF.png" class="img-fluid" alt="">
          <div class="overlay"></div>
        </div>
      </slide>
    </carousel>
    <img class="logo_homepage img-fluid" src="../../assets/images/home/logo-transparent.png" alt="">
  </div>
</template>

<script>

import {Carousel, Slide} from 'vue-carousel';

export default {
  name: "HomeATF",
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {
  carousel {

  }
}
</style>
