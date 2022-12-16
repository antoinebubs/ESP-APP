<template>
  <div class="navbar">
    <div class="navbar-options-left">
      <ul class="list-options">
        <li class="list">
          <router-link to="/home">Home</router-link>
          <router-link to="/news">News</router-link>
          <router-link to="/about">About</router-link>
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
  display: grid;
  grid-template-columns: auto auto;
  top: 0;
  width: 100%;
  background-color: #333;
}
.navbar-options-left {
  overflow: hidden;
  list-style-type: none;
}

.list-options {
  list-style-type: none;
  display: flex;
}

a {
  color: white;
  margin: 10px;
  text-decoration: none;
}

.list-options .options-links:hover {
  background-color: #333;
}
.navbar-options-right .list-options {
  display: flex;
  float: right;
}
.list {
  margin: 10px;
}
</style>

  