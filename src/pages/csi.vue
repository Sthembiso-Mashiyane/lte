<template>
  <div class="">
    <GalleryATF></GalleryATF>
    <GalleryCarousel></GalleryCarousel>
  </div>
</template>

<script>
import GalleryATF from "@/components/csi/csiATF";
import GalleryCarousel from "@/components/csi/csiCarousel";

export default {
  name: "gallery",
  components: {GalleryCarousel, GalleryATF}
}
</script>

<style scoped>

</style>
