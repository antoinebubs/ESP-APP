<template>
  <div class="main-page">
    <section class="section static static-one">
      <div class="header">
        <h1 class="first-titles">
          Virtual Reality for Mental Health Professionals EpiHealth, an
          all-in-one VR
        </h1>
        <h3 class="third-title">platform trusted by over 0 therapists.</h3>
        <div class="wapper-button">
          <ButtonMain @click="doSomething">Démo</ButtonMain>
          <ButtonMain>Pricing</ButtonMain>
        </div>
      </div>
    </section>

    <section class="section parallax parallax-one"></section>

    <section class="section static static-two">
      <div class="digits">
        <p>azemajezrmfmjemjfazejbrmjbazerbjamjberbjlaezrmjlbazerbjl</p>
        <p>
          azeùrljazme!lj v jmjrjaeleznlrùnlazerknlazenlrzaemrerzmazerlhazler
          aezmirhazerh
        </p>
        <p>aemzrlnazer ezrazer zaer azer azer azr</p>
      </div>
    </section>
    <section class="section parallax parallax-two"></section>
    <section class="section static static-three">Static</section>
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
  height: 90vh;
  perspective: 3px;
  overflow-x: hidden;
}
.header {
  align-items: center;
}
p {
  color: #f9f3ed;
}

.third-title {
  margin: 20px;
}
.wapper-button {
  display: flex;
  justify-content: center;
}
.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  font-size: 40px;
  text-transform: uppercase;
  transform-style: preserve-3d;
  font-weight: bold;
}

/* Different background colors for demo purpose */
.static-one {
  background-color: #feceab;
}

.static-two {
  background-color: #aacfcf;
}

.static-three {
  background-color: #c06c84;
}

.parallax::after {
  /* Position the pseudo-element to fill the parent */
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Scale the image to full */
  background-repeat: no-repeat;
  background-size: 100vw auto;
  /* Move the element back then scale the element, it helps to appears more slowly */
  transform: translateZ(-1px) scale(1.7);
  /* Set the parallax section before the other elements. */
  z-index: -1;
}
.static {
  z-index: 1;
}

/* Different background images */
.parallax-one::after {
  background-image: url("@/img/background.jpg");
}

.parallax-two::after {
  background-image: url("@/img/background.jpg");
}
</style>
