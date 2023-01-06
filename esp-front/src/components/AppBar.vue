<template>
  <div class="navbar">
    <div class="navbar-options-left">
      <ul class="list-options">
        <li class="list">
          <router-link class="options-links" to="/home">Home</router-link>
          <router-link class="options-links" to="/news">News</router-link>
          <router-link class="options-links" to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-options-right">
      <ul class="list-options">
        <li class="list">
          <router-link class="options-links" to="/signin">
            Sign in
          </router-link>
          <router-link class="options-links" to="/register">
            Register
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background-color: #008cba;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.navbar-options-left .navbar-options-right {
  display: flex;
  list-style-type: none;
}

.list-options {
  list-style-type: none;
}

a {
  color: #f9f3ed;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}

.list-options a:hover {
  color: #333;
}
.navbar-options-right .list-options {
}
.list {
  margin: 10px;
}
</style>
