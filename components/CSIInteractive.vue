<template>
  <div class="row yellow-card text-center my-5">
    <div class="container-fluid">
      <div class="text-center my-5 mb-n5">
        <div class="col-12 mx-auto">
          <div class="">
            <div class="mt-5">
              <img :src="selectedCSI.img_url" class="fluid img" alt="" />
            </div>
          </div>
        </div>

        <div class="row my-n5">
          <div class="yellow-text w-100 text-center">
            <div class="col-xl-8 col-lg-10 col-12 mb-5 mx-auto">
              <div class="text-center mt-5">
                <div class="mt-5 pt-5">
                  <div class="mt-5 ">
                    <h2 class="title">
                      {{ selectedCSI.hTag }}
                    </h2>
                  </div>
                  <p class="m-4" v-for="par of selectedCSI.pTag" :key="par">
                    {{ par }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSIInteractive",
  scrollToTop: true,
  props: ["selectedCSI"],
  data() {
    return {
      selectedCSI: {
        id: "nyakalong-home",
        name: "Nyakalong Home",
        hTag: "SUPPORT FOR NYAKALONG HOME",
        pTag: [
          "Nyakalong Home in Sebokeng is a Non-Profit–Organisation that provides shelter for children living with physical and mental disability. Nyakalong Home currently houses 25 children ranging from ages 6 to 35. In June 2019 LTE Consulting made a donation to Nyakalong home to assist with groceries; basic supplies; blankets; heaters and has procured 2 hospital beds and 10 wheel chairs. In conjunction with Maponya Ambulances, LTE through Mr. Thulani Majola has undertaken to continue assisting this home into the future."
        ],
        img_url: ""
      }
    };
  },
  methods: {},
  beforeMount() {
    console.log(this.selectedCSI);
  },
  watch: {}
};
</script>

<style scoped>
.yellow-text {
  min-height: 450px;
  background-color: #ffac18;
}
.my-15 {
  margin-top: 30%;
}
.img {
  max-height: 60vh;
  object-fit: cover;
}
</style>
