<template>
  <div class="">
    <head>
      <title>LTE || CSI</title>
    </head>
    <GalleryATF></GalleryATF>
    <csi-blurb id="blurb"></csi-blurb>
    <csi-carousel id="carousel"></csi-carousel>
    <csi-copy id="copy" v-bind:selectedId="selectedId"></csi-copy>
    <csi-image-panel id="panel"
    ></csi-image-panel>
  </div>
</template>

<script>
import GalleryATF from "@/components/csi/csiATF";
import CsiImagePanel from "@/components/csi/csiImagePanel";
import CsiCopy from "@/components/csi/csiCopy";
import CsiBlurb from "@/components/csi/csiBlurb";

import CsiCarousel from "@/components/csi/csiCarousel";

export default {
  name: "csi",
  components: { CsiCarousel, CsiCopy, CsiImagePanel, GalleryATF, CsiBlurb },
  data() {
    return {
      id: "",
      info: {},
      galleryGroups: [],
      selectedId: ""
    };
  },
  methods: {
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
	.blurb {
		order: 2;
	}
	.carousel {
		order: 3;
	}
	.panel {
		order: 4;
	}
	.copy {
		order: 1;
	}
}

</style>
