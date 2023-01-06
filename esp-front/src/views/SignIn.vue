<template>
  <div class="signin-main-container">
    <h1>Sign in</h1>
    <form @submit="handleSignIn" class="form">
      <label class="label" for="email">Email:</label>
      <input class="input" type="email" id="email" v-model="email" />
      <label class="label" for="password">Password:</label>
      <input class="input" type="password" id="password" v-model="password" />
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
      email: "",
      password: "",
    };
  },
  components: {
    ButtonMain,
  },
  methods: {
    handleSignIn() {
      // validate the user's information
      // and handle the sign in process
    },
  },
};
</script>

<style scoped>
.signin-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 850px;
}
.form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  width: 400px;
}
.label {
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
