<template>
  <div class="">
    <NavTwo />
    <PageHeader title="CSI" :imgUrl="imgUrl" />
    <CSIInfo />
     <div class="" v-for="csi of images" :key="csi.id">
      <CSIInteractive :selectedCSI="csi" />
    </div>
    <!-- <CSIFooter v-on:onCSIChanged="onCSIChanged($event)"/> -->
    <Footer />
  </div>
</template>

<script>
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import imgUrl from "~/assets/csi/galleryATF.png";
import CSIInfo from '../components/CSIInfo.vue';
import CSIInteractive from '../components/CSIInteractive.vue';
import CSIFooter from '../components/CSIFooter.vue';

import imgSrc_nh_01 from "~/assets/csi/NYAKALLONG_HOME/IMG-20190618-WA0013.jpg";
import imgSrc_lpp_03 from "~/assets/csi/LION PARK PRIMARY/20190718_133924.jpg";
import imgSrc_msa_01 from "~/assets/csi/MRS SOUTH AFRICA/IMG-20190618-WA0015.jpg";
import imgSrc_bbq from "~/assets/csi/BBQ/BBQ_2020.jpg";
export default {
  components: {
    PageHeader,
    Footer,
    NavTwo,
    CSIInfo,
    CSIInteractive,
    CSIFooter,
  },
  head() {
    return {
      title: "LTE Holdings | CSI"
    };
  },
  data() {
    return { imgUrl, selectedCSI: "nyakalong-home", images: []};
  },
  methods: {
    onCSIChanged(data) {
      this.selectedCSI = data;
    },
     getArray() {
      var all = [
        {
          id: "nyakalong-home",
          name: "Nyakalong Home",
          hTag: "SUPPORT FOR NYAKALONG HOME",
          pTag: [
            "Nyakalong Home in Sebokeng is a Non-Profit–Organisation that provides shelter for children living with physical and mental disability. Nyakalong Home currently houses 25 children ranging from ages 6 to 35. In June 2019 LTE Consulting made a donation to Nyakalong home to assist with groceries; basic supplies; blankets; heaters and has procured 2 hospital beds and 10 wheel chairs. In conjunction with Maponya Ambulances, LTE through Mr. Thulani Majola has undertaken to continue assisting this home into the future."
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
        }
      ];
      return all;
    }
  },
  mounted() {
    this.images = this.getArray();
    console.log('all: ',this.images);
  }
};
</script>

<style></style>
