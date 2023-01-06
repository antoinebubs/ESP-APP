<template>
  <div>
    <button class="button" @click="$emit('clicked')">
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
  padding: 20px 32px;
  text-align: center;
  font-size: 16px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  font-weight: bold;
}
.button:hover {
  color: #333;
}
</style>
