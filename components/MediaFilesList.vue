<template>
  <div class="row">
    <div class="w-100 yellow" v-for="link in pdfFiles" v-bind:key="link.url">
      <a class="link"
        :href="link.url"
        target="_blank"
      >{{link.name}}</a>
      <hr/>
    </div>
  </div>
</template>

<script>
import pdf1 from "../assets/docx/media-news/Business_Day_22July2016_Lesotho_Highlands.pdf";
import pdf2 from "../assets/docx/media-news/M119_ Protocols_for_LTE_Operations_Under_Level4_Lockdown_Restrictions_1.pdf";
import pdf4 from "../assets/docx/media-news/M122_Gradual_Resumption_of_Office_Operations.pdf";
import pdf5 from "../assets/docx/media-news/Saturday_Star_30July2016_Sweetwaters.pdf";
import pdf6 from "../assets/docx/media-news/Sunday_Independent_31July2016_Lepelle.pdf";
export default {
  name: "MediaFilesList",
  data() {
    return {
      pdfFiles: []
    };
  },
  mounted() {
    this.pdfFiles = [
      { name: "Business Day 22July2016 Lesotho Highlands.pdf", url: pdf1 },
      {
        name:
          "M119 Protocols for LTE Operations Under Level4 Lockdown Restrictions 1.pdf",
        url: pdf2
      },
      { name: "M122 Gradual Resumption of Office Operations.pdf", url: pdf4 },
      { name: "Saturday Star 30July2016 Sweetwaters.pdf", url: pdf5 },
      { name: "Sunday Independent 31July2016 Lepelle.pdf", url: pdf6 }
    ];
  }
};
</script>

<style scoped>
.yellow {
  background-color: #ffac18;
  min-height: 40px;
}
.link {
  color: #ffeed0;
}
</style>
