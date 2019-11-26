import React from 'react';
import './App.css';
import dog from './550_chaser.jpg';

{/* Template
function Template(props) {
    return (
        <p>{props.name}</p>
    );
}
*/}

function Header(props) {
    return (
        <h1>{props.message}</h1>
    );
}

function Welcome(props) {
  return (
      <p>{props.greeting} <span style={{color:'red'}}>{props.name}</span>, {props.question}</p>
  );
}

function Goodbye(props) {
  return (
      <p>{props.answer} {props.greeting} <span style={{color:'blue'}}>{props.name}</span>.</p>
  );
}

function Story(props) {
    return (
        <p>{props.story}</p>
    );
}

{/* This is a comment - you only need one App() function */}
function App() {
    return (
        <div class="container">

            <Header
                message="Introduction"
            />

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

            <img src={dog} className="dog" alt="border-collie" />

            <Story
                story="Maybe you should learn more about dogs? Border collies are known for their intelligence. Chaser is a border collie that belongs to a retired psychology professor. John W. Pilley read about a dog who learned to recognize 200 German nouns, and decided to see if Chaser could learn words as well. Working with the dog for around five hours a day, Chaser learned to recognize the names of a couple of new objects every day, to a current total of 1,022 nouns! Along the way, Chaser got the idea that learning words is her job, so now the 82-year-old Pilley has a hard time taking it easy, as Chaser demands her lessons! Pilley is now teaching Chaser verbs and basic grammar."
            />

        </div>
    );
}

export default App;
