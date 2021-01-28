<template>
  <div class="container-fluid">
    <div class="row">
      <div class="column">
        <div class="">
          <button type="submit" class="btn btn-block btn-default footer__btn" data-toggle="modal"
                  data-target="#myModal2"> Open Modal
          </button>
          <div class="card mb-2 text-white h-100" @click="openModal()">
            <img src="../../assets/images/projects/EMM_BRT/3.jpg" class="card-img EMM_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">EMM BRT</h5>
              <p class="card-text">LTE was mandated to provide expert engineering services for the Ekurhuleni
                Metropolitan
                Municipality (EMM), which is attending to the needs of its residents for improved mobility and an
                overall
                enhancement of their travel experience. EMM is implementing phase 1A of the Integrated Rapid Transit
                Network (IRPTN) which currently spans from Tembisa to Kempton Park.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/COGTA/1.jpg" class="card-img COGTA_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">COGTA</h5>
              <p class="card-text">LTE conducted the assessment of the state of municipal water, sanitation and
                electricity infrastructure in the ten (10) District …
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/ACSA/3.jpeg" class="card-img EMM_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">ACSA</h5>
              <p class="card-text">LTE Consulting was appointed by ACSA to undertake work on the extension of the
                international departures bussing gates at OR Tambo International Airport.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/KLIPDRIF/2.jpg" class="card-img COGTA_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">KLIPDRIFT
                WATER
                TREATMENT</h5>
              <p class="card-text">LTE Consulting in association with Royal HaskoningDHV (formerly SSI Engineers and
                Environmental Consultants (Pty) Ltd…
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/LENASIA/1.jpg" class="card-img COGTA_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">LENASIA HOSPITAL</h5>
              <p class="card-text">LTE Consulting in association with Royal HaskoningDHV (formerly SSI Engineers and
                Environmental Consultants (Pty) Ltd…
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/EMM_BRT/3.jpg" class="card-img EMM_CARD" alt="WELBEDACHT PIPELINE">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">WELBEDACHT
                PIPELINE</h5>
              <p class="card-text">LTE was mandated to provide expert engineering services for the Ekurhuleni
                Metropolitan
                Municipality (EMM), which is attending to the needs of its residents for improved mobility and an
                overall
                enhancement of their travel experience. EMM is implementing phase 1A of the Integrated Rapid Transit
                Network (IRPTN) which currently spans from Tembisa to Kempton Park.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card mb-2 text-white h-100">
            <img src="../../assets/images/projects/COGTA/1.jpg" class="card-img COGTA_CARD" alt="EMM BRT">
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">TEMBA
                BABALEGI</h5>
              <p class="card-text">The City of Tshwane (CoT) has embarked on the project to upgrade and extend the Temba
                and Babelegi Waste Water Treatment Works (WWTW) to address the large backlog in the provision of
                waterborne sanitation to the communities in the greater Temba area.
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade animate" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
          <div class="modal-body">
            <div class="row">
              <div class="card w-100 c">
                <div class="top-sec">
                  <img src="http://via.placeholder.com/350x150">
                </div>
                <div class="bottom-sec">
                  <p> Some data here</p>
                  <p> Some data here</p>
                  <p> Some data here</p>
                  <p> Some data here</p>
                </div>
              </div>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "ProjectsGrid",
  methods: {
    openModal() {
      $('#myModal2').modal('show');
    }
  }
}
</script>

<style scoped>
.c {
  padding: 15px;
  margin-top: 30px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.1);
}

.c img {
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
  /* background-color: white; */
  box-shadow: 0 3px 20px 11px rgba(0, 0, 0, 0.09);
}

.c .top-sec {
  margin-top: -30px;
  margin-bottom: 15px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: calc(100% / 3); /* IE10 */
  flex: calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 0 4px;
}

.column img {
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

.animate-bottom {
  position: relative;
  animation: animatebottom 0.4s;
}

@keyframes animatebottom {
  from {
    bottom: -300px;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
