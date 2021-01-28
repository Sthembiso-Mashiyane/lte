<template>
  <div class="">
    <ProjectsATF></ProjectsATF>
    <ProjectsInfo></ProjectsInfo>
    <ProjectsGrid></ProjectsGrid>
  </div>
</template>

<script>
import ProjectsATF from "@/components/projects/ProjectsATF";
import ProjectsInfo from "@/components/projects/ProjectsInfo";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
export default {
  name: "projects",
  components: {ProjectsGrid, ProjectsInfo, ProjectsATF}
}
</script>

<style scoped>

</style>
