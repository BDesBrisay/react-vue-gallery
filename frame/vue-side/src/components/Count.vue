<template>
  <div>
    <p>{{ count }}</p>
    <button @click="count += 1">Increment</button>
  </div>
</template>

<script>
  export default {
    name: 'Count',
    data: () => {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    padding: 0 10px 20px;
    background: #eee;
  }
  p {
    margin: 5px 15px
  }
</style>
