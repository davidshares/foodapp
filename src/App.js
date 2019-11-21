import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  const filePath = "src/App.js";
  const linkPath = "https://reactjs.org";

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello {user.firstName} {user.lastName}, how are you?</p>
        <p>Also, {formatName(user)}</p>
        <p>With an ES6 string: {`${user.firstName} ${user.lastName}`}</p>

        <p>
          Edit <code>{filePath}</code> if you want and save to reload.
        </p>

        <a
          className="App-link"
          href={linkPath}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
