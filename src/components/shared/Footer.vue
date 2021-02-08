<template>
  <footer class="">
    <div class="row footer-light-grey">
      <div class="col-md-4 p-5 my-auto">
        <img src="../../assets/images/footer/dekra.png" class="img-fluid m-auto d-block" alt="dekra">
      </div>
      <div class="col-md-4 p-5 my-auto">
        <img src="../../assets/images/footer/beeLevel.png" class="img-fluid m-auto d-block" alt="bee">
      </div>
      <div class="col-md-4 p-5 my-auto">
        <img src="../../assets/images/footer/20years.png" class="img-fluid m-auto d-block" alt="20years">
      </div>
    </div>
    <div class="row p-md-5 p-3 footer-dark-grey">
      <div class="col-md-4">
        <h4 class="footer-yellow">OUR OFFICE</h4>
        <div class="row">
          <p class="col-md-12">
            5 Eglin Rd <br>
            Sunninghill<br>
            Sandton<br>
            2157
          </p>
        </div>
        <h4 class="footer-yellow pt-3">Phone</h4>
        <div class="row">
          <p class="col-md-12">
            (011) 061 5700
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <h4 class="footer-yellow">EXPERTISE</h4>
        <ul class="no-indent">
          <li>Civil & Structural Engineering</li>
          <li>Quantity Surveying</li>
          <li>Traffic & Transportation & Urban Planning</li>
          <li>Construction & Contract Monitoring & Project Management</li>
          <li>Aviation</li>
          <li>Mining</li>
          <li>Design & Advisory</li>
          <li>Town & Regional Planning</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4 class="footer-yellow">WHATS NEW</h4>
        <ul class="no-indent">
          <li>
            <router-link to="/csi">CSI</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link to="">Gallery</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8 offset-md-2">
        <hr class="line"/>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
