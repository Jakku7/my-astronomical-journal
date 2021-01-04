<template>
  <div class="background">
    <Trappist1Planets :single="single" :system="system" :planet="planet" />
  </div>
</template>

<script>
import Trappist1Planets from "./Trappist1Planets";
export default {
  name: "Trappist-1",
  components: {
    Trappist1Planets,
  },
  props: {
    single: Boolean,
    planet: String,
    system: String,
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
