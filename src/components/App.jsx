import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

//(day 1) this is our component "Questions", we used props and rendered the message in our App
function Questions(props) {
  return <div>
    {props.ques}
    <Answer/>
  </div>;
}

//(day 1) this is our NextQuestion component that stores a button 
function NextQuestion() {
  return <div> <button>Next Question</button> </div>
}
//(day 2) our answer component
function Answer(props){
  return <div>Answer Goes Here</div>;
}
//
// (day 1) we took our Questions components and used props to render our questions
//(day 1) the variable holds which question we are on, so we call it when we use data
function App() {
  var currentQuestion = 0;

  return (
    <div className="app">
      <h1>Trivia</h1>
      <Questions ques={data[currentQuestion].question.text} Answer= />
      <NextQuestion/>
    </div>
  );
}

export default App;
// im not sure tbh but i think you have to render them first
// goal 1 the thir bock
// isnt that it u got it dont u?