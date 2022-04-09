<template>
    <div class="diary">
        <Lottie
        :options="defaultOptions"
        :height="300"
        :width="300"
        v-on:animCreated="handleAnimation"
        />
         <h2 class="loading">Soon!</h2>
    </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/lottie/space.json";
export default {
  name: "Diary",
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData?.default,
        loop: true,
        autoplay: true,
      },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    stop: function() {
      this.anim.stop();
    },
    play: function() {
      this.anim.play();
    },
    pause: function() {
      this.anim.pause();
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style>
.diary {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    align-content: center;
    flex-direction: column;
    position: relative;
}
.loading {
    margin: 0 auto;
    font-size: 30px;
}
.lottie {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: -1;
}
</style>
