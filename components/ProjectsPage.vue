<template>
  <div class="project-area project-page">
    <div class="container">
      <div class="row justify-content-center">
        <div v-for="(proj, i) of projects" :key="i" class="col-lg-6 col-md-7" @click="selectProject(proj)">
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img :src="proj.imgUrl" alt="projects" />
            </div>
            <div class="project-content">
              <nuxt-link :to="{name: 'projects-project', params: {project: proj.url_id}}"
                ><span>{{proj.name}}</span></nuxt-link
              >
              <p v-html="proj.subHeader"></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import imgUrl_acsa from '~/assets/projects/ACSA/1.jpg'
  import imgUrl_cogta from '~/assets/projects/COGTA/1.jpg'
  import imgUrl_sys from '~/assets/projects/SYFERFONTEIN/1.jpg'
  import imgUrl_temba from '~/assets/projects/TEMBA/1.jpg'
  import imgUrl_weld from '~/assets/projects/WELBEDACHT/1.jpg'
  import imgUrl_emm from '~/assets/projects/EMM_BRT/1.jpg'
  import imgUrl_klip from '~/assets/projects/KLIPDRIF/1.jpg'
  import imgUrl_lenasia from '~/assets/projects/LENASIA/4.jpg'
  import imgUrl_mang from '~/assets/projects/MANGAUNG/1.jpg'
  import imgUrl_nwam from '~/assets/projects/NWAMITWA/1.jpg'
  import imgUrl_pongo from '~/assets/projects/PONGOLAPOORT/1.jpg'
  import imgUrl_saambo from '~/assets/projects/SAAMBOU/1.jpg'
  import imgUrl_springs from '~/assets/projects/SPRINGS/1.jpg'

export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          name: "EMM BRT",
          url_id: "emm-brt",
          imgUrl: imgUrl_emm, // "~/assets/images/projects/EMM_BRT/1.jpg",
          subHeader: `PROJECT NAME: EKURHULENI METROPOLITAN MUNICIPALITY BRT <br/>
                      PROJECT LOCATION: CITY OF EKHURHULENI <br/>
                      PROJECT VALUE: R 750M <br/>
                      PROJECT SUMMARY: <br/>  <br/> `,
          text: `LTE was mandated to provide expert engineering services for the Ekurhuleni Metropolitan Municipality (EMM),
                 which is attending to the needs of its residents for improved mobility and an overall enhancement of their travel experience. EMM is implementing phase 1A of the Integrated Rapid Transit Network (IRPTN) which currently spans from Tembisa to Kempton Park. <br/>`,
        },
        {
          name: "COGTA",
          url_id: "cogta",
          imgUrl: imgUrl_cogta, // require("@/assets/images/projects/COGTA/1.jpg"),
          subHeader: `PROJECT NAME: COGTA KZN ASSESSMENTS <br/>
                      PROJECT LOCATION: PROVINCE OF KWAZULU-NATAL <br/>
                      PROJECT VALUE: R 35M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE conducted the assessment of the state of municipal water, sanitation and electricity infrastructure in the ten (10) District Municipalities (DM’s) of the Province of KwaZulu-Natal (KZN) on behalf of the Cooperative Governance and Traditional Affairs (COGTA) KZN. <br/><br/>
                 The outcomes of this assessment study will play a crucial role in guiding COGTA KZN towards achieving, and maintaining its policy objectives as defined by the vision, mission and value statements of contributing to the socio-economic development of the Province of KZN by coordinating and fostering co-operation amongst governance institutions and will build capacity to accelerate delivery of high quality services to communities. <br/>`
        },
        {
          name: "ACSA",
          url_id: "acsa",
          imgUrl: imgUrl_acsa, // require("@/assets/images/projects/ACSA/1.jpg"),
          subHeader: `PROJECT NAME: ACSA BUSSING DOORS <br/>
                      PROJECT LOCATION: OR TAMBO INTERNATIONAL AIRPORT, CITY OF EKHURHULENI <br/>
                      PROJECT VALUE: R 45M <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield.
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
        },
        {
          name: "KLIPDRIFT WATER TREATMENT",
          url_id: "klipdrift-water-treatment",
          imgUrl: imgUrl_klip, // require("@/assets/images/projects/KLIPDRIF/1.jpg"),
          subHeader: `PROJECT NAME: KLIPDRIFT WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: MORETELE METROPOLITAN MUNICIPALITY <br/>
                      PROJECT VALUE: R 350M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting in association with Royal HaskoningDHV (formerly SSI Engineers and Environmental Consultants (Pty) Ltd were appointed on 13 June 2012 as the Professional Service Provider for Contract MW/KBWS01/2011: Planning and Design of the Upgrade and Extension of the Klipdrift Water Treatment Works (WTW). They have been instructed to provide findings that will determine whether the proposed construction works related to the Klipdrift Water Treatment Works are viable. <br/> <br/>
                 Royal HaskoningDHV and LTE Consulting are required to produce a feasibility study that informs of possible integration of the Wallmannsthal and Klipdrift WTW areas of supply including water resources. They are also expected to see to the planning, design and construction site attendance of bulk water supply infrastructure in the areas identified by the client. The work required includes among other things the raising of a weir in Pienaars River, alterations to the Steve Bikoville reservoir and a new clear water reservoir. <br/>`
        },
        {
          name: "LENASIA HOSPITAL",
          url_id: "lenasia-hospital",
          imgUrl: imgUrl_lenasia, // require("@/assets/images/projects/LENASIA/1.jpg"),
          subHeader: `PROJECT NAME: LENASIA COMMUNITY HEALTH CENTRE <br/>
                      PROJECT LOCATION: LENASIA, CITY OF JOHANNESBURG <br/>
                      PROJECT VALUE: R 450M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE Consulting was appointed by ACSA to undertake work on the extension of the international departures bussing gates at OR Tambo International Airport. <br/><br/>
                 The works currently taking place at Oliver Tambo International Airport include the development of a current strip of land located between the airport’s runways which is referred to as Midfield.
                 The development will consist of two major terminal precincts of which additional gates are required to expand the capacity of the terminal buildings to ensure that the new and remote terminal are suitably fed from the new gates. In order to achieve this master plan, the bussing gate program is being divided into two phases. The terminal building is being constructed to accommodate a minimum of ten additional international bussing gates.  So far it has been established that there will be four additional gates constructed under Phase 1 and ten additional bussing gates under Phase 2. <br/>`,
        },
        {
          name: "WELBEDACHT PIPELINE",
          url_id: "welbedacht-pipeline",
          imgUrl: imgUrl_weld, // require("@/assets/images/projects/WELBEDACHT/1.jpg"),
          subHeader: `PROJECT NAME: WELBEDACHT PIPELINE <br/>
                    PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY <br/>
                    PROJECT VALUE: R 450M <br/>
                    PROJECT SUMMARY: <br/>
                    Project Background  <br/><br/>`,
          text: `The Caledon-Bloemfontein Potable Water Supply Scheme, representing the principal bulk water supply to Mangaung Metropolitan Municipality (MMM) supplies water from the Welbedacht Dam Water Treatment Plant (WTP) to nearby De Hoek Reservoir, from where it gravitates via Uitkijk Reservoir
                 to Brandkop Reservoir located in Bloemfontein. The entire 105,7km section of the gravity pipeline between De Hoek and Brandkop Reservoirs has reached its design lifespan, and due to its poor condition experiences water leakages and is prone to frequent bursts resulting in severe water disruptions to the Mangaung area spillway. <br/>`,
        },
        {
          name: "TEMBA BABALEGI",
          url_id: "temba-babalegi",
          imgUrl: imgUrl_temba, // require("@/assets/images/projects/TEMBA/1.jpg"),
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: CITY OF TSHWANE <br/>
                      PROJECT VALUE: R 90M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The City of Tshwane (CoT) has embarked on the project to upgrade and extend the Temba and Babelegi Waste Water Treatment Works
                (WWTW) to address the large backlog in the provision of waterborne sanitation to the communities in the greater Temba area. The project is an essential to remove to the development constraint caused by the lack of capacity at the WWTW’s to the development of the area. More than 36 000 existing residential stands will benefit from this project and unlock further economic development in the area. <br/>`
        },
        {
          name: "MANGAUNG ZOO",
          url_id: "mangaung-zoo",
          imgUrl: imgUrl_mang, // require("@/assets/images/projects/MANGAUNG/1.jpg"),
          subHeader: `PROJECT NAME: MANGAUNG WILDLIFE SANCTUARY AND ZOO<br/>
                      PROJECT LOCATION: BLOEMFONTEIN, MANGAUNG METROPOLITAN MUNICIPALITY<br/>
                      PROJECT VALUE: R 350M<br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Mangaung Wildlife Sanctuary and Zoo is intended to become a world-class facility; a destination of choice not only within the region, and in the country, but in the continent as a whole. <br/>
                 The current facilities are based on a classic Victorian design, which over years of research and responsible management; have been proven to significantly fall short of an ideal enclosure environment for animals, guests, and the forefront of wildlife research and rehabilitation. <br/>
                 The project will move away from the concept of simple “people see animals” enclosures; to developing integrated habitat settings that focus on complimentary species integration (faunal and floral) within the habitat biomes. <br/>
                 The opportunity to harness the facility and resources to educate and expose the next generations to leading research and conversation practices will not be missed. The facility will cater for edutainment tours, rather than simply focusing on the animals and vegetation; but incorporating the rich history of the area. The Boer and indigenous cultural history will be incorporated with the geological and possible palaeontological characteristics of the area. <br/>`,
        },
        {
          name: "NWAMITWA DAM",
          url_id: "nwamitwa-dam",
          imgUrl: imgUrl_nwam, // require("@/assets/images/projects/NWAMITWA/1.jpg"),
          subHeader: `PROJECT NAME: NWAMITWA DAM <br/>
                      PROJECT LOCATION: LIMPOPO PROVINCE <br/>
                      PROJECT VALUE: R 5BN <br/>
                      PROJECT SUMMARY:  <br/> <br/>

                      PROJECT BACKGROUND<br/><br/>`,
          text: `The national Department of Water and Sanitation (DWS) has prioritised the development of the Nwamitwa Dam project. It forms the backbone of the Groot Letaba Water Development Project (GLeWaP), a national high priority project. This project is part of a greater strategic imperative to ensure resource security in South Africa. Six proposed dams and related infrastructure were highlighted, including the Nwamitwa Dam, increase of the dam wall at the existing Tzaneen Dam in Limpopo, new dams at the Mzimvubu River in the Eastern Cape, the expansion of the Clanwilliam Dam in the Western Cape, the Hazelmere Dam in KwaZulu-Natal and the Polihali Dam in Lesotho which will provide water to Gauteng <br/>`,
        },
        {
          name: "PONGOLAPOORT DAM",
          url_id: "pongolapoort-dam",
          imgUrl: imgUrl_pongo, // require("@/assets/images/projects/PONGOLAPOORT/1.jpg"),
          subHeader: `PONGOLAPOORT DAM TEXT <br/>
                      PROJECT LOCATION: KWA ZULU NATAL <br/>
                      PROJECT VALUE: R 1.9BN <br/>
                      PROJECT SUMMARY:   <br/><br/>

                      PROJECT BACKGROUND <br/><br/>`,
          text: `LTE was appointed by the Department of Water and Sanitation (DWS) to refurbish the Pongolapoort Dam and address the issues raised during the 2004 and 2008 dam safety reports. The dam safety issues include the rehabilitation of the hydromechanical components of the dam, including the radial gates, the canal inlets and outlets, sleeve valves, and civil modifications to improve operations there-of. Concerns about the dam being able to pass the dam Safety Evaluation Flood (SEF) event were raised, and this will require further investigations / clarifications and may require further civil engineering interventions. <br/>`
        },
        {
          name: "SAAMBOU",
          url_id: "saambo",
          imgUrl: imgUrl_saambo, // require("@/assets/images/projects/SAAMBOU/1.jpg") ,
          subHeader: `PROJECT NAME: THE EXTENSION OF THE TEMBA AND BABELEGI WASTE WATER TREATMENT WORKS <br/>
                      PROJECT LOCATION: CITY OF TSHWANE <b/>
                      PROJECT VALUE: R 90M <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The availability of developable land in Gauteng is becoming critical whilst the demand for housing is rapidly escalating. This has prompted the call for innovative design and a shift in the mind-set with regard to the rollout of housing opportunities in Gauteng, and subsequently, the country. Detailed Engineering studies for Roads and Stormwater, Water and Sanitation, Electricity, Traffic and Transportation, and Waste Use Management have been concluded to ensure that bulk and link supply as well as internal reticulation is adequately designed for a development of this magnitude. Accordingly, the LTE design team is in constant liaison with the relevant authorities for each specific discipline in order to ensure compliance and input from the onset to the completion of the project. The LTE design team has incorporated industry leading technologies in its design criteria so as to ensure environmental friendliness by reduced energy consumption, reduced waste generation and the use of alternative energy. Eco-mobility and reduced carbon footprints are hallmarks of the development. <br/>`
        },
        {
          name: "SPRINGS FRESH PRODUCE",
          url_id: "springs-fresh-produce",
          imgUrl: imgUrl_springs, // require("~@/assets/images/projects/SPRINGS/1.jpg"),
          subHeader: `PROJECT NAME: SPRINGS FRESH PRODUCE MARKET<br/>
                      PROJECT LOCATION: SPRINGS, CITY OF EKHURHULENI<br/>
                      PROJECT VALUE: R 56M<br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `The Springs Fresh Produce Market, located at the corner of Paul Kruger Road and South Main Reef Road, Geduld, Springs, has been supporting local and regional farmers since 1985.
                 The market operates 24 hours a day, with deliveries taking place from evening to early the next morning. Once the market opens for sales, there is a vibrant atmosphere till closure, after which the process starts again. Due to the increase in demand for market space, COE Economic Development (COE ED), as custodians of the market, decided to add an additional 5000m2 of trading space. <br/>`
        },
        {
          name: "SYFERFONTEIN",
          url_id: "syferfontein",
              imgUrl: imgUrl_sys, // require("~@/assets/images/projects/SYFERFONTEIN/1.jpg"),
          subHeader: `PROJECT NAME: SYFERFONTEIN MEGA DEVELOPMENT <br/>
                      PROJECT LOCATION: RAND WEST CITY, GAUTENG <br/>
                      PROJECT VALUE: R 36BN <br/>
                      PROJECT SUMMARY: <br/><br/>`,
          text: `LTE has been a partner to government in the planning, designing and implementation of low cost housing units since 2003. As a Professional Resource Team panel member at metropolitan, provincial and national levels, LTE has been involved in numerous projects across South Africa from Greenfields to Title Deed handover. Our expertise covers ground and environmental studies, spatial planning, bulk infrastructure and internal reticulation planning and design, architectural and structural designs, construction and construction management, and conveyancing. <br/>`,
        }
      ]
    };
  },
  methods: {
       selectProject(project) {
      this.$emit("onProjectChanged", project);
    },
  }
};
</script>

<style scoped>
  .project-thumb img {
        width: 570px;
        height: 380px;
  }
</style>
