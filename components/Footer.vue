<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-main">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-widget mt-30">
                <div class="footer-title pb-30">
                  <h4 class="title">Contact</h4>
                </div>
                <div class="footer-about-content">
                  <p>5 Eglin Rd Sunninghill Sandton, 2157</p>
                  <div class="email">
                    <a href="mailto:needhelp@lteconsulting.co.za"
                      >needhelp@lteconsulting.co.za</a
                    >
                  </div>
                  <div class="call">
                    <a href="tel:0110615700">(011) 061 5700</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-6">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-20">
                  <h4 class="title">Expertise</h4>
                </div>
                <div class="footer-about-list d-flex">
                  <ul class="mr-70">
                    <li>
                      <a class="footer-link" href="#"
                        ><nuxt-link to="/expertise"
                          ><i class="fa fa-angle-right"></i
                        >Civil & Structural Engineering</nuxt-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="footer-link" href="#"
                        ><nuxt-link to="/expertise"
                          ><i class="fa fa-angle-right"></i
                        >Electrical & Mechanical</nuxt-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="footer-link" href="#"
                        ><nuxt-link to="/expertise"
                          ><i class="fa fa-angle-right"></i
                        >Quantity Surveying</nuxt-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="footer-link" href="#"
                        ><nuxt-link to="/expertise"
                          ><i class="fa fa-angle-right"></i
                        >Traffic & Transportation & Urban Planning</nuxt-link
                        >
                      </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"
                        ><nuxt-link to="/expertise">
                         <i class="fa fa-angle-right"></i
                        > Construction & Contract Monitoring & Project
                          Management</nuxt-link
                        ></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-20">
                  <h4 class="title">MENU</h4>
                </div>
                <div class="footer-about-list d-flex">
                  <ul class="mr-70">
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/about"
                          ><i class="fa fa-angle-right"></i> About
                           </nuxt-link>
                          </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/media"
                          ><i class="fa fa-angle-right"></i> Media
                          </nuxt-link>
                          </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/projects"
                          ><i class="fa fa-angle-right"></i> Projects
                           </nuxt-link>
                          </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/expertise"
                          ><i class="fa fa-angle-right"></i> Expertise
                           </nuxt-link>
                          </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/csi"
                          ><i class="fa fa-angle-right"></i> CSI
                           </nuxt-link>
                          </a>
                    </li>
                    <li>
                      <a class="footer-link" href="#"><nuxt-link to="/contact"
                          ><i class="fa fa-angle-right"></i> Contact
                           </nuxt-link>
                          </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center">
          <p>
            © Copyright 2021 by
            <a target="blank_" href="https://www.insync-sa.co.za/">In-Sync</a>
          </p>
        </div>
      </div>
      <div class="footer-shape-1">
        <img src="/assets/images/shape/shape-5.png" alt="" />
      </div>
      <div
        class="footer-shape-2  animated wow fadeInLeft"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
      >
        <img src="/assets/images/shape/shape-6.png" alt="" />
      </div>
    </footer>

    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <div
            @click="scrollTop"
            :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`"
          >
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.footer-link {
  margin-left: 2%!important;
  width: 100%;
}
</style>
