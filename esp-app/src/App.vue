<template>
  <v-app>
    <MainPageAppBar @openDrawer="openMainDrawer" app />
    <MainPageDrawer v-show="isOpen" app class="main-drawer" />
    <v-main>
      <v-container fluid> </v-container>
    </v-main>
    <MainPageFooter app />
  </v-app>
</template>

<script>
import MainPageDrawer from "./components/MainPageDrawer";
import MainPageFooter from "./components/MainPageFooter";
import MainPageAppBar from "./components/MainPageAppBar";

export default {
  name: "App",

  components: {
    MainPageDrawer,
    MainPageFooter,
    MainPageAppBar,
  },

  data: () => ({
    isOpen: false,
  }),
  methods: {
    openMainDrawer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style>
.main-drawer {
  display: contents;
}
</style>
