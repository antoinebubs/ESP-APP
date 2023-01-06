<template>
  <div class="news-cards">
    <img class="news-img" src="@/img/headsetvive.jpg" style="width: 100%" />
    <div class="title-news">John Doe</div>
    <p class="news-body">Harvard University</p>
    <ButtonMain @click="doSomething">See more</ButtonMain>
  </div>
</template>
  
  <script>
import ButtonMain from "@/components/ButtonMain.vue";
export default {
  components: {
    ButtonMain,
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
.news-cards {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  border: none 1px;
  border-radius: 35px;
  max-width: 300px;
  min-width: 200px;
  background-color: #f9f3ed;
}

.title-news {
  color: grey;
  font-size: 18px;
}

.news-img {
  border-radius: 35px;
}
</style>
  