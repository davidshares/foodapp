import React from 'react';
import './App.css';

function Welcome(props) {
  return (
      <h1>{props.greeting} <span style={{color:'red'}}>{props.name}</span>, {props.question}</h1>
  );
}

function Goodbye(props) {
  return (
      <h1>{props.answer} {props.greeting} <span style={{color:'blue'}}>{props.name}</span>.</h1>
  );
}

{/* Only need one App function */}
function App() {
  return (
      <div>

        <Welcome
            greeting="Hello"
            name="Sue"
            question="do you have a dog? 🐕"
        />

        <Goodbye
            greeting="Goodbye"
            name="Bob 👋"
            answer="No, I don't."
        />

      </div>
  );
}

export default App;
