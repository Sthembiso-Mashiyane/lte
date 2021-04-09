<template>
  <section class="project-2-area pt-120 pb-120  mt-3">
    <div class="project-full">
      <div class="container-fluid">
        <div class="row">
          <div class=" col-lg-4 col-xl-2">
            <div class="project-content">
              <h3 class="title">
                Explore <br />
                our recent <br />
                projects
              </h3>
              <p>
                There are many of lorem ipsum <br />
                available but the have in some form, <br />
                by injected humour.
              </p>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
          <div class=" col-lg-8 col-xl-10">
            <div class="row project-2-active">
              <swiper :options="swiperOptions">
                <swiper-slide>
                  <nuxt-link
                    :to="{
                      name: 'projects-project',
                      params: { project: 'acsa' }
                    }"
                  >
                    <div class="project-item">
                      <img
                        src="../assets/projects/ACSA/1.jpg"
                        class="img"
                        alt=""
                      />
                      <a href="">ACSA</a>
                    </div>
                  </nuxt-link>
                </swiper-slide>
                <swiper-slide>
                   <nuxt-link
                    :to="{
                      name: 'projects-project',
                      params: { project: 'cogta' }
                    }"
                  >
                  <div class="project-item">
                    <img
                      src="../assets/projects/COGTA/1.jpg"
                      class="img"
                      alt=""
                    />
                    <a href="">COGTA</a>
                  </div>
                   </nuxt-link>
                </swiper-slide>
                <swiper-slide>
                  <nuxt-link
                    :to="{
                      name: 'projects-project',
                      params: { project: 'emm-brt' }
                    }"
                  >
                  <div class="project-item">
                    <img
                      src="../assets/projects/EMM_BRT/1.jpg"
                      class="img"
                      alt=""
                    />
                    <a href="">EMM BRT</a>
                  </div>
                  </nuxt-link>
                </swiper-slide>
                <swiper-slide>
                  <nuxt-link
                    :to="{
                      name: 'projects-project',
                      params: { project: 'lenasia-hospital' }
                    }"
                  >
                  <div class="project-item">
                    <img
                      src="../assets/projects/LENASIA/1.jpg"
                      class="img"
                      alt=""
                    />
                    <a href="">LENASIA</a>
                  </div>
                  </nuxt-link>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="shape animated wow fadeInLeft"
      data-wow-duration="1500ms"
      data-wow-delay="0ms"
    >
      <img src="/assets/images/shape/shape-9.png" alt="shape" />
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProjectTwoArea",
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
        slidesPerView: 3,
        loop: true,
        speed: 2500,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff !important;
}
.project-item > button {
  min-height: 350px !important;
}
.img {
  height: 303px;
}
</style>
