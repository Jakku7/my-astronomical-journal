<template>
  <Navbar :system="system" :onChangeSystem="onChangeSystem" />
  <SolarSystem v-if="this.system === 'Solar System'" />
  <ProximaCentauri v-if="this.system === 'Proxima Centauri'" />
  <TauCeti v-if="this.system === 'Tau Ceti'" />
  <Data
    :single="single"
    :system="system"
    :planet="planet"
    :onChangePlanet="onChangePlanet"
  />
</template>

<script>
import SolarSystem from "./components/SolarSystem/SolarSystem.vue";
import Navbar from "./components/Navbar.vue";
import Data from "./components/Data.vue";
import ProximaCentauri from "./components/ProximaCentauri/ProximaCentauriSystem.vue";
import TauCeti from "./components/TauCeti/TauCetiSystem.vue";
export default {
  name: "App",
  components: {
    SolarSystem,
    ProximaCentauri,
    TauCeti,
    Navbar,
    Data,
  },
  data() {
    return {
      // single: false,
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
  font-family: "Astrolab";
  src: url("/assets/fonts/Astrolab.ttf") format("ttf");
}
body {
  padding: 0;
  margin: 0;
  background: #0b1728ff;
  min-height: 100vh;
  display: flex;
  margin: 0 12px;
  background-image: url("./assets/planets/space-texture.png");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 1024px;
  position: relative;
  margin: 12px auto;
  border: 6px dashed #10233c;
}
</style>
