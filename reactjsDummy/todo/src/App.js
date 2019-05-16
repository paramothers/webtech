import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Paramasivam",
      toDoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Go to office", done: false },
        { action: "take lunch", done: true }
      ],
      newItemText: ""
    };
  }

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.toDoItems.find(
        exist => exist.action === this.state.newItemText
      )
    ) {
      this.setState({
        toDoItems: [
          ...this.state.toDoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Paramasivam" ? "Padhu" : "Paramasivam"
    });
  };

  render = () => (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To do List ({this.state.toDoItems.filter( t => !t.done).length})
      </h4>
      <div className="container-fluid">
          <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}></input>
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
          </div>
      </div>
      <button className="btn btn-primary m-2" onClick={this.changeStateData}>
        Change !
      </button>
    </div>
  );
}

export default App;
