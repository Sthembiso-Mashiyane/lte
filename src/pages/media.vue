<template>
  <div class="">
    <MediaAFT></MediaAFT>
    <MediaInfo></MediaInfo>
    <MediaArchives></MediaArchives>
  </div>
</template>

<script>
import MediaAFT from "@/components/media/MediaATF";
import MediaInfo from "@/components/media/MediaInfo";
import MediaArchives from "@/components/media/MediaArchives";

export default {
  name: "media",
  components: {MediaArchives, MediaInfo, MediaAFT}
}
</script>

<style scoped>

</style>
