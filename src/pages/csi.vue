<template>
  <div class="">
    <head>
      <title>LTE || CSI</title>
    </head>
    <GalleryATF></GalleryATF>
    <csi-blurb id="blurb"></csi-blurb>
    <csi-carousel id="carousel" v-bind:selectedId="selectedId"></csi-carousel>
    <csi-image-panel id="panel"
      v-on:onChangeSelectedCorousel="onChangeSelectedCorousel($event)" 
    ></csi-image-panel>
    <csi-copy id="copy" v-bind:selectedId="selectedId"></csi-copy>
  </div>
</template>

<script>
import GalleryATF from "@/components/csi/csiATF";
import CsiImagePanel from "@/components/csi/csiImagePanel";
import CsiCopy from "@/components/csi/csiCopy";
import CsiBlurb from "@/components/csi/csiBlurb";

import json from "../info/projects.json";
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
    onChangeSelectedCorousel(newChild) {
      console.log("Child A said I must change child B to: ", newChild);
      this.selectedId = newChild;
    },
  },
  beforeCreate() {
    this.id = this.$route.params.id;
    this.info = json.filter((d) => d.id === this.id);
  },
  mounted() {
    this.selectedId = "nyakalong-home";
  }
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
