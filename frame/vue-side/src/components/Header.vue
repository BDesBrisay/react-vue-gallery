<template>
  <div>
    <img src="../assets/logo.png" alt="" />
    <h1>Vue.js</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  div {
    flex: 1;
    color: #4bb883;
    background: #eee;
    padding: 20px 5px;
    box-sizing: border-box;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 80px;
    width: 80px;
  }
  h1 {
    margin: 0;
  }
</style>
