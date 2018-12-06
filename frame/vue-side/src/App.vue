<template>
  <div id="app">
    <Header />
    <ImageSection 
      title="Project Setup"
      caption="By running the command 'vue create app-name' an entire application is created using Vue.js and by default presents you with this screen. There are many links to documentation, references, and community forums for Vue that prove to be very useful for beginners trying to learn Vue."
      imgName="vueStart.png"
    />
    <ImageSection 
      title="Hello World Component"
      caption="this is a caption" 
      imgName="helloWorld.png"
      background="#eee"
    />
    <ImageSection 
      title="Passing Data Through Props"
      caption="this is a caption" 
      imgName="props.png"
    />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import ImageSection from './components/ImageSection.vue';

  export default {
    name: 'app',
    components: {
      Header,
      ImageSection
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
