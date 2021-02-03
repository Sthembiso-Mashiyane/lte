<template>
  <div class="yellow-card">
    <div class="row">
      <div class="r p-10">
        <h3>{{ columns.hTag }}</h3>
      </div>
      <div class="col md-10 p" v-for="p in columns.pTag" :key="p">
        <div class="">
          <div class="">
            <p>{{ p }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/info/projects.json";
export default {
  name: "csiCopy",
  props: ["selectedId"],
  data() {
    return {
      columns: [],
    };
  },
  watch: {
    '$route': function(to, from) {
      console.log(from.params.id);
      this.render(to.params.id);
    },
  },
  beforeMount: function () {
    this.render(this.$route.params.id);
  },
  methods: {
    render(id) {
      var obj = json.filter((b) => b.id == id)[0];
      this.columns = obj;
    }
  }
};
</script>

<style scoped>
.r {
  width: 100%;
  text-align: center;
  margin: 20px;
}
.p {
  margin: 20px;
}
</style>
