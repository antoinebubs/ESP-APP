<template>
  <div class="news">
    <ul class="list-options">
      <li v-for="info in infos" :key="info" class="list">
        <AppCard />
      </li>
    </ul>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
export default {
  name: "NewsView",
  data() {
    return {
      infos: 14,
    };
  },
  components: {
    AppCard,
  },
};
</script>
<style scoped>
.news {
  display: flex;
}
.list-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
}
.list {
  margin: 20px;
}
</style>
