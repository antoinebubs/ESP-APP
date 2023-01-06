<template>
  <div class="card">
    <img src="@/img/headset.jpg" alt="John" style="width: 100%" />
    <h1>John Doe</h1>
    <p class="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <ButtonMain @click="doSomething">Démo</ButtonMain>
  </div>
</template>
  
  <script>
import ButtonMain from "@/components/ButtonMain.vue";
export default {
  components: {
    ButtonMain,
  },
  data() {
    return {
      img: "../img/headset.jpg",
    };
  },
};
</script>
  
  <style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: arial;
  border: none 1px;
  border-radius: 35px;
  max-width: 400px;
  min-width: 200px;
}

.title {
  color: grey;
  font-size: 18px;
}

img {
  border-radius: 35px;
}
</style>
  