import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Message } from "./Message";
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names = ["aa", "bb", "cccttt"];

/* export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-center text-white p-2">Hellow Pavalan</h1>
      <Message greeting="Hello...Param" name="bob"> </Message>
      <Message greeting="Hello...Param" name="jain"> </Message>
      <Message greeting="Hello...Param" name="parithi"> </Message>
      <Summary names={["asd","bgggg","c"]} /> 
    </div>
  )
} */

function reverseName() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default function App() {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Leters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <Summary
              index={index}
              name={name}
              reverseCallback={reverseName}
              promoteCallback={promoteName}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
