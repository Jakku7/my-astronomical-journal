<template>
  <Navbar
    v-bind:objects="objects"
    :system="system"
    :onChangeSystem="onChangeSystem"
  />
  <System
    v-bind:objects="objects"
    class="system"
    v-bind:class="{ active: !objects?.length }"
    :planet="planet"
    :single="single"
    :system="system"
  />
  <div class="lottie" v-bind:class="{ active: objects?.length }">
    <p class="loading">Loading...</p>
    <Lottie
      :options="defaultOptions"
      :height="300"
      :width="300"
      v-on:animCreated="handleAnimation"
    />
  </div>
  <Data
    v-bind:objects="objects"
    :single="single"
    :system="system"
    :planet="planet"
    :onChangePlanet="onChangePlanet"
    :onChangeSingle="onChangeSingle"
  />
</template>

<script>
// import SolarSystem from "./components/SolarSystem/SolarSystem.vue";
import System from "./components/System.vue";
import Navbar from "./components/Navbar.vue";
import Data from "./components/Data.vue";
import Lottie from "vue-lottie";
import * as animationData from "@/assets/lottie/rocket-2.json";
import axios from "axios";
export default {
  name: "App",
  components: {
    System,
    Navbar,
    Data,
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData?.default,
        loop: true,
        autoplay: true,
      },
      single: false,
      system: "Solar System",
      planet: "Mercury",
      objects: [],
      animationSpeed: 1,
    };
  },
  mounted() {
    axios
      .get("https://my-astronomical-journal-dash.herokuapp.com/objects")
      .then((response) => (this.objects = response.data));
  },
  methods: {
    onChangePlanet(event) {
      this.setPlanet(event.srcElement.value);
    },
    onChangeSystem(event) {
      this.setSystem(event.srcElement.value);
    },
    setPlanet(newPlanet) {
      this.planet = newPlanet;
    },
    onChangeSingle() {
      this.single = !this.single;
    },
    setSystem(newSystem) {
      this.system = newSystem;
    },
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
@font-face {
  font-family: "astrolabregular";
  src: url("/assets/fonts/astrolab-webfont.woff2") format("woff2"),
    url("/assets/fonts/astrolab-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
body {
  padding: 0;
  margin: 0;
  background: #0c1828;
  min-height: 100vh;
  display: flex;
  margin: 0 12px;
  background-image: url("./assets/planets/space-texture.png");
  background-size: 25% 25%;
  text-align: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0c1828;
  width: 100%;
  position: relative;
  margin: 12px auto;
  min-width: 600px;
  display: flex;
  justify-content: center;
}
.active {
  opacity: 0;
}
.loading {
  color: white;
  font-family: "Astrolab";
  font-size: 12px;
  margin-bottom: -12px;
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
.system {
  transition: 1s ease-in-out;
}
</style>
