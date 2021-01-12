<template>
  <Navbar :system="system" :onChangeSystem="onChangeSystem" />
  <System :planet="planet" :single="single" :system="system" />
  <Data
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
export default {
  name: "App",
  components: {
    System,
    Navbar,
    Data,
  },
  data() {
    return {
      single: false,
      system: "Solar System",
      planet: "Mercury",
    };
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
      switch (newSystem) {
        case "0":
          this.system = "Solar System";
          this.planet = "Mercury";
          break;
        case "1":
          this.system = "Proxima Centauri";
          this.planet = "Proxima Centauri b";
          break;
        case "2":
          this.system = "Tau Ceti";
          this.planet = "Tau Ceti e";
          break;
        case "3":
          this.system = "Gliese-832";
          this.planet = "Gliese-832 b";
          break;
        case "4":
          this.system = "Trappist-1";
          this.planet = "Trappist-1 b";
          break;
        default:
          this.system = "Solar System";
          this.planet = "Mercury";
      }
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
</style>
