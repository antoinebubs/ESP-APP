<template>
  <div class="footer">
    <ul class="footer-list-options">
      <li class="list-options">
        <router-link class="options-links" to="/copyright"
          >Copyright</router-link
        >
        <router-link class="options-links" to="/termsOfUse">
          Terms of Use
        </router-link>
        <router-link class="options-links" to="/PrivacyPolicy">
          Privacy Policy
        </router-link>
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
  background-color: #008cba;
  color: #13294b;
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
a {
  color: #13294b;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
}
.footer-options-links:hover {
  background-color: #444;
}
</style>
