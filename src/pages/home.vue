<template>
  <div>
    <HomeATF></HomeATF>
    <HomeInfo></HomeInfo>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeATF from "@/components/home/HomeATF";
import HomeInfo from "@/components/home/HomeInfo";
import HomeContent from "@/components/home/HomeContent";

export default {
  name: "home",
  components: { HomeContent, HomeInfo, HomeATF}
}
</script>

<style scoped>

</style>
