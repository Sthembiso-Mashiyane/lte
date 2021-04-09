<template>
  <section class="single-project-area pt-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="single-project">
            <div class="single-project-thumb">
              <img :src="selectedProject.imgUrl" alt="project" />
            </div>
            <div class="single-project-content-1">
              <h3 class="title">{{ selectedProject.name }}</h3>
              <br />
              <b v-html="selectedProject.subHeader"></b>
              <p v-html="selectedProject.text"></p>
            </div>
            <div class="single-project-content-1 item-2 text-center">
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
  </section>
</template>

<script>
import imgUrl_acsa from "~/assets/projects/ACSA/1.jpg";
import imgUrl_cogta from "~/assets/projects/COGTA/1.jpg";
import imgUrl_sys from "~/assets/projects/SYFERFONTEIN/1.jpg";
import imgUrl_temba from "~/assets/projects/TEMBA/1.jpg";
import imgUrl_weld from "~/assets/projects/WELBEDACHT/1.jpg";
import imgUrl_emm from "~/assets/projects/EMM_BRT/1.jpg";
import imgUrl_klip from "~/assets/projects/KLIPDRIF/1.jpg";
import imgUrl_lenasia from "~/assets/projects/LENASIA/4.jpg";
import imgUrl_mang from "~/assets/projects/MANGAUNG/1.jpg";
import imgUrl_nwam from "~/assets/projects/NWAMITWA/1.jpg";
import imgUrl_pongo from "~/assets/projects/PONGOLAPOORT/1.jpg";
import imgUrl_saambo from "~/assets/projects/SAAMBOU/1.jpg";
import imgUrl_springs from "~/assets/projects/SPRINGS/1.jpg";

import docx_acsa from "../assets/docx/ACSA.docx";
import docx_cogta from "../assets/docx/COGTA.docx";
import docx_sys from "../assets/docx/SYFERFONTEIN.docx";
import docx_temba from "../assets/docx/TEMBA.docx";
import docx_weld from "../assets/docx/WELBEDACHT.docx";
import docx_emm from "../assets/docx/EMM_BRT.docx";
import docx_klip from "../assets/docx/KLIPDRIFT.docx";
import docx_lenasia from "../assets/docx/LENASIA.docx";
import docx_mang from "../assets/docx/MANGAUNG.docx";
import docx_nwam from "../assets/docx/NWAMITWA.docx";
import docx_pongo from "../assets/docx/PONGOLAPOORT.docx";
import docx_saambo from "../assets/docx/SAAMBOU.docx";
import docx_springs from "../assets/docx/SPRINGS.docx";

export default {
  name: "ProjectSingle",
  params: {
    project: String
  },
  data() {
    return {
      projects: [
        {
          name: "EMM BRT",
          url_id: "emm-brt",
          imgUrl: imgUrl_emm, // "~/assets/images/projects/EMM_BRT/1.jpg",
          subHeader: `PROJECT NAME: EKURHULENI METROPOLITAN MUNICIPALITY BRT <br/><br/>
                      PROJECT LOCATION: CITY OF EKHURHULENI <br/><br/>
                      PROJECT VALUE: R 750M <br/><br/>
                      PROJECT SUMMARY: <br/>  <br/> `,
          text: `LTE was mandated to provide expert engineering services for the Ekurhuleni Metropolitan Municipality (EMM),
                 which is attending to the needs of its residents for improved mobility and an overall enhancement of their travel experience. EMM is implementing phase 1A of the Integrated Rapid Transit Network (IRPTN) which currently spans from Tembisa to Kempton Park. <br/>`,
          url: docx_emm
        },
        {
          name: "COGTA",
          url_id: "cogta",
          imgUrl: imgUrl_cogta, // require("@/assets/images/projects/COGTA/1.jpg"),
          subHeader: `PROJECT NAME: COGTA KZN ASSESSMENTS <br/><br/>
                      PROJECT LOCATION: PROVINCE OF KWAZULU-NATAL <br/><br/>
                      PROJECT VALUE: R 35M <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE conducted the assessment of the state of municipal water, sanitation and electricity infrastructure in the ten (10) District Municipalities (DM’s) of the Province of KwaZulu-Natal (KZN) on behalf of the Cooperative Governance and Traditional Affairs (COGTA) KZN. <br/><br/>
                 The outcomes of this assessment study will play a crucial role in guiding COGTA KZN towards achieving, and maintaining its policy objectives as defined by the vision, mission and value statements of contributing to the socio-economic development of the Province of KZN by coordinating and fostering co-operation amongst governance institutions and will build capacity to accelerate delivery of high quality services to communities. <br/>`,
          url: docx_cogta
        },
        {
          name: "ACSA",
          url_id: "acsa",
          imgUrl: imgUrl_acsa, // require("@/assets/images/projects/ACSA/1.jpg"),
          subHeader: `PROJECT NAME: ACSA BUSSING DOORS <br/><br/>
                      PROJECT LOCATION: OR TAMBO INTERNATIONAL AIRPORT, CITY OF EKHURHULENI <br/><br/>
                      PROJECT VALUE: R 45M <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield.
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
          url: docx_acsa
        },
        {
          name: "KLIPDRIFT WATER TREATMENT",
          url_id: "klipdrift-water-treatment",
          imgUrl: imgUrl_klip, // require("@/assets/images/projects/KLIPDRIF/1.jpg"),
          subHeader: `PROJECT NAME: KLIPDRIFT WATER TREATMENT WORKS <br/><br/>
                      PROJECT LOCATION: MORETELE METROPOLITAN MUNICIPALITY <br/><br/>
                      PROJECT VALUE: R 350M <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting in association with Royal HaskoningDHV (formerly SSI Engineers and Environmental Consultants (Pty) Ltd were appointed on 13 June 2012 as the Professional Service Provider for Contract MW/KBWS01/2011: Planning and Design of the Upgrade and Extension of the Klipdrift Water Treatment Works (WTW). They have been instructed to provide findings that will determine whether the proposed construction works related to the Klipdrift Water Treatment Works are viable. <br/> <br/>
                 Royal HaskoningDHV and LTE Consulting are required to produce a feasibility study that informs of possible integration of the Wallmannsthal and Klipdrift WTW areas of supply including water resources. They are also expected to see to the planning, design and construction site attendance of bulk water supply infrastructure in the areas identified by the client. The work required includes among other things the raising of a weir in Pienaars River, alterations to the Steve Bikoville reservoir and a new clear water reservoir. <br/>`,
          url: docx_klip
        },
        {
          name: "LENASIA HOSPITAL",
          url_id: "lenasia-hospital",
          imgUrl: imgUrl_lenasia, // require("@/assets/images/projects/LENASIA/1.jpg"),
          subHeader: `PROJECT NAME: LENASIA COMMUNITY HEALTH CENTRE <br/><br/>
                      PROJECT LOCATION: LENASIA, CITY OF JOHANNESBURG <br/><br/>
                      PROJECT VALUE: R 450M <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield.
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
          url: docx_lenasia
        },
        {
          name: "WELBEDACHT PIPELINE",
          url_id: "welbedacht-pipeline",
          imgUrl: imgUrl_weld, // require("@/assets/images/projects/WELBEDACHT/1.jpg"),
          subHeader: `PROJECT NAME: WELBEDACHT PIPELINE <br/><br/>
                    PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY <br/><br/>
                    PROJECT VALUE: R 450M <br/><br/>
                    PROJECT SUMMARY: <br/><br/>
                    Project Background  <br/><br/>`,
          text: `The Caledon-Bloemfontein Potable Water Supply Scheme, representing the principal bulk water supply to Mangaung Metropolitan Municipality (MMM) supplies water from the Welbedacht Dam Water Treatment Plant (WTP) to nearby De Hoek Reservoir, from where it gravitates via Uitkijk Reservoir
                 to Brandkop Reservoir located in Bloemfontein. The entire 105,7km section of the gravity pipeline between De Hoek and Brandkop Reservoirs has reached its design lifespan, and due to its poor condition experiences water leakages and is prone to frequent bursts resulting in severe water disruptions to the Mangaung area spillway. <br/>`,
          url: docx_weld
        },
        {
          name: "TEMBA BABALEGI",
          url_id: "temba-babalegi",
          imgUrl: imgUrl_temba, // require("@/assets/images/projects/TEMBA/1.jpg"),
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/><br/>
                      PROJECT LOCATION: CITY OF TSHWANE <br/><br/>
                      PROJECT VALUE: R 90M <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The City of Tshwane (CoT) has embarked on the project to upgrade and extend the Temba and Babelegi Waste Water Treatment Works
                (WWTW) to address the large backlog in the provision of waterborne sanitation to the communities in the greater Temba area. The project is an essential to remove to the development constraint caused by the lack of capacity at the WWTW’s to the development of the area. More than 36 000 existing residential stands will benefit from this project and unlock further economic development in the area. <br/>`,
          url: docx_temba
        },
        {
          name: "MANGAUNG ZOO",
          url_id: "mangaung-zoo",
          imgUrl: imgUrl_mang, // require("@/assets/images/projects/MANGAUNG/1.jpg"),
          subHeader: `PROJECT NAME: MANGAUNG WILDLIFE SANCTUARY AND ZOO<br/><br/>
                      PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY<br/><br/>
                      PROJECT VALUE: R 350M<br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Mangaung Wildlife Sanctuary and Zoo is intended to become a world-class facility; a destination of choice not only within the region, and in the country, but in the continent as a whole. <br/>
                 The current facilities are based on a classic Victorian design, which over years of research and responsible management; have been proven to significantly fall short of an ideal enclosure environment for animals, guests, and the forefront of wildlife research and rehabilitation. <br/>
                 The project will move away from the concept of simple “people see animals” enclosures; to developing integrated habitat settings that focus on complimentary species integration (faunal and floral) within the habitat biomes. <br/>
                 The opportunity to harness the facility and resources to educate and expose the next generations to leading research and conversation practices will not be missed. The facility will cater for edutainment tours, rather than simply focusing on the animals and vegetation; but incorporating the rich history of the area. The Boer and indigenous cultural history will be incorporated with the geological and possible palaeontological characteristics of the area. <br/>`,
          url: docx_mang
        },
        {
          name: "NWAMITWA DAM",
          url_id: "nwamitwa-dam",
          imgUrl: imgUrl_nwam, // require("@/assets/images/projects/NWAMITWA/1.jpg"),
          subHeader: `PROJECT NAME: NWAMITWA DAM <br/><br/>
                      PROJECT LOCATION: LIMPOPO PROVINCE <br/><br/>
                      PROJECT VALUE: R 5BN <br/><br/>
                      PROJECT SUMMARY:  <br/> <br/>

                      PROJECT BACKGROUND<br/><br/>`,
          text: `The national Department of Water and Sanitation (DWS) has prioritised the development of the Nwamitwa Dam project. It forms the backbone of the Groot Letaba Water Development Project (GLeWaP), a national high priority project. This project is part of a greater strategic imperative to ensure resource security in South Africa. Six proposed dams and related infrastructure were highlighted, including the Nwamitwa Dam, increase of the dam wall at the existing Tzaneen Dam in Limpopo, new dams at the Mzimvubu River in the Eastern Cape, the expansion of the Clanwilliam Dam in the Western Cape, the Hazelmere Dam in KwaZulu-Natal and the Polihali Dam in Lesotho which will provide water to Gauteng <br/>`,
          url: docx_nwam
        },
        {
          name: "PONGOLAPOORT DAM",
          url_id: "pongolapoort-dam",
          imgUrl: imgUrl_pongo, // require("@/assets/images/projects/PONGOLAPOORT/1.jpg"),
          subHeader: `PONGOLAPOORT DAM TEXT <br/><br/>
                      PROJECT LOCATION: KWA ZULU NATAL <br/><br/>
                      PROJECT VALUE: R 1.9BN <br/><br/>
                      PROJECT SUMMARY:   <br/><br/>

                      PROJECT BACKGROUND <br/><br/>`,
          text: `LTE was appointed by the Department of Water and Sanitation (DWS) to refurbish the Pongolapoort Dam and address the issues raised during the 2004 and 2008 dam safety reports. The dam safety issues include the rehabilitation of the hydromechanical components of the dam, including the radial gates, the canal inlets and outlets, sleeve valves, and civil modifications to improve operations there-of. Concerns about the dam being able to pass the dam Safety Evaluation Flood (SEF) event were raised, and this will require further investigations / clarifications and may require further civil engineering interventions. <br/>`,
          url: docx_pongo
        },
        {
          name: "SAAMBOU",
          url_id: "saambo",
          imgUrl: imgUrl_saambo, // require("@/assets/images/projects/SAAMBOU/1.jpg") ,
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/><br/>
                      PROJECT LOCATION: CITY OF TSHWANE <b/><br/>
                      PROJECT VALUE: R 90M <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The availability of developable land in Gauteng is becoming critical whilst the demand for housing is rapidly escalating. This has prompted the call for innovative design and a shift in the mind-set with regard to the rollout of housing opportunities in Gauteng, and subsequently, the country. Detailed Engineering studies for Roads and Stormwater, Water and Sanitation, Electricity, Traffic and Transportation, and Waste Use Management have been concluded to ensure that bulk and link supply as well as internal reticulation is adequately designed for a development of this magnitude. Accordingly, the LTE design team is in constant liaison with the relevant authorities for each specific discipline in order to ensure compliance and input from the onset to the completion of the project. The LTE design team has incorporated industry leading technologies in its design criteria so as to ensure environmental friendliness by reduced energy consumption, reduced waste generation and the use of alternative energy. Eco-mobility and reduced carbon footprints are hallmarks of the development. <br/>`,
          url: docx_saambo
        },
        {
          name: "SPRINGS FRESH PRODUCE",
          url_id: "springs-fresh-produce",
          imgUrl: imgUrl_springs, // require("~@/assets/images/projects/SPRINGS/1.jpg"),
          subHeader: `PROJECT NAME: SPRINGS FRESH PRODUCE MARKET<br/><br/>
                      PROJECT LOCATION: SPRINGS, CITY OF EKHURHULENI<br/><br/>
                      PROJECT VALUE: R 56M<br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Springs Fresh Produce Market, located at the corner of Paul Kruger Road and South Main Reef Road, Geduld, Springs, has been supporting local and regional farmers since 1985.
                 The market operates 24 hours a day, with deliveries taking place from evening to early the next morning. Once the market opens for sales, there is a vibrant atmosphere till closure, after which the process starts again. Due to the increase in demand for market space, COE Economic Development (COE ED), as custodians of the market, decided to add an additional 5000m2 of trading space. <br/>`,
          url: docx_springs
        },
        {
          name: "SYFERFONTEIN",
          url_id: "syferfontein",
          imgUrl: imgUrl_sys, // require("~@/assets/images/projects/SYFERFONTEIN/1.jpg"),
          subHeader: `PROJECT NAME: SYFERFONTEIN MEGA DEVELOPMENT <br/><br/>
                      PROJECT LOCATION: RAND WEST CITY, GAUTENG <br/><br/>
                      PROJECT VALUE: R 36BN <br/><br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE has been a partner to government in the planning, designing and implementation of low cost housing units since 2003. As a Professional Resource Team panel member at metropolitan, provincial and national levels, LTE has been involved in numerous projects across South Africa from Greenfields to Title Deed handover. Our expertise covers ground and environmental studies, spatial planning, bulk infrastructure and internal reticulation planning and design, architectural and structural designs, construction and construction management, and conveyancing. <br/>`,
          url: docx_sys
        }
      ],
      selectedProject: {}
    };
  },
  mounted() {
    if (this.$route.name == "projects-project" && this.$route.params.project) {
      var proj = this.$route.params.project;
      this.selectedProject = this.projects.filter(x => x.url_id == proj)[0];
    } else {
      this.$router.push({
        path: "/projects"
      });
    }
  },
  methods: {
    downloadProj(proj) {
      console.log(proj.url);
    }
  }
};
</script>

<style scoped>
.item-2 svg:hover {
  cursor: pointer;
}
</style>
