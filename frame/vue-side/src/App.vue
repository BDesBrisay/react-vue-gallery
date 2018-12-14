<template>
  <div id="app">
    <Header />
    <ImageSection 
      title="Project Setup"
      caption="By running the command 'vue create app-name' an entire application is created using Vue.js and by default presents you with this screen. There are many links to documentation, references, and community forums for Vue that prove to be very useful for beginners trying to learn Vue."
      imgName="vueStart.6d5b0071.png"
    />
    <ImageSection 
      title="Hello World Component"
      caption="What you are looking at is a basic vue component that displays the text 'Hello World' on the main page of the app. On the left side is the App component that imports HelloWorld then exports it as a component. By doing this you enable the use of the HelloWorld component (shown on the right) anywhere within the '<template>' tags. In order to do this, though, you need to export the HelloWorld component from it's file under the name you wish to reference it as later on." 
      imgName="helloWorld.67472f9a.png "
      background="#eee"
    />
    <ImageSection 
      title="Passing Data Through Props"
      caption="One way to get data from the parent component to the child is through the props. By defining the props name in the export, you can then use those keywords to insert the data into your component. There are two different ways you can access these variables in your component and they are either by using double curly brackets around the name of the variable, or you can use the shorthand syntax ':' prefixing an attribute to bind Vue to it and allow Vue to insert the data there." 
      imgName="props.8d297eb3.png"
    />
    <ImageSection 
      title="Responsive Data"
      caption="In order to add data scoped to your component you can give your export the property 'data' and then access it anywhere in your component. An interesting aspect to providing your component with data this way is that in order for the data to be contained solely within this component you need to make the value of the data a function returning whatever your data is, otherwise any instance of the same component will use and modify the same data. This could be seen as a feature if you wanted only one set of data that is modified uniformly across the entire site. Here is an example of the component that the code in the image creates:"
      imgName="data.74fb91b9.png"
      background="#eee"
    />
    <Count />
    <ImageSection 
      title="Learning Curve"
      caption="This photo shows a page in the Vue documentation that details how to make a component. Creating a component with responsive data in Vue appears to be relatively easy. Overall components are very easy to make in Vue and the syntax and all the different pieces that go into a component allow for a developer to quickly develop what they need."
      imgName="docs.5316ccc4.png"
    />
    <End />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import ImageSection from './components/ImageSection.vue';
  import Count from './components/Count.vue';
  import End from './components/End.vue';

  export default {
    name: 'app',
    components: {
      Header,
      ImageSection,
      Count,
      End
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
