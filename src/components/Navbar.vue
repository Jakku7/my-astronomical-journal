<template>
  <div class="navbar">
    <Logotype />
    <Menu :system="system" :onChangeSystem="onChangeSystem" />
  </div>
</template>

<script>
import Menu from "./Menu";
import Logotype from "./Logotype";
export default {
  name: "Navbar",
  components: {
    Menu,
    Logotype,
  },
  props: {
    system: String,
    onChangeSystem: Function,
  },
};
</script>
<style>
.navbar {
  position: absolute;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
</style>
