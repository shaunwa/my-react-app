import React from 'react';
import { Greeting } from './Greeting';
import logo from './logo.svg';
import './App.css';
import { PeopleList } from './PeopleList';

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'Helga',
  age: 25,
  hairColor: 'red',
}, {
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde',
}];

function App() {
  let adjective = 'awesome';
  let url = 'https://reactjs.org';

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Shaun" numberOfMessages={10} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        <img src={logo} className="App-logo" alt="logo" />
        <PeopleList people={people} />
        <p>
          This is so {adjective}
        </p>
        <a
          className="App-link"
          href={url}
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
