<template>
  <div>
    <h1>Login</h1>
    <form @submit="handleLogin">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {},
  },
};
</script>
  
  <style scoped>
form {
  width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
}
label {
  display: block;
  margin-bottom: 10px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 25px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
  