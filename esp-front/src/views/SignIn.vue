<template>
  <div>
    <h1>Register</h1>
    <form @submit="handleRegister">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleRegister() {
      // validate the user's information
      // and handle the register process
    },
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
  margin-bottom: 30px;
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
  