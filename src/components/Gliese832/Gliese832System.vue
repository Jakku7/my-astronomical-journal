<template>
  <div class="background">
    <Gliese832Planets :single="single" :planet="planet" />
  </div>
</template>

<script>
import Gliese832Planets from "./Gliese832Planets";
export default {
  name: "Gliese832",
  components: {
    Gliese832Planets,
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
