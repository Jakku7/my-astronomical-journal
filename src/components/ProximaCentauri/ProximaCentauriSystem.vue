<template>
  <div class="background">
    <ProximaPlanets :single="single" :planet="planet" />
  </div>
</template>

<script>
import ProximaPlanets from "./ProximaCentauriPlanets";
export default {
  name: "ProximaCentauri",
  components: {
    ProximaPlanets,
  },
  props: {
    single: Boolean,
    planet: String,
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
  background: #ffffff0a;
  width: 100%;
}
</style>
