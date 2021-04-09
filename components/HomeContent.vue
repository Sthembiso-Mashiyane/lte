<template>
  <div class="container">
    <div class="pt-5">
      <div class="position-relative">
        <img
          src="../assets/home/content-image-1.png"
          class="img-move img-move-1 img-fluid"
          alt="LTE Image 1"
        />
        <div
          class="col-md-6 p-5 card text-center yellow-card img-move img-move-2  img-fluid "
        >
          <div class="text-center my-auto">
            <div class=" card-block d-flex">
              <div
                class="card-body align-items-center d-flex justify-content-center"
              >
                With the proficient planning and cost-effective completion of
                the projects, LTE Holdings inspires the improvement in the
                conditions and quality of life in the African population.
              </div>
            </div>
          </div>
        </div>
        <img
          src="../assets/home/content-image-1.png"
          class="img-fluid invisible d-none d-md-block"
        />
      </div>

      <div class="row py-md-5">
        <div class="col-md-6 p-5 card text-center border-0 order-2 order-md-1">
          <div class="text-center my-auto">
            <div class=" card-block d-flex">
              <div class="card-body text-left">
                <div class="row ">
                  <h2 class="h4 font-weight-bold">
                    CREATING SUSTAINABLE VALUE THROUGH SUCCESSFUL ENGINEERED
                    STRUCTURAL MODIFICATIONS
                  </h2>
                </div>
                <div class="row pt-5">
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
        <div class="col-md-6 p-0 order-1 order-md-2">
          <img
            src="../assets/home/content-image-2.png"
            class="img-fluid"
            alt="LTE Image 2"
          />
        </div>
      </div>

      <div class="position-relative">
        <img
          src="../assets/home/content-image-3.png"
          class="img-move img-move-1 img-fluid"
          alt="LTE Image 1"
        />
        <div
          class="col-md-6 p-md-5 card text-center yellow-card img-move img-move-2 img-fluid"
        >
          <div class="text-center my-auto">
            <div class=" card-block d-flex">
              <div
                class="card-body align-items-center d-flex justify-content-center"
              >
                <div class="text-center my-auto">
                  <div class=" card-block d-flex">
                    <div class="card-body text-left">
                      <div class="row ">
                        <h2 class="h2 font-weight-bold">
                          EFFECTING QUALITY PROCESSES TO IMPROVE BUSINESSES
                        </h2>
                      </div>
                      <div class="row pt-5">
                        <p>
                          By respecting a value chain, a collective decision,
                          people and time, LTE Holdings approaches all projects
                          with attention to detail to ensure successful results
                          for all stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../assets/home/content-image-3.jpg"
          class="img-fluid invisible d-none d-md-block"
        />
      </div>

      <div class="row p-0">
        <div class="col-md-6 p-5 card text-center border-0 order-2 order-md-1">
          <div class="text-center my-auto">
            <div class=" card-block d-flex">
              <div class="card-body text-left">
                <div class="row ">
                  <h2 class="h4 font-weight-bold">
                    OFFERING AWARD WINNING EXPERTISE
                  </h2>
                </div>
                <div class="row pt-5">
                  <p>
                    LTE Holdings is proud to be a 100% black-owned consultancy
                    and advisory services company that boasts award winning
                    personnel in the expertise we offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0 order-1 order-md-2">
          <img
            src="../assets/home/content-image-4.png"
            class="img-fluid"
            alt="LTE Image 4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
};
</script>

<style scoped>
/* Overlap the images on tablets and up */
@media (min-width: 769px) {
  .img-move {
    position: absolute;
    width: 55%;
  }

  .img-move-1 {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .img-move-2 {
    right: 0;
    bottom: 25%;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
}

* {
  font-size: 20px;
  font-weight: 500;
}
.yellow-card {
  background-color: #ffac18;
}
</style>
