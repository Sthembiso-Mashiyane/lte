<template>
  <div class="">
    <NavTwo />
    <PageHeader :title="titlefy($route.params.project)" :imgUrl="imgUrl" />
    <ProjectSingle :project="$route.params.project" />
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavTwo from '../../components/NavTwo.vue';
import PageHeader from '../../components/PageHeader.vue';
import ProjectSingle from '../../components/ProjectSingle.vue';
import imgUrl from '~/assets/projectsATF.png'
export default {
  components: { NavTwo, Footer, ProjectSingle, PageHeader},
  name: 'project',
  mounted() {
    console.log(this.$route);
  },
  data() {
    return {
      imgUrl
    }
  },
  methods: {
    titlefy(t) {
      return t.replace(/-/g, ' ');
    }
  }
}
</script>

<style>

</style>
