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
      caption="What you are looking at is a basic vue component that displays the text 'Hello World' on the main page of the app. On the left side is the App component that imports HelloWorld then exports it as a component. By doing this you enable the use of the HelloWorld component (shown on the right) anywhere within the '<template>' tags. In order to do this, though, you need to export the HelloWorld component from it's file under the name you wish to reference it as later on." 
      imgName="helloWorld.png"
      background="#eee"
    />
    <ImageSection 
      title="Passing Data Through Props"
      caption="One way to get data from the parent component to the child is through the props. By defining the props name in the export, you can then use those keywords to insert the data into your component. There are two different ways you can access these variables in your component and they are either by using double curly brackets around the name of the variable, or you can use the shorthand syntax ':' prefixing an attribute to bind Vue to it and allow Vue to insert the data there." 
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
