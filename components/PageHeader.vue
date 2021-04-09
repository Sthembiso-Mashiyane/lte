<template>
  <div class="page-title-area bg_cover pt-120" :style="{ backgroundImage: `url(${imgUrl})`}" :class="{'home-nav': isHome}">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-title-item text-center">
            <h3 class="title">{{ title }}</h3>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8"></div>
        <div class="col-xs-12 col-sm-12 col-md-4 text-center">
           <div v-if="isHome" class="home-logo pt-5">
              <img src="../assets/home/logo-transparent.png" class="logo" alt="">
            </div>
        </div>
      </div>
    </div>
    <div class="page-shadow">
      <img src="/assets/images/page-shadow.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      },
      imgUrl: {
        type: String
      },
      isHome: {
        type: Boolean
      },
    },

  }
</script>

<style scoped>
  .home-nav {
    min-height: 500px;
  }

  .logo {
    width: 100%;
    height: auto;
    float: left;
  }

  .home-logo {
    justify-content:right ;
  }
</style>
