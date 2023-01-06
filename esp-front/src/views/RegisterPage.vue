<template>
  <div class="register-main-container">
    <h1>Register</h1>
    <form @submit="handleRegister" class="form">
      <label class="label" placeholder="Username" for="username">
        Username
      </label>
      <input
        class="input"
        type="text"
        id="username"
        v-model="username"
        placeholder="Username"
      />
      <label class="label" for="email">Email</label>
      <input
        class="input"
        type="email"
        id="email"
        v-model="email"
        placeholder="email"
      />
      <label class="label" for="password">Password</label>
      <input
        class="input"
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
      />
      <div class="buttons">
        <ButtonMain type="submit">Submit</ButtonMain>
        <router-link to="/signin">
          <ButtonMain type="submit"> Sign In</ButtonMain>
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
.register-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  font-size: 25px;
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
}
.label {
  display: none;
}
.input {
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 25px;
  margin: 10px;
  font-size: 20px;
}
.buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
a:hover {
}
</style>
