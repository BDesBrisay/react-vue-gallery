import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import ImageSection from './ImageSection/ImageSection';
import Counter from './Counter/Counter';
import End from './End/End';

import setup from '../images/reactStart.png';
import helloWorld from '../images/helloWorld.png';
import prop from '../images/props.png';
import data from '../images/data.png';
import docs from '../images/docs.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageSection 
          title="Project Setup"
          image={<img src={setup} alt="" />}
          caption="By running the command 'npx create-react-app app-name' and entire application is created using React and by default presents you with this screen. There is only one link on this page that leads to the React website which has all the information you need in order to get started with React."
        />
        <ImageSection 
          title="Hello World Component"
          image={<img src={helloWorld} alt="" />}
          caption="What you are looking at here is a basic React component that displays the text 'Hello World!' There are three main parts to focus on here: the import, the class definition, and the export. You have to import React into a file if you want to make it a React component. You define a JavaScript class that extends all the properties provided by the React.Component in order to make a component. Then finally you need to export your component to use it elsewhere."
          background="#eee"
        />
        <ImageSection 
          title="Passing Data Through Props"
          image={<img src={prop} alt="" />}
          caption="The only way to pass data from a parent component to it's child is through the use of props. In order to access these props in the child component, all you need to do is define a variable with the same name as your prop and then define it by referencing this.props. In this case 'this' references the component you are currently in. You can use this data passes to the props by simply referencing the prop keyword inside curly brackets as such { prop-name }."
        />
        <ImageSection 
          title="Responsive Data"
          image={<img src={data} alt="" />}
          caption="In order to add data to your component that you can resonsively modify all you have to do is define a components 'state' at the beginning of the class. This allows you to reference the state later on anywhere in the component by simply typing 'this.state.state-name' anywhere. In order to modify the state of a React component you call to use the built-in function 'this.setState()' and pass in the new values you want your state to be as a parameter. The state is contained within each component no matter how many instances you render so youll never run into the problem of two components modifying the same data."
          background="#eee"
        />
        <Counter />
        <ImageSection 
          title="Learning Curve"
          image={<img src={docs} alt="" />}
          caption="This is a screenshot taken from the Reactjs website that features very basic tutorials of how to make a component. The documentation for React dives very deep, but it also starts you off with simple examples that even a beginner can understand. All of React is made in JavaScript so anything you can do in JavaScript you can do in React; this is not the case for Vue. "
        />
        <End />
      </div>
    );
  }
}

export default App;
