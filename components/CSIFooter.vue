<template>
  <div class="container-fluid my-5 p-md-5 pt-3">
    <div class="row text-center">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 btn-img"
      >
      <nuxt-link @click="scrollTo" :to="{name: 'csi-csi', params: {csi: 'nyakalong-home'}}">
        <div class="card mb-2 text-white">
          <img
            src="../assets/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100 pt-5">
            <h5
              class="card-title card-title font-weight-bold h3 text-center white"
            >
              NYAKALLONG HOME
            </h5>
          </div>
        </div>
      </nuxt-link>
      </div>
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 btn-img"
      >
      <nuxt-link @click="scrollTo" :to="{name: 'csi-csi', params: {csi: 'bbq-awards'}}">
        <div class="card mb-2 text-white">
          <img
            src="../assets/csi/BBQ/BBQ_2020.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100 pt-5">
            <h5
              class="card-title card-title font-weight-bold h3 text-center white"
            >
              BBQ AWARDS
            </h5>
          </div>
        </div>
        </nuxt-link>
      </div>

      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 btn-img"
      >
      <nuxt-link @click="scrollTo" :to="{name: 'csi-csi', params: {csi: 'miss-south-africa'}}">
        <div class="card mb-2 text-white">
          <img
            src="../assets/csi/MRS SOUTH AFRICA/IMG-20190618-WA0015.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100 pt-5">
            <h5
              class="card-title card-title font-weight-bold h3 text-center white"
            >
              MISS SOUTH AFRICA
            </h5>
          </div>
        </div>
        </nuxt-link>
      </div>
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3 btn-img"
      >
      <nuxt-link @click="scrollTo" :to="{name: 'csi-csi', params: {csi: 'lion-park-primary'}}">
        <div class="card mb-2 text-white">
          <img
            src="../assets/csi/LION PARK PRIMARY/20190718_132555.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100 pt-5">
            <h5
              class="card-title card-title font-weight-bold h3 text-center white"
            >
              LION PARK PRIMARY
            </h5>
          </div>
        </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSIFooter",
  mounted() {
    this.selectedCSI = 'nyakalong - home';
  },
  methods: {
    onImageClick(t) {
      this.$emit("onCSIChanged", t);
    },
    scrollTo() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
.col-12 {
  border: 2px solid black;
}
.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.btn-img:hover {
  cursor: pointer;
}
</style>
