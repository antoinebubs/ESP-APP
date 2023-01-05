<template>
  <div class="about">
    <h1>
      About EpiHealth Virtual Care's VR Platform and How It Supports Mental
      Health Professionals
    </h1>
    <div class="flex-container">
      <div class="text">
        <p class="about-us">
          The EpiHealth VR Platform is easy to use, fast, and affordable.
        </p>
        <p class="about-us">
          EpiHealth Virtual Care formerly known as Psious provides a virtual
          reality platform used by therapists who perform mental health
          assessments and interventions.
        </p>
        <p class="about-us">
          Through close collaboration with leading public and private
          institutions, we are proud to advance research and promote
          evidence-based care for better mental-health practices, globally.
        </p>
      </div>
      <img src="@/img/background.jpg" width="950" height="600" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped>
.about {
  font-family: Ubuntu, Noto Sans SC, helvetica, arial, sans-serif;
  color: #13294b;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-us {
  font-size: 25px;
  margin: 0px 0px 20px;
}
.text {
  margin: 20px 20px 20px 20px;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  background-color: #f9f3ed;
  border-radius: 35px;
  border: none 2px #13294b;
  margin: 10px 10px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
img {
  border-radius: 35px;
}
h1 {
  text-align: left;
  font-size: 45px;
  line-height: 1.2;
  font-weight: 400;
  width: 50%;
  background-color: #f9f3ed;
  border-radius: 15px;
  padding: 40px;
}
</style>