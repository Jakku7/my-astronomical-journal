<template>
  <div class="menu-wrapper">
    <div class="menu">System:</div>
    <p class="system">{{ system }}</p>
    <select class="select" @change="onChangeSystem">
      <option :value="0">Solar System</option>
      <option :value="1">Proxima Centauri</option>
      <option :value="2">Tau Ceti</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    system: String,
    onChangeSystem: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-wrapper {
  padding: 24px;
}

.menu {
  font-family: "Astrolab";
  color: #fff;
  text-align: right;
}

.system {
  font-family: "Astrolab";
  color: #fff;
  text-align: right;
  font-size: 16px;
  margin-top: 12px;
}

.select {
  text-align: right;
  margin-left: auto;
  display: block;
}
</style>
