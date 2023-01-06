<template>
  <div class="about-main-container">
    <div class="title">
      About EpiHealth Virtual Care's VR Platform and How It Supports Mental
      Health Professionals
    </div>
    <div class="content-box">
      <div class="text-content">
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
      <img class="img" src="@/img/background.jpg" />
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
.about-main-container {
  font-family: Ubuntu, Noto Sans SC, helvetica, arial, sans-serif;
  color: #13294b;
  display: flex;
  flex-direction: column;
  height: 850px;
}
.about-us {
  font-size: 25px;
  margin: 20px;
}
.text-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.content-box {
  display: flex;
  background-color: #f9f3ed;
  border-radius: 35px;
  border: none 2px #13294b;
  margin: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
.img {
  border-radius: 35px;
  width: 50%;
}
.title {
  margin: 20px;
  padding: 10px;
  font-size: 45px;
  line-height: 1.2;
  font-weight: 400;
  background-color: #f9f3ed;
  border-radius: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
</style>