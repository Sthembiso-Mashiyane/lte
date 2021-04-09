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
                    <a href="#"
                      ><i class="flaticon-email-2"></i>
                      needhelp@lteconsulting.co.za</a
                    >
                  </li>
                  <li>
                    <a href="#"><i class="flaticon-pin"></i> (011) 061 5700</a>
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
                  <a href="/index-2"
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
                    <li><nuxt-link to="/index-2">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/media">Media</nuxt-link> </li>
                    <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                    <li><nuxt-link to="/expertise">Expertise</nuxt-link></li>
                    <li><nuxt-link to="/csi">CSI</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
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
                    <li><nuxt-link to="/media">Media</nuxt-link> </li>
                    <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                    <li><nuxt-link to="/expertise">Expertise</nuxt-link></li>
                    <li><nuxt-link to="/csi">CSI</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <span
                  ><a href="mailto:tanvirahmed8282@gmail.com"
                    ><i class="fa fa-envelope-o"></i> Insync-sa@gmail.com</a
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

<style scoped></style>
