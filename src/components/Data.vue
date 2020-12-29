<template>
  <div class="container">
    <div class="data-wrapper">
      <p class="planets-title">Planets:</p>
      <select v-if="system === 'Solar System'" @change="onChangePlanet">
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>
      <select v-if="system === 'Proxima Centauri'" @change="onChangePlanet">
        <option value="Proxima Centauri b">Proxima Centauri b</option>
      </select>
      <select v-if="system === 'Tau Ceti'" @change="onChangePlanet">
        <option value="Tau Ceti e">Tau Ceti e</option>
        <option value="Tau Ceti f">Tau Ceti f</option>
        <option value="Tau Ceti g">Tau Ceti g</option>
        <option value="Tau Ceti h">Tau Ceti h</option>
      </select>
      <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
    </div>
    <div class="info-wrapper">
      <p class="planets-data-title">{{ planet }}:</p>
      <div
        class="planet-data"
        v-for="element in filteredPlanets"
        v-bind:key="element"
      >
        <p class="subtitle">Type: {{ element.type || "Unknown" }}</p>
        <p class="subtitle">Size: {{ element.size }}</p>
        <p class="subtitle">Orbit: {{ element.orbit || "Unknown" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { planets } from "../data/planets.js";
export default {
  name: "Data",
  props: {
    system: String,
    planet: String,
    onChangePlanet: Function,
  },
  data() {
    return {
      planets: planets,
    };
  },
  computed: {
    filteredPlanets() {
      return this.planets.filter((element) => {
        return element.name === this.planet;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: absolute;
  padding: 24px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
}
.data-wrapper {
  bottom: 0;
  font-family: "Astrolab";
  text-align: left;
}
.planets-title {
  font-family: "Astrolab";
  font-size: 12px;
  color: #fff;
  text-align: left;
}
.planets-data-title {
  font-family: "Astrolab";
  font-size: 12px;
  color: #fff;
  text-align: right;
}
.planet-data {
  text-align: right;
}
.subtitle {
  font-family: "Astrolab";
  font-size: 8px;
  color: #fff;
}
</style>
