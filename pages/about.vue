<template>
  <div>
    <NavTwo />
    <PageHeader title="About Us" :imgUrl="imgUrl" />
    <AboutPage />
    <LeadershipPage />
    <ClientPage />
    <!-- <VideoArea />
    <BrandArea />
    <FunFactArea />
    <ContactArea /> -->
    <Footer />
  </div>
</template>

<script>

  import NavTwo from "../components/NavTwo";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import AboutPage from "../components/AboutPage";
  import FunFactArea from "../components/FunFactArea";
  import ClientPage from "../components/ClientPage";
  import VideoArea from "../components/VideoArea";
  import BrandArea from "../components/BrandArea";
  import LeadershipPage from "../components/LeadershipPage";
  import ContactArea from "../components/ContactArea";
  import imgUrl from '~/assets/about-new.jpg'
  export default {
    components: {
      ContactArea,
      LeadershipPage,
      BrandArea,
      VideoArea,
      ClientPage,
      FunFactArea,
      AboutPage,
      PageHeader,
      Footer,
      NavTwo
    },
    head(){
      return {
        title: "LTE Holdings | About Us"
      }
    },
    data() {
      return {imgUrl}
    }
  }
</script>
