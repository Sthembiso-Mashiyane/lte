<template>
  <section class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="services-title text-center">
            <!-- <h3 class="title">Industri Services</h3> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="row py-5">
          <div class="col-lg-6">
            <img src="../assets/home/content-image0-4.png" class="img" alt="" />
          </div>
          <div class="col-lg-6">
            <div class="services-content d-flex h-100">
              <div
                class="justify-content-center align-self-center pt-md-0 pt-3"
              >
                <div
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <p>
                    With the proficient planning and cost-effective completion
                    of the projects, LTE Holdings inspires the improvement in
                    the conditions and quality of life in the African
                    population.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-6 order-md-2">
            <img src="../assets/home/content-image-1.png" class="img" alt="" />
          </div>
          <div class="col-lg-6 order-md-1">
            <div class="services-content d-flex h-100">
              <div
                class="justify-content-center align-self-center pt-md-0 pt-3"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <b>
                    IMPROVEMENT IN CONDITIONS AND QUALITY OF LIFE IN THE AFRICAN
                    POPULATION </b
                  ><br />
                  <p class="pt-3">
                    With the proficient planning and cost-effective completion
                    of the projects, LTE Holdings inspires the improvement in
                    the conditions and quality of life in the African
                    population.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-6">
            <img src="../assets/home/content-image-2.png" class="img" alt="" />
          </div>
          <div class="col-lg-6">
            <div class="services-content d-flex h-100 pt-md-0 pt-3">
              <div class="justify-content-center align-self-center">
                <div
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <b>
                    CREATING SUSTAINABLE VALUE THROUGH SUCCESSFUL ENGINEERED
                    STRUCTURAL MODIFICATIONS </b
                  ><br /><br />
                  <p>
                    From the initial to the life-cycle stages of a project – LTE
                    Holdings creates an imprint of sustainability for the future
                    generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-6 order-md-2">
            <img src="../assets/home/content-image-3.png" class="img" alt="" />
          </div>
          <div class="col-lg-6 order-md-1">
            <div class="services-content d-flex h-100">
              <div
                class="justify-content-center align-self-center pt-md-0 pt-3"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <b> EFFECTING QUALITY PROCESSES TO IMPROVE BUSINESSES </b
                  ><br />
                  <p class="pt-3">
                    By respecting a value chain, a collective decision, people
                    and time, LTE Holdings approaches all projects with
                    attention to detail to ensure successful results for all
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ServicesArea",
  mounted() {
    AOS.init({
      once: true
    });
  }
};
</script>

<style scoped>
.img {
  /* height: 70vh !important; */
}
</style>
