<template>
  <div class="">
    <div class="all-proj" v-if="showAllProjects">
      <div class="back-drop"></div>
      <div class="proj-menu">
        <div class="content">
          <div class="bck-btn">
            <svg
              @click="onToggleAllProjects()"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              class="svg-inline--fa fa-chevron-left fa-w-10"
              role="img"
              viewBox="0 0 320 512"
            >
              <path
                fill="lightgray"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              />
            </svg>
          </div>
          <div class="header">
            <h3>ALL PROJECTS</h3>
          </div>
          <div class="projects">
            <div @click="selectProject('ACSA')">ACSA Busing Gates</div>
            <div @click="selectProject('COGTA')">COGTA</div>
            <div @click="selectProject('EMM BRT')">EMM BRT</div>
            <div @click="selectProject('KLIPDRIFT WATER TREATMENT')">KLIPDRIFT</div>
            <div @click="selectProject('LENASIA HOSPITAL')">LENASIA HOSTPITAL</div>
            <div @click="selectProject('MANGAUNG ZOO')">MANGAUNG ZOO</div>
            <div @click="selectProject('NWAMITWA DAM')">NWAMITWA DAM</div>
            <div @click="selectProject('PONGOLAPOORT DAM')">PONGOLAPOORT DAM</div>
            <div @click="selectProject('SAAMBOU')">SAAMBOU</div>
            <div @click="selectProject('SPRINGS FRESH PRODUCE')">SPRINGS FRESH PRODUCE</div>
            <div @click="selectProject('SYFERFONTEIN')">SYFERFONTEIN</div>
            <div @click="selectProject('TEMBA BABALEGI')">TEMBA BABALEGI</div>
            <div @click="selectProject('WELBEDACHT PIPELINE')">WELBEDACHT PIPELINE</div>
          </div>
        </div>
      </div>
    </div>
    <ProjectsATF></ProjectsATF>
    <ProjectsInfo></ProjectsInfo>
    <ProjectsGrid
      v-on:toggleAllProjects="onToggleAllProjects($event)"
      :selectedName="selectedName"
    ></ProjectsGrid>
  </div>
</template>

<script>
import ProjectsATF from "@/components/projects/ProjectsATF";
import ProjectsInfo from "@/components/projects/ProjectsInfo";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
export default {
  name: "projects",
  components: { ProjectsGrid, ProjectsInfo, ProjectsATF },
  methods: {
    onToggleAllProjects() {
      this.showAllProjects = !this.showAllProjects;
      console.log("showAllProjects: ", this.showAllProjects);
      if(this.showAllProjects){
        this.selectedName = "";
      }
    },
    selectProject(name){
      this.showAllProjects = false;
      this.selectedName = name;
    }
  },
  data() {
    return {
      showAllProjects: false,
      selectedName: "",
    };
  },
};
</script>

<style scoped>
.all-proj {
  width: 100%;
  height: 500px;
  position: fixed;
  top: 0;
  z-index: 10000;
  transition: all 1s ease;
}
.all-proj .proj-menu {
  width: 100%;
  height: 500px;
  background-color: #ffac18;
  position: absolute;
}
.all-proj .back-drop {
  width: 100%;
  height: 100vh;
  background: rgba(36, 34, 34, 0.8);
  position: absolute;
}
.proj-menu .content {
  position: absolute;
  top: 5%;
  left: 5%;
  color: black;
}
.bck-btn {
  margin: 5%;
}

.content div , h3 {
  width: 100%;
  margin: 0 5% 4% 10%;
  font-size: 16px;
}

.header h3{
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}
.projects div:hover {
  color: rgb(121, 116, 116);
  cursor: pointer;
}
</style>
