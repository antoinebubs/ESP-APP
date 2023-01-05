<template>
  <div class="register flex-container">
    <h1>Register</h1>
    <form @submit="handleRegister" class="form">
      <label class="label" for="username">Username:</label>
      <input class="input" type="text" id="username" v-model="username" />
      <label class="label" for="email">Email:</label>
      <input class="input" type="email" id="email" v-model="email" />
      <label class="label" for="password">Password:</label>
      <input class="input" type="password" id="password" v-model="password" />
      <div class="buttons">
        <ButtonMain type="submit">Submit</ButtonMain>
        <router-link to="/signin"
          ><ButtonMain type="submit"> Sign In</ButtonMain>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonMain from "@/components/ButtonMain.vue";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: {
    ButtonMain,
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
.register {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  height: 850px;
}
.form {
  width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  margin-bottom: 30px;
}
.label {
  display: block;
  margin-bottom: 10px;
}
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 25px;
}
.buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
a:hover {
}
</style>
