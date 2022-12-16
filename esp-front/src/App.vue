<template>
  <AppBar />
  <AppFooter />
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppBar from "@/components/AppBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppFooter,
    AppBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0px;
}
</style>
