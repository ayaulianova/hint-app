import React from 'react';
import './App.css';

const PATTERNS = [
  "Abstract Factory",
  "Builder",
  "Factory Method",
  "Prototype",
  "Singleton",
  "Adapter",
  "Bridge",
  "Composite",
  "Decorator",
  "Facade",
  "Flyweight",
  "Proxy",
  "Chain of responsibility",
  "Command",
  "Interpreter",
  "Iterator",
  "Mediator",
  "Memento",
  "Observer",
  "State",
  "Strategy",
  "Template method",
  "Visitor",
];

function App() {
  return (
    <div className="App">
      <ul>
        {PATTERNS.map((i, index) => <li key={index}>{i.toString()}</li>)}
      </ul>
    </div>
  );
}

export default App;
