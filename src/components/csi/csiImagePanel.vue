<template>
  <div class="container-fluid p-md-5 pt-3">
    <div class="row">
      <div
        class="col-md-3"
        @click="onImageClick('nyakalong-home')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h3">
              NYAKALLONG HOME
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-3" @click="onImageClick('bbq-awards')">
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/BBQ/BBQ_2020.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h3">
              BBQ AWARDS
            </h5>
          </div>
        </div>
      </div>

      <div
        class="col-md-3"
        @click="onImageClick('miss-south-africa')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/MRS SOUTH AFRICA/IMG-20190618-WA0015.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h3">
              MISS SOUTH AFRICA
            </h5>
          </div>
        </div>
      </div>
      <div
        class="col-md-3"
        @click="onImageClick('lion-park-primary')"
      >
        <div class="card mb-2 text-white">
          <img
            src="../../assets/images/csi/LION PARK PRIMARY/20190718_132555.jpg"
            class="card-img"
            alt="WELBEDACHT PIPELINE"
          />
          <div class="card-img-overlay h-100">
            <h5 class="card-title card-title font-weight-bold h3">
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
    onImageClick(id) {
      console.log(
        '[Event from "Image Panel"] Tell parent to change selected child to: ',
        id
      );
      if (this.$router.history.current.params.id !== id) { // Avoid redundant attempt to navigate
        this.$router.push(`/csi/${id}`);
      }
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
