<template>
  <div>
    <button class="button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: black 5px 5px;
}
</style>
