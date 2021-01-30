<template>
  <div class="AboutContent z">
    <div class="py-5 px-md-3">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 p-5 p-xl-100 m-xl-100">
          <carousel class="z-index-5 " perPage=1>
            <slide class="">
              <div class="p-2 p-md-5  shadow-lg m-md-5 h-100 card card-grey text-center">
                <div class="card-body">
                  <h5 class="card-title h3 font-weight-bold">PHILOSOPHY</h5>
                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion for
                    excellence. Through each of our companies, we set out to define industry practices and create market
                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical
                    business practices and the single minded pursuit of delivering the extraordinary.</p>
                </div>
              </div>
            </slide>
            <slide class="pb-md-5">
              <div class="p-2 p-md-5  shadow-lg  m-md-5 h-100 card card-grey text-center">
                <div class="card-body">
                  <h5 class="card-title h3 font-weight-bold">VISION</h5>
                  <p class="card-text mt-5">To be the Leaders and Preferred Suppliers for end-to-end Infrastructure
                    Development. This we achieve by being passionate about our work, relationships, our bottom line and
                    trust our in our abilities.</p>
                </div>
              </div>
            </slide>
            <slide class="pb-md-5">
              <div class="p-2 p-md-5 shadow-lg  m-md-5 h-100  card card-grey text-center">
                <div class="card-body">
                  <h5 class="card-title h3 font-weight-bold">MISSION</h5>
                  <p class="card-text mt-5">To develop environmentally friendly and sustainable infrastructure by deploying
                    the best resources appropriately. Together we are building a world-class conglomerate committed to
                    economic empowerment, wealth creation and helping build a better Africa..</p>
                </div>
              </div>
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

export default {
  name: "AboutValues",
  components: {Carousel, Slide}
}
</script>

<style scoped>

</style>
