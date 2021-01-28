<template>
  <div class="">
    <head>
      <title>LTE || CSI</title>
    </head>
    <GalleryATF></GalleryATF>
    <csi-carousel :imagesURLS=info.images ></csi-carousel>
    <csi-image-panel></csi-image-panel>
    <csi-copy></csi-copy>
  </div>
</template>

<script>
import GalleryATF from "@/components/csi/csiATF";
import CsiImagePanel from "@/components/csi/csiImagePanel";
import CsiCopy from "@/components/csi/csiCopy";

import json from '../info/projects.json'
import CsiCarousel from "@/components/csi/csiCarousel";


export default {
  name: "csi",
  components: {CsiCarousel, CsiCopy, CsiImagePanel, GalleryATF},
  data() {
    return {
      id: "",
      info: {}
    }
  },
  methods: {},
  beforeCreate() {
    this.id = this.$route.params.id
    this.info = json.filter(d => d.id === this.id);
  }
}
</script>

<style scoped>

</style>
