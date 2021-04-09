<template>
  <div>
    <NavTwo />
    <PageHeader title="Contact us" :imgUrl="imgUrl" />
    <ContactPage />
    <GMap />
    <ContactInfo></ContactInfo>
    <Footer />
  </div>
</template>

<script>

  import NavTwo from "../components/NavTwo";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage";
  import GMap from "../components/GMap";
import ContactInfo from '../components/ContactInfo.vue';
import Footer from '../components/Footer.vue';
import imgUrl from '~/assets/contactATF.png'
  export default {
    components: {
      GMap,
      ContactPage,
      PageHeader,
      FooterTwo,
      NavTwo,
        ContactInfo,
        Footer
    },
    head(){
      return {
        title: "LTE Holdings | Contact Us"
      }
    },
    data() {
      return {imgUrl}
    }
  }
</script>
