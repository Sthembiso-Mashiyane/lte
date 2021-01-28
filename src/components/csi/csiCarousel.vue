<template>
  <div class="AboutContent z">
    <div class="py-5 px-md-3">
      <div class="row">
        <div class="col-md-8 px-5 offset-md-2">
          <carousel  class="z-index-5 " perPage=1 v-model="carousel">
<!--            <slide v-for="item in imageURLS" :key="item" class="">-->
<!--&lt;!&ndash;              <div class="p-2 p-md-5  shadow-lg m-md-5 h-100 card card-grey text-center">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="card-body">&ndash;&gt;-->
<!--&lt;!&ndash;                  <h5 class="card-title h3 font-weight-bold">PHILOSOPHY</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion&ndash;&gt;-->
<!--&lt;!&ndash;                    for&ndash;&gt;-->
<!--&lt;!&ndash;                    excellence. Through each of our companies, we set out to define industry practices and create market&ndash;&gt;-->
<!--&lt;!&ndash;                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical&ndash;&gt;-->
<!--&lt;!&ndash;                    business practices and the single minded pursuit of delivering the extraordinary.</p>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <img v-bind:src=item >-->
<!--            </slide>-->
            <slide class="">
              <!--              <div class="p-2 p-md-5  shadow-lg m-md-5 h-100 card card-grey text-center">-->
              <!--                <div class="card-body">-->
              <!--                  <h5 class="card-title h3 font-weight-bold">PHILOSOPHY</h5>-->
              <!--                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion-->
              <!--                    for-->
              <!--                    excellence. Through each of our companies, we set out to define industry practices and create market-->
              <!--                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical-->
              <!--                    business practices and the single minded pursuit of delivering the extraordinary.</p>-->
              <!--                </div>-->
              <!--              </div>-->
              <img src="../../assets/images/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg" >
            </slide>
            <slide class="">
              <!--              <div class="p-2 p-md-5  shadow-lg m-md-5 h-100 card card-grey text-center">-->
              <!--                <div class="card-body">-->
              <!--                  <h5 class="card-title h3 font-weight-bold">PHILOSOPHY</h5>-->
              <!--                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion-->
              <!--                    for-->
              <!--                    excellence. Through each of our companies, we set out to define industry practices and create market-->
              <!--                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical-->
              <!--                    business practices and the single minded pursuit of delivering the extraordinary.</p>-->
              <!--                </div>-->
              <!--              </div>-->
              <img src="../../assets/images/csi/NYAKALLONG_HOME/IMG-20190618-WA0016.jpg" >
            </slide>
            <slide v-for="item in imageURLS" :key="item" class="">
              <!--              <div class="p-2 p-md-5  shadow-lg m-md-5 h-100 card card-grey text-center">-->
              <!--                <div class="card-body">-->
              <!--                  <h5 class="card-title h3 font-weight-bold">PHILOSOPHY</h5>-->
              <!--                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion-->
              <!--                    for-->
              <!--                    excellence. Through each of our companies, we set out to define industry practices and create market-->
              <!--                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical-->
              <!--                    business practices and the single minded pursuit of delivering the extraordinary.</p>-->
              <!--                </div>-->
              <!--              </div>-->
              <img v-bind:src=item >
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <div id="background"></div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import json from "@/info/projects.json";

export default {
  name: "csiCarousel",
  components: {Carousel, Slide},
  beforeMount() {
    this.id = this.$route.params.id
    this.info = json.filter(d => d.id === this.id);
    this.imagesURLS = this.info[0].images;
  },
  data() {
    return {
      id:"",
      imageURLS: [],
      info: {},
      carousel : 0
    }
  }

}
</script>

<style scoped>

</style>
