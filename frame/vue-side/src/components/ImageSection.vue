<template>
  <div :style="{ backgroundColor: background }">
    <h1>{{ title }}</h1>
    <img :src="require('../assets/' + imgName)" :alt="imgName" />
    <p>{{ caption }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ImageSection',
    props: ['caption','imgName','background','title']
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column; 
    text-align: center;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 20px 0;
  }
  img {
    width: calc(100% - 60px);
    margin: 20px 30px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  p {
    font-size: 16px;
    color: #666;
    margin: 0 7% 20px; 
  }
</style>
