<template>
  <div class="">
    <NavTwo />
    <PageHeader title="CSI" :imgUrl="imgUrl" />
    <CSIInfo />
    <CSIInteractive :selectedCSI="selectedCSI" />
    <CSIFooter v-on:onCSIChanged="onCSIChanged($event)"/>
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../../components/NavTwo";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import imgUrl from "~/assets/csi/galleryATF.png";
import CSIInfo from '../../components/CSIInfo.vue';
import CSIInteractive from '../../components/CSIInteractive.vue';
import CSIFooter from '../../components/CSIFooter.vue';
export default {
  components: {
    PageHeader,
    Footer,
    NavTwo,
    CSIInfo,
    CSIInteractive,
    CSIFooter,
  },
  head() {
    return {
      title: "LTE Holdings | CSI"
    };
  },
  data() {
    return { imgUrl, selectedCSI: "nyakalong-home"};
  },
  methods: {
    onCSIChanged(data) {
      this.selectedCSI = data;
    }
  }
};
</script>

<style></style>
