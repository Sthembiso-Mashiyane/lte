<template>
  <div class="position-relative z-index-3000">
    <!-- Begin Side Drawer -->
    <div class="position-relative z-index-3000">
      <div id="side-drawer" class="position-absolute z-index-3000" @click="closeSideDrawer()">
        <div class="h-100 z-index-3000">
          <!-- Side Drawer Links -->
          <ul id="links" class="list-group text-right p-5 header" @click="closeSideDrawer()">
            <router-link to="/" class=" lte-yellow border-0 rounded-0 header">HOME</router-link>
            <router-link to="/about" class=" lte-yellow border-0 rounded-0">ABOUT US</router-link>
            <router-link to="/projects" class=" lte-yellow border-0 rounded-0 header">PROJECTS</router-link>
            <router-link to="/expertise" class=" lte-yellow border-0 rounded-0">EXPERTISE</router-link>
            <router-link to="/media" class=" lte-yellow border-0 rounded-0 header">MEDIA</router-link>
            <router-link to="/csi/nyakalong-home" class=" lte-yellow border-0 rounded-0">CSI</router-link>
            <!--            <router-link to="/" class=" lte-yellow border-0 rounded-0 header">CS</router-link>-->
            <router-link to="/contact" class=" lte-yellow border-0 rounded-0">CONTACT US</router-link>
          </ul>
        </div>
      </div>
    </div>
    <div id="side-drawer-void" class="position-fixed d-none" @click="closeSideDrawer()"></div>
    <!-- End Side Drawer -->

    <!-- Begin Top Navbar -->
    <nav class="navbar navbar-dark bg-transparent position-absolute w-100" v-if="!this.$isMobile()">
      <a @click="openSideDrawer()" v-if="!isNavOpen" class="navbar-brand" href="#">
        <img src="../../assets/images/header/dropdown.png" height="30" alt="">
      </a>
      <a @click="closeSideDrawer()" v-if="isNavOpen" class="navbar-brand text-right" href="#">
        <img src="../../assets/images/header/back.png" width="30" alt="">
      </a>

      <router-link to="/">
        <a href="">
          <img src="../../assets/images/header/lte-header-logo.png" class="ml-auto" height="100" alt="">
        </a>
      </router-link>
    </nav>

    <nav class="navbar navbar-dark bg-transparent position-absolute z-index-2000 w-100" v-if="this.$isMobile()">
      <a @click="openSideDrawer()" v-if="!isNavOpen" class="navbar-brand" href="#">
        <img src="../../assets/images/header/dropdown.png" height="10" alt="">
      </a>
      <a @click="closeSideDrawer()" v-if="isNavOpen" class="navbar-brand z-index-2000  text-right" href="#">
        <img src="../../assets/images/header/back.png" width="10" alt="">
      </a>

      <router-link to="/">
        <a href="">
          <img src="../../assets/images/header/lte-header-logo.png" class="ml-auto" height="10" alt="">
        </a>
      </router-link>
    </nav>

    <!-- End Top Navbar -->
    <!--    <div class="">-->
    <!--      <nav class=" fixed-top navbar navbar-expand-lg navbar-light">-->
    <!--        <div class="">-->
    <!--          <img @click="openSideDrawer" src="../../assets/images/header/dropdown.png" class="pt-2" width="30"-->
    <!--               height="30" alt="">-->
    <!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"-->
    <!--                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
    <!--            <span class="navbar-toggler-icon"></span>-->
    <!--          </button>-->
    <!--        </div>-->
    <!--        <div class="mx-auto order-0">-->
    <!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">-->
    <!--            <span class="navbar-toggler-icon"></span>-->
    <!--          </button>-->
    <!--        </div>-->
    <!--        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">-->
    <!--          <ul class="navbar-nav ml-auto">-->
    <!--            <li class="nav-item">-->
    <!--              <router-link to="/" src="../../assets/images/header/dropdown.png" class="pt-2" width="30" height="30"-->
    <!--                           alt="">-->
    <!--                <img-->
    <!--                    src="../../assets/images/header/lte-header-logo.png" class="pt-2" height="100" alt="">-->
    <!--              </router-link>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </nav>-->
    <!--    </div>-->
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      isNavOpen: false
    };
  },
  methods: {
    openSideDrawer() {
      this.isNavOpen = true
      document.getElementById("side-drawer").style.right = "0";
      document.getElementById("side-drawer-void").classList.add("d-block");
      document.getElementById("side-drawer-void").classList.remove("d-none");
    },
    closeSideDrawer() {
      this.isNavOpen = false
      document.getElementById("side-drawer").style.right = "-100%";
      document.getElementById("side-drawer-void").classList.add("d-none");
      document.getElementById("side-drawer-void").classList.remove("d-block");
    }
  }

}

</script>

<style scoped>
a {
  padding: 1rem !important;
  text-decoration: none !important;
  transition: 0.6s !important;
  color: #EAEAEA !important;
}

a:hover {
  color: #C39300 !important;
  text-decoration: none !important;
}

img:not(.md-image) {
  height: 50px;
}
@media only screen and (max-width: 600px) {
  img:not(.md-image) {
    height: 30px;
  }
}


</style>
