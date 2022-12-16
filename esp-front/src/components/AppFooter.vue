<template>
  <div class="footer">
    <ul class="footer-list-options">
      <li
        v-for="options in footerListOptions"
        :key="options"
        class="list-options"
      >
        <a class="footer-options-links">{{ options }}</a>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      footerListOptions: {
        copyright: "Copyright",
        termsOfUse: "Terms of Use",
        PrivacyPolicy: "Privacy Policy",
      },
    };
  },
};
</script>
  
<style scoped>
.footer {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.footer-list-options {
  display: flex;
}
.list-options {
  list-style-type: none;
  display: flex;
}
.footer-options-links {
  color: white;
  margin: 10px;
}
.footer-options-links:hover {
  background-color: #444;
}
</style>