<template>
  <div class="container">
    <div class="row">
      <div class="w-100 my-5 mx-auto vid-container">
        <video controls autoplay class="w-100">
          <source src="@/assets/3615 LTE Consulting 30 Sec.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="row hidden">
      <div class="mx-auto">
        <p>Or Listen:</p>
        <div class="btn btn-info" @click="playOrPause()">{{ playPause }}</div>
      </div>
    </div>
    <div class="row">
      <div class="mx-auto"></div>
    </div>
  </div>
</template>

<script>
import vid from "~/assets/3615 LTE Consulting 30 Sec.mp4";
export default {
  name: "VideoATF",
  data() {
    return {
      vid,
      playPause: "Play",
      audio: null
    };
  },
  methods: {
    ended: function(){
      this.playPause = "Play";
    },
    playOrPause: function() {
      if(!this.audio){
        this.audio = new Audio("~/assets/lte-audio.mp3");
      }
      if(this.playPause == "Play"){
          this.playPause = "Pause";
          if(this.audio){
            this.audio.play();
          }
      } else {
        this.playPause = "Play";
          if(this.audio){
            this.audio.pause();
          }
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
}
.hidden {
  visibility: hidden;
}
</style>
