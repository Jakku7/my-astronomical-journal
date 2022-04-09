<template>
  <div class="logotype">
    <router-link class="link" to="/">My Astronomical <span class="second-line">Journal</span></router-link>
    <router-link class="link" to="/diary">Diary</router-link>
  </div>
</template>

<script>
export default {
  name: "Logotype",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  text-decoration: none;
  color: #fff;
  display: block;
  line-height: 0.5;
  margin-top: 8px;
  margin-bottom: 24px;
  transition: 0.3s ease-in-out;
}
.link:hover {
  color: rgb(194, 194, 194);
}
.logotype {
  text-decoration: none;
  font-family: "Astrolab";
  color: #fff;
  padding: 24px;
  text-align: left;
}
.second-line {
  display: block;
  margin-top: 12px;
}
</style>
