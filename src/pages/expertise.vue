<template>
  <div class="">
    <ExpertiseATF></ExpertiseATF>
    <ExpertiseInfo></ExpertiseInfo>
    <ExpertiseServices></ExpertiseServices>
  </div>
</template>

<script>
import ExpertiseATF from "@/components/expertise/ExpertiseATF";
import ExpertiseInfo from "@/components/expertise/ExpertiseInfo";
import ExpertiseServices from "@/components/expertise/ExpertiseServices";

export default {
  name: "expertise",
  components: {ExpertiseServices, ExpertiseInfo, ExpertiseATF}
}
</script>

<style scoped>

</style>
