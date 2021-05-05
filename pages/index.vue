<template>
  <div>
    <NavTwo />
    <PageHeader title="" :imgUrl="imgUrl" :isHome="true" class="fh" />
    <HomeCopy />
        <ServicesArea />
    <VideoATF />
    <FunFatcTwoArea />
    <RelationshipArea />
    <ProjectTwoArea />
<!--     <BetterFutureArea />-->
<!--     <BrandArea />-->
    <!-- <BlogTwoArea /> -->
    <GMap />
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../components/NavTwo";
import SliderTwo from "../components/SliderTwo";
import ProjectContactArea from "../components/ProjectContactArea";
import SolutionTwoArea from "../components/SolutionTwoArea";
import ServicesArea from "../components/ServicesArea";
import FunFatcTwoArea from "../components/FunFatcTwoArea";
import RelationshipArea from "../components/RelationshipArea";
import LeadershipPage from "../components/LeadershipPage";
import BetterFutureArea from "../components/BetterFutureArea";
import ProjectTwoArea from "../components/ProjectTwoArea";
import BrandArea from "../components/BrandArea";
import BlogTwoArea from "../components/BlogTwoArea";
import GMap from "../components/GMap";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import HomeCopy from "../components/HomeCopy";
import imgUrl from "~/assets/home/home-ATF.png";
import VideoATF from "../components/Video";
export default {
  components: {
    Footer,
    GMap,
    BlogTwoArea,
    BrandArea,
    ProjectTwoArea,
    BetterFutureArea,
    LeadershipPage,
    RelationshipArea,
    FunFatcTwoArea,
    ServicesArea,
    SolutionTwoArea,
    ProjectContactArea,
    NavTwo,
    SliderTwo,
    PageHeader,
    HomeCopy,
    VideoATF
  },
  head() {
    return {
      title: "LTE Holdings | Home"
    };
  },
  data() {
    return {
      imgUrl
    };
  },
  watch: {
    "$route.params.csi": function() {
      console.log('scrolling');
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style scoped>
.w-100 {
}
</style>
