<template>
  <div>
    <NavTwo />
    <PageHeader title="Projects" :imgUrl="imgUrl" />
    <ProjectsPage v-on:onProjectChanged="onProjectChanged($event)" />
    <Footer />
  </div>
</template>

<script>

  import NavTwo from "../../components/NavTwo";
  import Footer from "../../components/Footer";
  import PageHeader from "../../components/PageHeader";
  import ProjectsPage from "../../components/ProjectsPage";
  import imgUrl from '~/assets/projectsATF.png'
  export default {
    components: {
      ProjectsPage,
      PageHeader,
      Footer,
      NavTwo
    },
    head(){
      return {
        title: "LTE Holdings | Projects",
      }
    },
    data() {
      return {imgUrl}
    },
    methods: {
      onProjectChanged(e) {
        console.log(e);
      }
    }
  }
</script>
