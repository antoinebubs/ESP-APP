<template>
  <div class="about-main-container">
    <div class="header">
      <div class="title">
        <p>About EpiHealth Virtual Care's VR Platform Health Professionals</p>
        <p>and How It Supports Mental About EpiHealth Virtual</p>
      </div>
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
    <div>
      <p>
        The benefits of VR in mental health are supported by 30+ years of
        evidence and over 1000+ studies. As evidence of the advantages of VR in
        mental health accumulated, adoption of its use by mental health
        professionals has steadily grown.
      </p>
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
  color: #13294b;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: center;
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
  padding: 20px;
  font-size: 30px;
  line-height: 1.2;
}
</style>