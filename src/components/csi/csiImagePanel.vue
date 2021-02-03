<template>
  <div class="container-fluid p-md-5 pt-3">
    <div class="row">
      <div
        class="col-md-12  col-lg-6 c"
        @click="onImageClick('nyakalong-home')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h1">
              NYAKALLONG HOME
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 c" @click="onImageClick('bbq-awards')">
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/BBQ/BBQ_2020.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h1">
              BBQ AWARDS
            </h5>
          </div>
        </div>
      </div>

      <div
        class="col-md-6 col-lg-6 c"
        @click="onImageClick('miss-south-africa')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/MRS SOUTH AFRICA/IMG-20190618-WA0015.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h1">
              MISS SOUTH AFRICA
            </h5>
          </div>
        </div>
      </div>
          <div
        class="col-md-12  col-lg-6 c"
        @click="onImageClick('lion-park-primary')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/LION PARK PRIMARY/20190718_132555.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h1">
              LION PARK PRIMARY
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "csiImagePanel",
  data() {
    return {};
  },
  props: ["id"],
  methods: {
    onImageClick(name) {
      console.log(
        '[Event from "Image Panel"] Tell parent to change selected child to: ',
        name
      );
      this.$emit("onChangeSelectedCorousel", name);
    },
  },
};
</script>

<style scoped>
.c {
  cursor: pointer;
}
.card-img {
  max-height: 50vh;
}
</style>
