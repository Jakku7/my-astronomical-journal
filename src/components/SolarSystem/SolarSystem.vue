<template>
  <div class="background">
    <SolarPlanets />
  </div>
</template>

<script>
import SolarPlanets from "./SolarPlanets.vue";
export default {
  name: "Solar System",
  components: {
    SolarPlanets,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  height: calc(100vh - 50px);
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  background: #ffffff0a;
}
</style>
