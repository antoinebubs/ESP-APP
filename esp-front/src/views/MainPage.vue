<template>
  <div class="main-page">
    <div class="main-page-wapper">
      <h1>
        Virtual Reality for Mental Health Professionals EpiHealth, an all-in-one
        VR
      </h1>
      <h3>platform trusted by over 0 therapists.</h3>
      <div class="flex-container">
        <ButtonMain @click="doSomething">Démo</ButtonMain>
        <ButtonMain>Pricing</ButtonMain>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMain from "@/components/ButtonMain.vue";
export default {
  data() {
    return {};
  },
  methods: {
    doSomething() {
      alert("CLICKED");
    },
  },
  components: {
    ButtonMain,
  },
};
</script>

<style scoped>
.main-page {
  font-family: Ubuntu, Noto Sans SC, helvetica, arial, sans-serif;
  background-image: url("../img/headset.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #13294b;
  background-repeat: no-repeat;
  width: 100%;
  height: 850px;
}
p {
  color: #f9f3ed;
}

h3 {
  text-align: left;
  margin: 20px;
}
.flex-container {
  display: flex;
}
.flex-container2 {
  display: flex;
  background-color: #008cba;
  padding: 15px;
  border-radius: 35px;
  margin-top: 70px;
  box-shadow: black 8px 8px;
}
</style>
