// 1) Import the React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root.
const element = document.getElementById("root");

// 3) Tell React to take control of that element.
const root = ReactDOM.createRoot(element);

// 4) Create a component.
function App() {
  return <h1>Hello!</h1>;
}

// 5) Show the component on the screen.
root.render(<App />);
