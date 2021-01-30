<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
           <div class="all-proj-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="56"
            viewBox="0 0 349 56"
            @click="toggleAllProjects()"
          >
            <g
              id="Group_94"
              data-name="Group 94"
              transform="translate(-1452 -1913)"
            >
              <rect
                id="Rectangle_107"
                data-name="Rectangle 107"
                width="349"
                height="56"
                rx="28"
                transform="translate(1452 1913)"
                fill="#e3e2e2"
              />
              <text
                id="ALL_PROJECTS"
                data-name="ALL PROJECTS"
                transform="translate(1699 1951)"
                fill="#a7a7a7"
                font-size="26"
                font-family="Arial-BoldMT, Arial"
                font-weight="700"
              >
                <tspan x="-197.438" y="0">ALL PROJECTS</tspan>
              </text>
              <g id="Group_93" data-name="Group 93" transform="translate(0 3)">
                <g
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  transform="translate(1777 1924) rotate(90)"
                  fill="none"
                  stroke="#a7a7a7"
                  stroke-width="2"
                >
                  <circle cx="14" cy="14" r="14" stroke="none" />
                  <circle cx="14" cy="14" r="13" fill="none" />
                </g>
                <path
                  id="Path_74"
                  data-name="Path 74"
                  d="M5.387,10.775,0,5.387,5.387,0"
                  transform="translate(1757.558 1941.157) rotate(-90)"
                  fill="none"
                  stroke="#a7a7a7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <line
                id="Line_35"
                data-name="Line 35"
                y2="29"
                transform="translate(1721.5 1926.5)"
                fill="none"
                stroke="#b7b6b6"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('EMM BRT')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/EMM_BRT/3.jpg"
              class="card-img EMM_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">EMM BRT</h5>
              <p class="card-text">
                LTE was mandated to provide expert engineering services for the
                Ekurhuleni Metropolitan Municipality (EMM), which is attending
                to the needs of its residents for improved mobility and an
                overall enhancement of their travel experience. EMM is
                implementing phase 1A of the Integrated Rapid Transit Network
                (IRPTN) which currently spans from Tembisa to Kempton Park.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('COGTA')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/COGTA/1.jpg"
              class="card-img COGTA_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">COGTA</h5>
              <p class="card-text">
                LTE conducted the assessment of the state of municipal water,
                sanitation and electricity infrastructure in the ten (10)
                District …
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('ACSA')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/ACSA/2.jpeg"
              class="card-img EMM_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">ACSA</h5>
              <p class="card-text">
                LTE Consulting was appointed by ACSA to undertake work on the
                extension of the international departures bussing gates at OR
                Tambo International Airport.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('KLIPDRIFT WATER TREATMENT')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/KLIPDRIF/2.jpg"
              class="card-img COGTA_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">
                KLIPDRIFT WATER TREATMENT
              </h5>
              <p class="card-text">
                LTE Consulting in association with Royal HaskoningDHV (formerly
                SSI Engineers and Environmental Consultants (Pty) Ltd…
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('LENASIA HOSPITAL')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/LENASIA/1.jpg"
              class="card-img COGTA_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">
                LENASIA HOSPITAL
              </h5>
              <p class="card-text">
                LTE Consulting in association with Royal HaskoningDHV (formerly
                SSI Engineers and Environmental Consultants (Pty) Ltd…
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('WELBEDACHT PIPELINE')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/EMM_BRT/3.jpg"
              class="card-img EMM_CARD"
              alt="WELBEDACHT PIPELINE"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">
                WELBEDACHT PIPELINE
              </h5>
              <p class="card-text">
                LTE was mandated to provide expert engineering services for the
                Ekurhuleni Metropolitan Municipality (EMM), which is attending
                to the needs of its residents for improved mobility and an
                overall enhancement of their travel experience. EMM is
                implementing phase 1A of the Integrated Rapid Transit Network
                (IRPTN) which currently spans from Tembisa to Kempton Park.
              </p>
              <p class="card-">Learn More</p>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="card mb-2 text-white h-100"
            @click="openModal('TEMBA BABALEGI')"
            data-toggle="modal"
            data-target="#projModal"
          >
            <img
              src="../../assets/images/projects/COGTA/1.jpg"
              class="card-img COGTA_CARD"
              alt="EMM BRT"
            />
            <div class="card-img-overlay h-100">
              <h5 class="card-title card-title font-weight-bold">
                TEMBA BABALEGI
              </h5>
              <p class="card-text">
                The City of Tshwane (CoT) has embarked on the project to upgrade
                and extend the Temba and Babelegi Waste Water Treatment Works
                (WWTW) to address the large backlog in the provision of
                waterborne sanitation to the communities in the greater Temba
                area.
              </p>
              <p class="card-">Learn More <i class="bi-alarm"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="projModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="projModalTitle"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="">
            <div class="row">
              <div class="">
                <div class="bck-btn">
                  <svg
                    data-toggle="modal"
                    data-target="#projModal"
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
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="corousel-div">
                <carousel
                  :per-page="1"
                  :mouse-drag="false"
                  autoplay
                  loop
                  autoplayTimeout="4000"
                  tabindex="-1"
                  paginationPosition="bottom-overlay"
                >
                  <slide v-for="pic in selectedProject.pictures" :key="pic.id">
                    <div class="img">
                      <img :src="pic.url" />
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
            <div class="row r">
              <h1 class="w-100">{{ selectedProject.name }}</h1>
            </div>
            <div class="row r sub-header">
              <span v-html="selectedProject.subHeader"></span>
            </div>
            <div class="row r text">
              <span v-html="selectedProject.text"></span>
            </div>
            <div class="row r footer">
              <div class="w-100 col-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="125.885"
                  viewBox="0 0 134 125.885"
                  @click="downloadProj(selectedProject)"
                  data-dismiss="modal"
                >
                  <a
                    :href="selectedProject.url"
                    target="_blank"
                    :download="selectedProject.name"
                  >
                    <g
                      id="Group_63"
                      data-name="Group 63"
                      transform="translate(-897 -3087)"
                    >
                      <g
                        id="Group_62"
                        data-name="Group 62"
                        transform="translate(1309.615 3148.615)"
                      >
                        <g
                          id="Group_61"
                          data-name="Group 61"
                          transform="translate(-385.5 -8.5)"
                        >
                          <path
                            id="Path_80"
                            data-name="Path 80"
                            d="M-349.116,64.27A36.426,36.426,0,0,1-385.5,27.885,36.426,36.426,0,0,1-349.116-8.5a36.427,36.427,0,0,1,36.386,36.385A36.427,36.427,0,0,1-349.116,64.27Zm0-68.868A32.519,32.519,0,0,0-381.6,27.885a32.519,32.519,0,0,0,32.482,32.483,32.52,32.52,0,0,0,32.484-32.483A32.52,32.52,0,0,0-349.116-4.6Z"
                            transform="translate(385.5 8.5)"
                            fill="#868686"
                          />
                        </g>
                        <path
                          id="Path_81"
                          data-name="Path 81"
                          d="M-268.418,64.138a2.431,2.431,0,0,1,1.724-.714,2.429,2.429,0,0,1,1.724.714l3.052,3.052v-12.9a2.438,2.438,0,0,1,2.438-2.438,2.438,2.438,0,0,1,2.438,2.438v13.06l1.063-1.063,2.155-2.154a2.429,2.429,0,0,1,1.724-.714,2.431,2.431,0,0,1,1.724.714,2.433,2.433,0,0,1,.673,2.154v0c-.01.055-.027.108-.041.161a2.256,2.256,0,0,1-.074.249c-.02.055-.043.108-.068.162a2.407,2.407,0,0,1-.13.248c-.026.043-.049.086-.078.127a2.469,2.469,0,0,1-.282.344l-3.47,3.47-3.809,3.809a2.429,2.429,0,0,1-1.724.713h-.036a2.429,2.429,0,0,1-1.724-.713l-3.809-3.809-3.47-3.47a2.383,2.383,0,0,1-.281-.343c-.029-.042-.053-.086-.079-.129a2.559,2.559,0,0,1-.129-.245c-.025-.055-.049-.109-.069-.165-.029-.08-.051-.161-.072-.242-.014-.056-.033-.111-.043-.168A2.423,2.423,0,0,1-268.418,64.138Z"
                          transform="translate(-89.657 -46.501)"
                          fill="#868686"
                        />
                        <path
                          id="Path_82"
                          data-name="Path 82"
                          d="M-271.119,137.074h0c0,3.291-3.227,5.869-7.347,5.869h-22.757c-4.119,0-7.347-2.578-7.347-5.869V121.233c0-2.782,2.309-5.048,5.51-5.684a5.962,5.962,0,0,0,1.729,3.635l.943.943h-.836c-1.668,0-2.584.831-2.584,1.106v15.841c0,.276.916,1.106,2.584,1.106h22.758c1.668,0,2.584-.831,2.584-1.106V121.233c0-.275-.916-1.106-2.584-1.106h-.716l.944-.944a5.958,5.958,0,0,0,1.725-3.61c3.141.669,5.394,2.913,5.394,5.661Z"
                          transform="translate(-59.269 -95.572)"
                          fill="#868686"
                        />
                      </g>
                      <text
                        id="Download"
                        transform="translate(897 3114)"
                        fill="#717171"
                        font-size="30"
                        font-family="ArialMT, Arial"
                      >
                        <tspan x="0" y="0">Download</tspan>
                      </text>
                    </g>
                  </a>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProjectsGrid",
  props: ["selectedName"],
  methods: {
    openModal(name) {
      this.selectedProject = this.projects.reduce((a, b) => {
        if (b.name == name) {
          a = b;
        }
        return a;
      }, {});
    },
    downloadProj(obj) {
      console.log("Downloading: ", obj.name);
      const link = document.createElement("a");
      link.href = obj.url;
      link.setAttribute("download", `${obj.name}.docx`); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    toggleAllProjects() {
      this.$emit("toggleAllProjects");
    },
    getBaseUrl() {
      console.log(process);
      return process.env.BASE_URL;
    },
  },
  data() {
    return {
      selectedProject: { name: "", pictures: [], text: `` },
      projects: [
        {
          name: "EMM BRT",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/EMM_BRT/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/EMM_BRT/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/EMM_BRT/3.jpg") },
          ],
          subHeader: `PROJECT NAME: EKURHULENI METROPOLITAN MUNICIPALITY BRT <br/>
                      PROJECT LOCATION: CITY OF EKHURHULENI <br/>
                      PROJECT VALUE: R 750M <br/>
                      PROJECT SUMMARY: <br/>  <br/> `,
          text: `LTE was mandated to provide expert engineering services for the Ekurhuleni Metropolitan Municipality (EMM), 
                 which is attending to the needs of its residents for improved mobility and an overall enhancement of their travel experience. EMM is implementing phase 1A of the Integrated Rapid Transit Network (IRPTN) which currently spans from Tembisa to Kempton Park. <br/>`,
          url: require("@/assets/docx/EMM_BRT.docx"),
        },
        {
          name: "COGTA",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/COGTA/1.jpg") },
          ],
          subHeader: `PROJECT NAME: COGTA KZN ASSESSMENTS <br/>
                      PROJECT LOCATION: PROVINCE OF KWAZULU-NATAL <br/>
                      PROJECT VALUE: R 35M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE conducted the assessment of the state of municipal water, sanitation and electricity infrastructure in the ten (10) District Municipalities (DM’s) of the Province of KwaZulu-Natal (KZN) on behalf of the Cooperative Governance and Traditional Affairs (COGTA) KZN. <br/><br/>
                 The outcomes of this assessment study will play a crucial role in guiding COGTA KZN towards achieving, and maintaining its policy objectives as defined by the vision, mission and value statements of contributing to the socio-economic development of the Province of KZN by coordinating and fostering co-operation amongst governance institutions and will build capacity to accelerate delivery of high quality services to communities. <br/>`,
        },
        {
          name: "ACSA",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/ACSA/1.jpg") },
            // { id: 2, url: require("@/assets/images/projects/ACSA/2.jpeg") },
            { id: 3, url: require("@/assets/images/projects/ACSA/3.jpg") },
            { id: 4, url: require("@/assets/images/projects/ACSA/4.jpg") },
            { id: 5, url: require("@/assets/images/projects/ACSA/5.jpg") },
            { id: 6, url: require("@/assets/images/projects/ACSA/6.jpg") },
            { id: 7, url: require("@/assets/images/projects/ACSA/7.jpg") },
            { id: 8, url: require("@/assets/images/projects/ACSA/8.jpg") },
            { id: 9, url: require("@/assets/images/projects/ACSA/9.jpg") },
            { id: 10, url: require("@/assets/images/projects/ACSA/10.jpg") },
            { id: 11, url: require("@/assets/images/projects/ACSA/11.jpg") },
            { id: 12, url: require("@/assets/images/projects/ACSA/12.jpg") },
            { id: 13, url: require("@/assets/images/projects/ACSA/13.jpg") },
            { id: 14, url: require("@/assets/images/projects/ACSA/14.jpg") },
            { id: 15, url: require("@/assets/images/projects/ACSA/15.jpg") },
            { id: 16, url: require("@/assets/images/projects/ACSA/16.jpg") },
            { id: 17, url: require("@/assets/images/projects/ACSA/17.jpg") },
            { id: 18, url: require("@/assets/images/projects/ACSA/18.jpg") },
            { id: 19, url: require("@/assets/images/projects/ACSA/19.jpg") },
            { id: 20, url: require("@/assets/images/projects/ACSA/20.jpg") },
            { id: 21, url: require("@/assets/images/projects/ACSA/21.jpg") },
            { id: 22, url: require("@/assets/images/projects/ACSA/22.jpg") },
            // { id: 2, url: require("@/assets/images/projects/ACSA/2.jpg") },
          ],
          subHeader: `PROJECT NAME: ACSA BUSSING DOORS <br/>
                      PROJECT LOCATION: OR TAMBO INTERNATIONAL AIRPORT, CITY OF EKHURHULENI <br/>
                      PROJECT VALUE: R 45M <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield. 
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
          url: require("@/assets/docx/ACSA.docx"),
        },
        {
          name: "KLIPDRIFT WATER TREATMENT",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/KLIPDRIF/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/KLIPDRIF/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/KLIPDRIF/3.jpg") },
          ],
          subHeader: `PROJECT NAME: KLIPDRIFT WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: MORETELE METROPOLITAN MUNICIPALITY <br/>
                      PROJECT VALUE: R 350M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting in association with Royal HaskoningDHV (formerly SSI Engineers and Environmental Consultants (Pty) Ltd were appointed on 13 June 2012 as the Professional Service Provider for Contract MW/KBWS01/2011: Planning and Design of the Upgrade and Extension of the Klipdrift Water Treatment Works (WTW). They have been instructed to provide findings that will determine whether the proposed construction works related to the Klipdrift Water Treatment Works are viable. <br/> <br/>
                 Royal HaskoningDHV and LTE Consulting are required to produce a feasibility study that informs of possible integration of the Wallmannsthal and Klipdrift WTW areas of supply including water resources. They are also expected to see to the planning, design and construction site attendance of bulk water supply infrastructure in the areas identified by the client. The work required includes among other things the raising of a weir in Pienaars River, alterations to the Steve Bikoville reservoir and a new clear water reservoir. <br/>`,
          url: require("@/assets/docx/KLIPDRIFT.docx"),
        },
        {
          name: "LENASIA HOSPITAL",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/LENASIA/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/LENASIA/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/LENASIA/3.jpg") },
            { id: 4, url: require("@/assets/images/projects/LENASIA/4.jpg") },
          ],
          subHeader: `PROJECT NAME: LENASIA COMMUNITY HEALTH CENTRE <br/>
                      PROJECT LOCATION: LENASIA, CITY OF JOHANNESBURG <br/>
                      PROJECT VALUE: R 450M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield. 
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
          url: require("@/assets/docx/LENASIA.docx"),
        },
        {
          name: "WELBEDACHT PIPELINE",
          pictures: [
            {
              id: 1,
              url: require("@/assets/images/projects/WELBEDACHT/1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/projects/WELBEDACHT/2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/projects/WELBEDACHT/3.jpg"),
            },
            {
              id: 4,
              url: require("@/assets/images/projects/WELBEDACHT/4.jpg"),
            },
            {
              id: 5,
              url: require("@/assets/images/projects/WELBEDACHT/5.jpg"),
            },
            {
              id: 6,
              url: require("@/assets/images/projects/WELBEDACHT/6.jpg"),
            },
          ],
          subHeader: `PROJECT NAME: WELBEDACHT PIPELINE <br/>
                    PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY <br/>
                    PROJECT VALUE: R 450M <br/>
                    PROJECT SUMMARY: <br/>  
                    Project Background  <br/><br/>`,
          text: `The Caledon-Bloemfontein Potable Water Supply Scheme, representing the principal bulk water supply to Mangaung Metropolitan Municipality (MMM) supplies water from the Welbedacht Dam Water Treatment Plant (WTP) to nearby De Hoek Reservoir, from where it gravitates via Uitkijk Reservoir
                 to Brandkop Reservoir located in Bloemfontein. The entire 105,7km section of the gravity pipeline between De Hoek and Brandkop Reservoirs has reached its design lifespan, and due to its poor condition experiences water leakages and is prone to frequent bursts resulting in severe water disruptions to the Mangaung area spillway. <br/>`,
          url: require("@/assets/docx/WELBEDACHT.docx"),
        },
        {
          name: "TEMBA BABALEGI",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/TEMBA/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/TEMBA/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/TEMBA/3.jpg") },
            { id: 4, url: require("@/assets/images/projects/TEMBA/4.jpg") },
            { id: 5, url: require("@/assets/images/projects/TEMBA/5.jpg") },
            { id: 6, url: require("@/assets/images/projects/TEMBA/6.jpg") },
            { id: 7, url: require("@/assets/images/projects/TEMBA/7.jpg") },
            { id: 8, url: require("@/assets/images/projects/TEMBA/8.jpg") },
            { id: 9, url: require("@/assets/images/projects/TEMBA/9.jpg") },
            { id: 10, url: require("@/assets/images/projects/TEMBA/10.jpg") },
            { id: 11, url: require("@/assets/images/projects/TEMBA/11.jpg") },
            { id: 12, url: require("@/assets/images/projects/TEMBA/12.jpg") },
            { id: 13, url: require("@/assets/images/projects/TEMBA/13.jpg") },
            { id: 14, url: require("@/assets/images/projects/TEMBA/14.jpg") },
            { id: 15, url: require("@/assets/images/projects/TEMBA/15.jpg") },
          ],
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: CITY OF TSHWANE <br/>
                      PROJECT VALUE: R 90M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The City of Tshwane (CoT) has embarked on the project to upgrade and extend the Temba and Babelegi Waste Water Treatment Works 
                (WWTW) to address the large backlog in the provision of waterborne sanitation to the communities in the greater Temba area. The project is an essential to remove to the development constraint caused by the lack of capacity at the WWTW’s to the development of the area. More than 36 000 existing residential stands will benefit from this project and unlock further economic development in the area. <br/>`,
          url: require("@/assets/docx/TEMBA.docx"),
        },
        {
          name: "MANGAUNG ZOO",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/MANGAUNG/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/MANGAUNG/2.jpg") },
          ],
          subHeader: `PROJECT NAME: MANGAUNG WILDLIFE SANCTUARY AND ZOO<br/>
                      PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY<br/>
                      PROJECT VALUE: R 350M<br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Mangaung Wildlife Sanctuary and Zoo is intended to become a world-class facility; a destination of choice not only within the region, and in the country, but in the continent as a whole. <br/>
                 The current facilities are based on a classic Victorian design, which over years of research and responsible management; have been proven to significantly fall short of an ideal enclosure environment for animals, guests, and the forefront of wildlife research and rehabilitation. <br/>
                 The project will move away from the concept of simple “people see animals” enclosures; to developing integrated habitat settings that focus on complimentary species integration (faunal and floral) within the habitat biomes. <br/>
                 The opportunity to harness the facility and resources to educate and expose the next generations to leading research and conversation practices will not be missed. The facility will cater for edutainment tours, rather than simply focusing on the animals and vegetation; but incorporating the rich history of the area. The Boer and indigenous cultural history will be incorporated with the geological and possible palaeontological characteristics of the area. <br/>`,
          url: require("@/assets/docx/MANGAUNG.docx"),
        },
        {
          name: "NWAMITWA DAM",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/NWAMITWA/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/NWAMITWA/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/NWAMITWA/3.jpg") },
          ],
          subHeader: `PROJECT NAME: NWAMITWA DAM <br/>
                      PROJECT LOCATION: LIMPOPO PROVINCE <br/>
                      PROJECT VALUE: R 5BN <br/>
                      PROJECT SUMMARY:  <br/> <br/>

                      PROJECT BACKGROUND<br/><br/>`,
          text: `The national Department of Water and Sanitation (DWS) has prioritised the development of the Nwamitwa Dam project. It forms the backbone of the Groot Letaba Water Development Project (GLeWaP), a national high priority project. This project is part of a greater strategic imperative to ensure resource security in South Africa. Six proposed dams and related infrastructure were highlighted, including the Nwamitwa Dam, increase of the dam wall at the existing Tzaneen Dam in Limpopo, new dams at the Mzimvubu River in the Eastern Cape, the expansion of the Clanwilliam Dam in the Western Cape, the Hazelmere Dam in KwaZulu-Natal and the Polihali Dam in Lesotho which will provide water to Gauteng <br/>`,
          url: require("@/assets/docx/NWAMITWA.docx"),
        },
        {
          name: "PONGOLAPOORT DAM",
          pictures: [
            {
              id: 1,
              url: require("@/assets/images/projects/PONGOLAPOORT/1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/projects/PONGOLAPOORT/2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/projects/PONGOLAPOORT/3.png"),
            },
            {
              id: 4,
              url: require("@/assets/images/projects/PONGOLAPOORT/4.jpg"),
            },
          ],
          subHeader: `PONGOLAPOORT DAM TEXT <br/>
                      PROJECT LOCATION: KWA ZULU NATAL <br/>
                      PROJECT VALUE: R 1.9BN <br/>
                      PROJECT SUMMARY:   <br/><br/>

                      PROJECT BACKGROUND <br/><br/>`,
          text: `LTE was appointed by the Department of Water and Sanitation (DWS) to refurbish the Pongolapoort Dam and address the issues raised during the 2004 and 2008 dam safety reports. The dam safety issues include the rehabilitation of the hydromechanical components of the dam, including the radial gates, the canal inlets and outlets, sleeve valves, and civil modifications to improve operations there-of. Concerns about the dam being able to pass the dam Safety Evaluation Flood (SEF) event were raised, and this will require further investigations / clarifications and may require further civil engineering interventions. <br/>`,
          url: require("@/assets/docx/PONGOLAPOORT.docx"),
        },
        {
          name: "SAAMBOU",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/SAAMBOU/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/SAAMBOU/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/SAAMBOU/3.jpg") },
            { id: 4, url: require("@/assets/images/projects/SAAMBOU/4.jpg") },
            { id: 5, url: require("@/assets/images/projects/SAAMBOU/5.jpg") },
          ],
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: CITY OF TSHWANE <b/>
                      PROJECT VALUE: R 90M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The availability of developable land in Gauteng is becoming critical whilst the demand for housing is rapidly escalating. This has prompted the call for innovative design and a shift in the mind-set with regard to the rollout of housing opportunities in Gauteng, and subsequently, the country. Detailed Engineering studies for Roads and Stormwater, Water and Sanitation, Electricity, Traffic and Transportation, and Waste Use Management have been concluded to ensure that bulk and link supply as well as internal reticulation is adequately designed for a development of this magnitude. Accordingly, the LTE design team is in constant liaison with the relevant authorities for each specific discipline in order to ensure compliance and input from the onset to the completion of the project. The LTE design team has incorporated industry leading technologies in its design criteria so as to ensure environmental friendliness by reduced energy consumption, reduced waste generation and the use of alternative energy. Eco-mobility and reduced carbon footprints are hallmarks of the development. <br/>`,
          url: require("@/assets/docx/SAAMBOU.docx"),
        },
        {
          name: "SPRINGS FRESH PRODUCE",
          pictures: [
            { id: 1, url: require("@/assets/images/projects/SPRINGS/1.jpg") },
            { id: 2, url: require("@/assets/images/projects/SPRINGS/2.jpg") },
            { id: 3, url: require("@/assets/images/projects/SPRINGS/3.jpg") },
            { id: 4, url: require("@/assets/images/projects/SPRINGS/4.jpg") },
            { id: 5, url: require("@/assets/images/projects/SPRINGS/5.jpg") },
            { id: 6, url: require("@/assets/images/projects/SPRINGS/6.jpg") },
            { id: 7, url: require("@/assets/images/projects/SPRINGS/7.jpg") },
            { id: 8, url: require("@/assets/images/projects/SPRINGS/8.jpg") },
          ],
          subHeader: `PROJECT NAME: SPRINGS FRESH PRODUCE MARKET<br/>
                      PROJECT LOCATION: SPRINGS, CITY OF EKHURHULENI<br/>
                      PROJECT VALUE: R 56M<br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Springs Fresh Produce Market, located at the corner of Paul Kruger Road and South Main Reef Road, Geduld, Springs, has been supporting local and regional farmers since 1985.
                 The market operates 24 hours a day, with deliveries taking place from evening to early the next morning. Once the market opens for sales, there is a vibrant atmosphere till closure, after which the process starts again. Due to the increase in demand for market space, COE Economic Development (COE ED), as custodians of the market, decided to add an additional 5000m2 of trading space. <br/>`,
          url: require("@/assets/docx/SPRINGS.docx"),
        },
        {
          name: "SYFERFONTEIN",
          pictures: [
            {
              id: 1,
              url: require("@/assets/images/projects/SYFERFONTEIN/1.jpg"),
            },
          ],
          subHeader: `PROJECT NAME: SYFERFONTEIN MEGA DEVELOPMENT <br/>
                      PROJECT LOCATION: RAND WEST CITY, GAUTENG <br/>
                      PROJECT VALUE: R 36BN <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE has been a partner to government in the planning, designing and implementation of low cost housing units since 2003. As a Professional Resource Team panel member at metropolitan, provincial and national levels, LTE has been involved in numerous projects across South Africa from Greenfields to Title Deed handover. Our expertise covers ground and environmental studies, spatial planning, bulk infrastructure and internal reticulation planning and design, architectural and structural designs, construction and construction management, and conveyancing. <br/>`,
          url: require("@/assets/docx/SYFERFONTEIN.docx"),
        },
      ],
      showAllProjects: false,
    };
  },
  components: { Carousel, Slide },
  watch: {
    selectedName: function() {
      if (this.selectedName) {
        this.openModal(this.selectedName);
        $("#projModal").modal("show");
      }
    },
  },
};
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

.modal-img {
  max-width: 100%;
  margin: 0;
  padding: 0;
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

.img img {
  min-width: 100% !important;
  min-height: 500px;
  object-fit: cover;
  border-radius: 3px;
  /* background-color: white; */
  box-shadow: 0 3px 20px 11px rgba(0, 0, 0, 0.09);
}
.corousel-dev .VueCarousel-pagination {
  position: absolute !important;
  bottom: 10px !important;
}
.r {
  margin: 10px;
}
.r h1 {
  text-align: center;
  font-weight: bold;
}
.sub-header {
  font-weight: bolder;
}
.footer {
  text-align: center;
  margin: 10%;
}
.footer svg {
  cursor: pointer;
}
.footer svg ::hover {
  border: 5px gray solid;
}
.bck-btn svg {
  position: absolute;
  z-index: 10;
  top: 55px;
  left: 2%;
}

.bck-btn svg::hover {
  cursor: pointer;
}

.all-proj {
  width: 100%;
  height: 50vh;
  background-color: #ffac18;
  position: absolute;
}

.all-proj-btn {
  margin: 1%;
  text-align: right;
}
.all-proj-btn svg:hover {
  color: #5c5a5a;
  transform: scale(1.02);
  cursor: pointer;
  transition: all .4s ease-in-out;
}
</style>
