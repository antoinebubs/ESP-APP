<template>
  <div class="footer">
    <ul class="list-options">
      <li class="list">
        <router-link class="options-links" to="/copyright">
          Copyright
        </router-link>
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
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  position: fixed;
  bottom: 0;
}
.list-options {
  list-style-type: none;
}
a {
  color: #f9f3ed;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
}
.list-options a:hover {
  color: #333;
}
</style>
