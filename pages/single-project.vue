<template>
  <div>
    <NavTwo />
    <PageHeader :title="selectedProject" :imgUrl="imgUrl" />
    <ProjectSingle />
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProjectSingle from "../components/ProjectSingle";
import imgUrl from "~/assets/projectsATF.png";

export default {
  components: {
    ProjectSingle,
    PageHeader,
    Footer,
    NavTwo
  },
  head() {
    return {
      title: "LTE Holdings | Project Details"
    };
  },
  data() {
    return { imgUrl, selectedProject: '' };
  },
  mounted() {
    if (this.$route.name == "single-project" && this.$route.params.id) {
      this.selectedProject = this.$route.params.id;
    }
  }
};
</script>
