<template>
  <div class="background">
    <Planets
      :objects="objects"
      :single="single"
      :system="system"
      :planet="planet"
    />
  </div>
</template>

<script>
import Planets from "./Planets";
export default {
  name: "System",
  components: {
    Planets,
  },
  props: {
    single: Boolean,
    planet: String,
    system: String,
    objects: Array,
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
