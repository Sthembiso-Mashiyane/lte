<template>
  <div class="row yellow-card mx-auto text-center">
    <div class="col-10 mx-auto">
      <div class="">
        <div class="mt-5">
          <swiper :options="swiperOptions">
            <swiper-slide
              v-for="image of selectedImages.imagesURLS"
              :key="image.id"
              class="slider"
            >
              <div class="">
                <div class="">
                  <img :src="image.url" class="fluid" alt="" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="row yellow-text my-n5 w-100">
      <div class="col-12 mb-5">
        <div class="text-center mt-5">
          <div class="mt-5 pt-5">
            <div class="mt-5 ">
              <h2 class="title">
                {{selectedImages.info.hTag}}
              </h2>
            </div>
            <p class="m-4" v-for="par of selectedImages.info.pTag" :key="par">
              {{par}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import imgSrc_nh_01 from "~/assets/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg";
import imgSrc_lpp_01 from "~/assets/csi/LION PARK PRIMARY/20190718_131702.jpg";
import imgSrc_lpp_02 from "~/assets/csi/LION PARK PRIMARY/20190718_133351.jpg";
import imgSrc_lpp_03 from "~/assets/csi/LION PARK PRIMARY/20190718_133924.jpg";
import imgSrc_msa_01 from "~/assets/csi/MRS SOUTH AFRICA/IMG-20190618-WA0015.jpg";
import imgSrc_bbq from "~/assets/csi/BBQ/BBQ_2020.jpg";

export default {
  name: "CSIInteractive",
  scrollToTop: true,
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      selectedImages: {
        id: "",
        imagesURLS: [{url: imgSrc_msa_01}],
        info: {
          hTag: "SUPPORT FOR NYAKALONG HOME",
          pTag: [
            "Nyakalong Home in Sebokeng is a Non-Profit –Organisation that provides shelter for children living with physical and mental disability. Nyakalong Home currently houses 25 children ranging from ages 6 to 35. In June 2019 LTE Consulting made a donation to Nyakalong home to assist with groceries; basic supplies; blankets; heaters and has procured 2 hospital beds and 10 wheel chairs. In conjunction with Maponya Ambulances, LTE through Mr. Thulani Majola has undertaken to continue assisting this home into the future."
          ]
        }
      },
    };
  },
  methods: {
     getArray() {
     var all = [
        {
          id: "nyakalong-home",
          name: "Nyakalong Home",
          hTag: "SUPPORT FOR NYAKALONG HOME",
          pTag: [
            "Nyakalong Home in Sebokeng is a Non-Profit –Organisation that provides shelter for children living with physical and mental disability. Nyakalong Home currently houses 25 children ranging from ages 6 to 35. In June 2019 LTE Consulting made a donation to Nyakalong home to assist with groceries; basic supplies; blankets; heaters and has procured 2 hospital beds and 10 wheel chairs. In conjunction with Maponya Ambulances, LTE through Mr. Thulani Majola has undertaken to continue assisting this home into the future."
          ],
          img_url: imgSrc_nh_01
        },
        {
          id: "lion-park-primary",
          name: "LION PARK PRIMARY",
          hTag: "ASSISTANCE TO LION PARK PRIMARY SCHOOL",
          pTag: [
            "For the past 3 years LTE Consulting has being supporting the Lion Park Primary School in situated in one of the developing areas south of Lion Park township in Gauteng. The school provides classes from Grade R to Grade 7 to mostly children from very disadvantaged areas such as Kya Sands and Lion Park. LTE has been assisting the school with stationary for over 1000 learners from the past two years. The stationary which the Company buys in bulk is delivered annually to the school to help augment what the school receives from the Department of Education."
          ],
          img_url: imgSrc_lpp_03
        },
        {
          id: "miss-south-africa",
          name: "MISS SOUTH AFRICA",
          hTag: "MRS. SOUTH AFRICA – TOP 25",
          pTag: [
            "Mrs. South Africa held a Charity Gala Dinner on the 28th of June at Emperors palace to raise funds in aid of the Women4Women charity foundation. Women4Women raises funds to support charitable causes brought forward by the Mrs. South Africa contestants and awards bursaries to previously disadvantaged students.",
            "As a Silver Sponsor, LTE Consulting was in favour of supporting causes that advance development of previously disadvantaged communities or individuals. This falls in line with our own goals and values with regard to social upliftment initiatives."
          ],
          img_url: imgSrc_msa_01
        },
        {
          id: "bbq-awards",
          name: "BLACK BUSINESS QUARTERLY AWARDS",
          hTag: "BLACK BUSINESS QUARTERLY AWARDS",
          pTag: [
            "The distinguished Black Business Quarterly Awards, held annually to celebrate excellence in emerging and established businesses, have been a valued partner of LTE for the past four years. In these years, LTE has been a sponsor for the Corporate Social Investment Award (CSI), to help raise awareness of the importance of giving back to society as corporates.",
            "Attached to the sponsorship has been a R100 – 000.00 donation to charities identified by the Award winner. This has assisted many NGOs based in the Eastern and Western Cape as we have had winners of this category who are based in the two Provinces.",
            "Beyond many initiatives directly linked to education, LTE has assisted departments such as the Department of Local Government and Housing through the MEC’s office to build and furnish houses for disadvantaged families in many underdeveloped places such as Duduza, Tsakane and Hammanskraal."
          ],
          img_url: imgSrc_bbq
        },
        {
          id: "lte-universities",
          name: "LTE UNIVERSITIES",
          hTag: "LTE ASSISTS GAUTENG’S TOP UNIVERSITIES",
          pTag: [
            "Through the efforts of Thulani Majola, LTE Executive Chairman & Group CEO, LTE has formed a partnership with three of the country’s top institutions of higher learning in Gauteng being Wits University, Tshwane University of Technology and the University of Johannesburg to support the development of young Civil Engineers.",
            "As a formidable business in the built environment, we recognised the need to contribute towards the development of talented young engineers, especially those coming from previously disadvantaged communities and backgrounds.",
            "Through this partnership, LTE has contributed in excess of R1.5m in tuition fees to students in engineering faculties in these institutions who could not graduate due to arrears in tuition fees. "
          ],
        },
        {
          id: "csi-blurb",
          name: "CSI BLURB",
          hTag: "CSI BLURB",
          pTag: [
            "Corporate Social Investment\nCSI is interwoven into the fabric of LTE and we believe that for LTE to continue being a success, we need to adopt sustainable business practices that benefit business and the society beyond the bottom line. LTE Consulting is invested in affirming historically disadvantaged individuals within South African communities. Our commitment to economic empowerment is central to our group of companies. It extends to recruitment, education, career development, knowledge transfer as well as capacity building in the broader community."
          ],
        }
      ];
      return all;
    },
    renderSelected(id) {
      var obj = this.galleryGroups.filter(b => b.id == id)[0];
      obj.images = this.requireImages(obj.id);
      this.selectedImages = obj;
      this.setText(id);
    },
    getArray() {
     var all = [
        {
          id: "nyakalong-home",
          name: "Nyakalong Home",
          hTag: "SUPPORT FOR NYAKALONG HOME",
          pTag: [
            "Nyakalong Home in Sebokeng is a Non-Profit –Organisation that provides shelter for children living with physical and mental disability. Nyakalong Home currently houses 25 children ranging from ages 6 to 35. In June 2019 LTE Consulting made a donation to Nyakalong home to assist with groceries; basic supplies; blankets; heaters and has procured 2 hospital beds and 10 wheel chairs. In conjunction with Maponya Ambulances, LTE through Mr. Thulani Majola has undertaken to continue assisting this home into the future."
          ],
          img_url: imgSrc_nh_01
        },
        {
          id: "lion-park-primary",
          name: "LION PARK PRIMARY",
          hTag: "ASSISTANCE TO LION PARK PRIMARY SCHOOL",
          pTag: [
            "For the past 3 years LTE Consulting has being supporting the Lion Park Primary School in situated in one of the developing areas south of Lion Park township in Gauteng. The school provides classes from Grade R to Grade 7 to mostly children from very disadvantaged areas such as Kya Sands and Lion Park. LTE has been assisting the school with stationary for over 1000 learners from the past two years. The stationary which the Company buys in bulk is delivered annually to the school to help augment what the school receives from the Department of Education."
          ],
          img_url: imgSrc_lpp_03
        },
        {
          id: "miss-south-africa",
          name: "MISS SOUTH AFRICA",
          hTag: "MRS. SOUTH AFRICA – TOP 25",
          pTag: [
            "Mrs. South Africa held a Charity Gala Dinner on the 28th of June at Emperors palace to raise funds in aid of the Women4Women charity foundation. Women4Women raises funds to support charitable causes brought forward by the Mrs. South Africa contestants and awards bursaries to previously disadvantaged students.",
            "As a Silver Sponsor, LTE Consulting was in favour of supporting causes that advance development of previously disadvantaged communities or individuals. This falls in line with our own goals and values with regard to social upliftment initiatives."
          ],
          img_url: imgSrc_msa_01
        },
        {
          id: "bbq-awards",
          name: "BLACK BUSINESS QUARTERLY AWARDS",
          hTag: "BLACK BUSINESS QUARTERLY AWARDS",
          pTag: [
            "The distinguished Black Business Quarterly Awards, held annually to celebrate excellence in emerging and established businesses, have been a valued partner of LTE for the past four years. In these years, LTE has been a sponsor for the Corporate Social Investment Award (CSI), to help raise awareness of the importance of giving back to society as corporates.",
            "Attached to the sponsorship has been a R100 – 000.00 donation to charities identified by the Award winner. This has assisted many NGOs based in the Eastern and Western Cape as we have had winners of this category who are based in the two Provinces.",
            "Beyond many initiatives directly linked to education, LTE has assisted departments such as the Department of Local Government and Housing through the MEC’s office to build and furnish houses for disadvantaged families in many underdeveloped places such as Duduza, Tsakane and Hammanskraal."
          ],
          img_url: imgSrc_bbq
        },
        {
          id: "lte-universities",
          name: "LTE UNIVERSITIES",
          hTag: "LTE ASSISTS GAUTENG’S TOP UNIVERSITIES",
          pTag: [
            "Through the efforts of Thulani Majola, LTE Executive Chairman & Group CEO, LTE has formed a partnership with three of the country’s top institutions of higher learning in Gauteng being Wits University, Tshwane University of Technology and the University of Johannesburg to support the development of young Civil Engineers.",
            "As a formidable business in the built environment, we recognised the need to contribute towards the development of talented young engineers, especially those coming from previously disadvantaged communities and backgrounds.",
            "Through this partnership, LTE has contributed in excess of R1.5m in tuition fees to students in engineering faculties in these institutions who could not graduate due to arrears in tuition fees. "
          ],
        },
        {
          id: "csi-blurb",
          name: "CSI BLURB",
          hTag: "CSI BLURB",
          pTag: [
            "Corporate Social Investment\nCSI is interwoven into the fabric of LTE and we believe that for LTE to continue being a success, we need to adopt sustainable business practices that benefit business and the society beyond the bottom line. LTE Consulting is invested in affirming historically disadvantaged individuals within South African communities. Our commitment to economic empowerment is central to our group of companies. It extends to recruitment, education, career development, knowledge transfer as well as capacity building in the broader community."
          ],
        }
      ];
      return all;
    },
    renderSelected(id) {
      var obj = this.galleryGroups.filter(b => b.id == id)[0];
      obj.images = this.requireImages(obj.id);
      this.selectedImages = obj;
      this.setText(id);
    }
  },
  beforeMount() {
    this.id = this.$route.params.id;
    if (!this.id) {
      return;
    }
    this.renderSelected(this.id);
  },
  watch: {
    "$route.params.csi": function(params) {
        console.log('CSI-Param-Change: ', params);
        this.selectedImages.imagesURLS = this.requireImages(params);
        this.setText(params);
        window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.yellow-text {
  min-height: 450px;
  background-color: #ffac18;
}
.my-15 {
  margin-top: 30%;
}
.slider {
    height: 510px;
       object-fit: cover;
}
</style>
