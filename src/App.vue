<template>
  <div id="app">
    <Navbar></Navbar>
    <vue-page-transition name="fade-in-right">
      <router-view></router-view>
    </vue-page-transition>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#app {

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default {
  components: {Navbar, Footer},
  watch: {
    '$route'(to, from) {
      console.log(from)
      document.title = 'LTE || ' + to.meta.title
    },
    immediate: true
  }
}
</script>
