<template>
  <div>
    <h2>You should use Vue.js if:</h2>
    <div>
      <li>You're looking for a <strong>small, lightweight</strong> framework</li>
      <li>You're making a relatively <strong>simple</strong> application</li>
      <li>You want to be able to <strong>easily learn</strong> the framework</li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'End'
  }
</script>

<style scoped>
  div {
    background: #4bb883;
    color: white;
    display: flex;
    flex-direction: column;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
    text-align: center;
    padding: 20px 0 30px;
  }
  h2 {
    margin-bottom: 10px;
  }
</style>
