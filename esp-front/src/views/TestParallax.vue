<template>
  <main class="main">
    <section class="section static static-one">
      Staticzeamrazerbjeazmbkjmaerkjbmajkjabkzrkjbazermbkjaerzbkjaerzbkjraze
    </section>
    <section class="section parallax parallax-one">
      ùazkernazmklernamzlkernazmlkern
    </section>

    <section class="section static static-two">Static</section>
    <section class="section parallax parallax-two"></section>

    <section class="section static static-three">Static</section>
  </main>
</template>
  
<script>
export default {
  data() {
    return {};
  },
};
</script>
  
<style scoped>
.main {
  /* Fill the available space */
  height: 90vh;

  /* Make the children of the element closer to the viewport */
  perspective: 3px;

  /* Hide the overflow */
  overflow-x: hidden;
}

/* General styling, not necessarily related to parallax effect  */
.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
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
  background-size: cover;

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
  background-image: url("@/img/headset.jpg");
}

.parallax-two::after {
  background-image: url("@/img/background.jpg");
}
</style>