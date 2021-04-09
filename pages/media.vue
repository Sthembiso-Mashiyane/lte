<template>
  <div class="">
    <NavTwo />
    <PageHeader title="Media" :imgUrl="imgUrl" />
    <MediaPage />
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import MediaPage from "../components/MediaPage";
import imgUrl from "~/assets/mediaATF.png";
export default {
  components: {
    PageHeader,
    Footer,
    NavTwo,
    MediaPage
  },
  head() {
    return {
      title: "LTE Holdings | Media"
    };
  },
  data() {
    return { imgUrl };
  }
};
</script>

<style></style>
