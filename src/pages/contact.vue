<template>
  <div class="">
    <ContactATF></ContactATF>
    <ContactInfo></ContactInfo>
    <ContactMap></ContactMap>
    <ContactForm></ContactForm>
    <ContactLocations></ContactLocations>
  </div>
</template>

<script>
import ContactATF from "@/components/contact/ContactATF";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocations from "@/components/contact/ContactLocations";

export default {
  name: "contact",
  components: {ContactLocations, ContactForm, ContactMap, ContactInfo, ContactATF}
}
</script>

<style scoped>

</style>
