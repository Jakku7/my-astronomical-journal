<template>
  <div class="container">
    <div class="data-wrapper">
      <p class="planets-title">Planets:</p>
      <select @change="onChangePlanet">
        <option
          v-for="elements in systemPlanets"
          v-bind:value="elements.name"
          v-bind:key="elements.name"
          v-bind:selected="elements.name === planet && 'selected'"
        >
          {{ elements.name }}
        </option>
      </select>
      <input
        class="checkbox"
        type="checkbox"
        id="checkbox"
        v-model="checked"
        @change="onChangeSingle"
      />
      <label for="checkbox" class="checkbox-label">Show this planet</label>
    </div>
    <div class="info-wrapper">
      <p class="planets-data-title">{{ planet }}:</p>
      <div
        class="planet-data"
        v-for="element in filteredPlanets"
        v-bind:key="element"
      >
        <p class="subtitle">Type: {{ element.type || "Unknown" }}</p>
        <p class="subtitle">Size: {{ element.size || "Unknown" }}</p>
        <p class="subtitle">Orbit: {{ element.orbit || "Unknown" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    single: Boolean,
    system: String,
    planet: String,
    onChangeSingle: Function,
    onChangePlanet: Function,
    objects: Array,
  },
  computed: {
    filteredPlanets() {
      return this.objects.filter((element) => {
        return element.name === this.planet;
      });
    },
    systemPlanets() {
      return this.objects.filter((element) => {
        return element.system === this.system && element.type !== "star";
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
.checkbox {
  position: relative;
  top: 2px;
}
.checkbox-label {
  color: #fff;
  font-size: 8px;
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
