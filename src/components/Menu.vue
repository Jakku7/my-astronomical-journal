<template>
  <div class="menu-wrapper">
    <div class="menu">System:</div>
    <select class="select" @change="onChangeSystem">
      <option
        v-for="elements in solarSystems"
        v-bind:value="elements.name"
        v-bind:key="elements.name"
        v-bind:selected="elements.name === system && 'selected'"
      >
        {{ elements.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    system: String,
    onChangeSystem: Function,
    objects: Array,
  },
  computed: {
    solarSystems() {
      return this.objects.filter((element) => {
        return element.type === "star";
      });
    },
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
  margin-bottom: 12px;
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
