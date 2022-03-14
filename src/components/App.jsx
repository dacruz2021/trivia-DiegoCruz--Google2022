import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Questions(props) {
  return (
    <div>
      {props.ques}
      <Answer choices={props.ans} />
    </div>
  );
}

function NextQuestion() {
  return (
    <div>
      {" "}
      <button>Next Question</button>{" "}
    </div>
  );
}

function Answer(props) {
  //iterate through props.choices (which is an array)
  //give each element in the array your choice of name, in this case "choice"
  //put each "choice" inside a <p> tag
  let answerParagraphs = props.choices.map((choice) => <p>{choice}</p>);
  return <div>{answerParagraphs}</div>;
}

function App() {
  var currentQuestion = 0;

  return (
    <div className="app">
      <h1>Trivia</h1>
      <Questions
        ques={data[currentQuestion].question.text}
        ans={data[currentQuestion].question.choices}
      />
      <NextQuestion />
    </div>
  );
}

export default App;
