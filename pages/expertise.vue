<template>
  <div class="">
    <NavTwo />
    <PageHeader title="Expertise" :imgUrl="imgUrl" />
    <ExpertisePage />
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ExpertisePage from "../components/ExpertisePage";
import imgUrl from "~/assets/projectsATF.png";
export default {
  components: {
    PageHeader,
    Footer,
    NavTwo,
    ExpertisePage
  },
  head() {
    return {
      title: "LTE Holdings | Expertise"
    };
  },
  data() {
    return { imgUrl };
  }
};
</script>

<style></style>
