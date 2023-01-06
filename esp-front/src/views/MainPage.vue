<template>
  <div class="main-page">
    <div class="main-page-content">
      <h1 class="first-titles">
        Virtual Reality for Mental Health Professionals EpiHealth, an all-in-one
        VR
      </h1>
      <h3 class="third-title">platform trusted by over 0 therapists.</h3>
      <div class="wapper-button">
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
  background-image: url("@/img/headset.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #13294b;
  background-repeat: no-repeat;
  width: 100%;
  height: 850px;
}
.main-titles {
}
p {
  color: #f9f3ed;
}

.third-title {
  text-align: left;
  margin: 20px;
}
.wapper-button {
  display: flex;
}
</style>
