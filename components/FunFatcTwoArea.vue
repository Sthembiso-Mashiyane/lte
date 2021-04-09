<template>
  <section class="fun-facts-2-area bg_cover" style="background-image: url(/assets/images/img-10.png);" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="fun-facts-item d-block d-md-flex justify-content-between align-items-center">
            <div class="item animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
              <i class="flaticon-cityscape"></i>
              <h3 class="title odometer"><countTo :startVal='0' :endVal='startCounter ? lteAge : 0' :duration='3000'></countTo></h3>
              <p>Years in the field</p>
            </div>
            <div class="item animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <i class="flaticon-design"></i>
              <p>Doing business</p>
              <p>THE LTE WAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "FunFatcTwoArea",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false,
        lteAge: this.getAge()
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
      getAge() {
        return new Date().getFullYear() - 2001;
      }
    }
  }
</script>


<style scoped>

</style>
