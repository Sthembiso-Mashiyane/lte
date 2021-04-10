<template>
  <section class="area">
    <div class="">
      <div class="row">
        <div class="card mx-auto my-n5">
          <div class="col-12">
            <div
              class="card-subtitle text-center mt-3 offset-md-2 p-3 col-md-8"
            >
              While LTE is committed to the growth South Africa’s proficiency
              and local talent, importing skills where necessary results in a
              richly diverse company.
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card-body content">
              <div class="row my-2">
                <div class="col-lg-4 text-center ">
                  <div class="item">
                    <div class="m-5">
                      <a :href="mp3" target="_blank" download="Radio interview">
                        <img
                          src="../assets/radioIcon.png"
                          class="fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h6 class="mt-3">RADIO INTERVIEW</h6>
                  </div>
                </div>
                <div class="col-lg-4 text-center ">
                  <div class="item">
                    <div class="m-5">
                      <a :href="article" target="_blank" download="News Letter">
                        <img
                          src="../assets/newsletter.png"
                          class="fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h6 class="mt-3">NEWSLETTER</h6>
                  </div>
                </div>
                <div class="col-lg-4 text-center ">
                  <div class="item">
                    <div class="m-5">
                      <img
                        src="../assets/tvInterview.png"
                        class="fluid"
                        alt=""
                      />
                    </div>
                    <h6 class="mt-3">TV INTERVIEW</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row yellow w-100 ml-0 mt-5">
        <div
          class="mt-5 col-md-6 offset-md-3 pb-5 text-decoration-none text-center  w-100"
        >
          <div class="h2 p-3 font-weight-bold text-dark">
            Archives
          </div>
          <hr />
          <!-- <div id="Accordion">
            <div class="card card-accord">
              <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                  2019
                </a>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                data-parent="#accordion"
              >
                <div class="card-body yellow">
                  <MediaFilesList></MediaFilesList>
                </div>
              </div>
            </div>
            <div class="card card-accord">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  2018
                </a>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body yellow">
                  <MediaFilesList></MediaFilesList>
                </div>
              </div>
            </div>
            <div class="card card-accord">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  2017
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body yellow">
                  <MediaFilesList></MediaFilesList>
                </div>
              </div>
            </div>
            <div class="card card-accord">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  2016
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body yellow">
                  <MediaFilesList></MediaFilesList>
                </div>
              </div>
            </div>
            <div class="card card-accord">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  2015
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body yellow">
                  <MediaFilesList></MediaFilesList>
                </div>
              </div>
            </div>
          </div> -->
          <div class="accordion yellow" role="tablist">
            <b-card no-body class="mb-1 yellow">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 class="yellow"
                  >2019</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                 <MediaFilesList></MediaFilesList>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 yellow">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 class="yellow"
                  >2018</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <MediaFilesList></MediaFilesList>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 yellow">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 class="yellow"
                  >2017</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <MediaFilesList></MediaFilesList>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 yellow">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-4 class="yellow"
                  >2016</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <MediaFilesList></MediaFilesList>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MediaFilesList from "../components/MediaFilesList";
import mp3 from "../assets/am_live_on_safm_25_apr_lte_tenders_claims_of_tender_irregularity_and_investigation_not_true_low.mp3";
import article from "../assets/docx/media-news/M120_ LTE_Covid-19_Testing.pdf";
export default {
  name: "MediaPage",
  components: { MediaFilesList },
  data() {
    return {
      mp3,
      article
    };
  }
};
</script>

<style scoped>
.yellow {
  background-color: #ffac18;
  color: #414141!important;
}
.card-accord {
  background-color: transparent !important;
  border: none !important;
}
</style>
