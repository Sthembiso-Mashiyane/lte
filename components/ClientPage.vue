<template>
  <section class="client-area client-2-area client-about">
    <div class="client-full">
      <div class="container-fluid">
        <div class="row client-active">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="client-item">
                <div class="user">
                  <h5 class="title text-center">PHILOSOPHY</h5>
                </div>
                <div class="text">
                  <p class="card-text mt-5">For us, success is more than mere statistics. It is steered by our passion for
                    excellence. Through each of our companies, we set out to define industry practices and create market
                    benchmarks. We believe in long term business relationships that are based on mutual goals, ethical
                    business practices and the single minded pursuit of delivering the extraordinary.
                    </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="client-item">
                <div class="user">
                  <h5 class="title text-center">VISION</h5>
                </div>
                <div class="text">
                  <p class="card-text mt-5">To be the Leaders and Preferred Suppliers for end-to-end Infrastructure
                    Development. This we achieve by being passionate about our work, relationships, our bottom line and
                    trust our in our abilities.
                    </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="client-item mx-n30">
                <div class="user">
                  <h5 class="title text-center">MISSION</h5>
                </div>
                <div class="text">
                  <p class="card-text mt-5">To develop environmentally friendly and sustainable infrastructure by deploying
                    the best resources appropriately. Together we are building a world-class conglomerate committed to
                    economic empowerment, wealth creation and helping build a better Africa..</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="client-shape animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
      <img src="/assets/images/shape/shape-16.png" alt="">
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "ClientPage",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 2,
          loop: true,
          speed: 3000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 2
            },
            768:{
              slidesPerView : 1
            },
            640:{
              slidesPerView : 1
            },
            320:{
              slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>
.card-text {
  height:250px;
  overflow:auto;
}
.card-text::-webkit-scrollbar {
  display: none;
}

.card-text {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.client-area {
      background-color: #ffac18
}
.user {
  padding-left: 0!important;
}
</style>
