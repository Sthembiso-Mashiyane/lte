<template>
<div class="">
  <AboutATF></AboutATF>
  <AboutInfo></AboutInfo>
  <AboutManagement></AboutManagement>
  <AboutValues></AboutValues>
</div>
</template>

<script>
import AboutATF from "@/components/about/AboutATF";
import AboutInfo from "@/components/about/AboutInfo";
import AboutManagement from "@/components/about/AboutManagement";
import AboutValues from "@/components/about/AboutValues";
export default {
  name: "about-us",
  components: {AboutValues, AboutManagement, AboutInfo, AboutATF}
}
</script>

<style scoped>

</style>
