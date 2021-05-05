<template>
  <header class="header-area header-2-area">
    <div class="header-top-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-top-item">
              <div class="header-info">
                <ul>
                  <li>
                    <a href="mailto:needhelp@lteconsulting.co.za"
                      ><i class="flaticon-email-2"></i>
                      needhelp@lteconsulting.co.za</a
                    >
                  </li>
                  <li>
                    <a href="tel:0110615700"
                      ><i class="flaticon-pin"></i> (011) 061 5700</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="flaticon-email-2"></i> 5 Eglin Rd Sunninghill
                      Sandton, 2157</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="main-header-item d-flex justify-content-between align-items-center"
            >
              <div class="main-header-menus  d-flex">
                <div class="header-logo">
                  <a href="/"
                    ><img src="/assets/images/lte-header-logo.png" alt="logo"
                  /></a>
                </div>
                <div class="toggle-btn ml-30 canvas_open">
                  <i
                    @click="mobileToggle = !mobileToggle"
                    class="fa fa-bars"
                  ></i>
                </div>
                <div class="header-menu d-none d-lg-block">
                  <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/media">Media</nuxt-link></li>
                    <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                    <li><nuxt-link to="/expertise">Expertise</nuxt-link></li>
                    <li><nuxt-link to="/csi">CSI</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
              <div class="iso">
                <NuxtLink to="/qualitystatement"
                  ><span><a>ISO 9001 Certified</a></span></NuxtLink
                >
              </div>
            </div>

            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div id="menu" class="text-left ">
                <ul class="offcanvas_main_menu text-center">
                  <li><nuxt-link to="/index-2">Home</nuxt-link></li>
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <li><nuxt-link to="/media">Media</nuxt-link></li>
                  <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                  <li><nuxt-link to="/expertise">Expertise</nuxt-link></li>
                  <li><nuxt-link to="/csi">CSI</nuxt-link></li>
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <span
                  ><a href="mailto:needhelp@lteconsulting.co.za"
                    ><i class="fa fa-envelope-o"></i> needhelp@lteconsulting.co.za</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavTwo",
  data() {
    return {
      mobileToggle: false
    };
  }
};
</script>

<style scoped>
@media only screen and (min-width: 992px) {
  .header-top-2 {
    padding: 6px !important;
  }
  .header-info {
    margin-left: 230px;
  }
}
.iso a,
.iso span {
  padding: 3px 6px 3px 6px;
  /* background: #eaeaff; */
  color: #21409a;
  height: 50px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.iso {
  height: 100%;
      display: none;
  /* display: flex; */
}

@media (min-width: 576px) {
  .iso {
    height: 0%;
      display: none;

  }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {
  .iso {
    height: 100%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .iso {
    height: 100%;
      display: block;

  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .iso {
    height: 100%;
      display: block;

  }
}
</style>
