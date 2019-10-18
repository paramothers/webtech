import React, { Component } from "react";
import TodoBanner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import TodoRows from "./TodoRows";
import VisibilityControl from "./VisibilityControl";

// import logo from './logo.svg';
// import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit ...ed <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      userName: "param",
      todoItems: [
        { action: "buy fruit", done: false },
        { action: "go home", done: true },
        { action: "take him", done: false }
      ],
      // newItemText:''
      showCompleted: true
    };
  }

  toggleTodoItemCallback = itemChecked =>
    this.setState({
      todoItems: this.state.todoItems.map(item2 =>
        item2.action === itemChecked.action
          ? { ...item2, done: !item2.done }
          : item2
      )
    });

  todoRowItems = doneValue =>
    this.state.todoItems
      .filter(item => item.done === doneValue)
      .map(item => (
        <TodoRows
          key={item.action}
          item={item}
          callback={this.toggleTodoItemCallback}
        />
      ));

  render = () => (
    <div className="container-fluid">
      <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
      <TodoCreator callback={this.createnewTodoCallback} />
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <td>Description</td>
            <td>Done</td>
          </tr>
        </thead>
        <tbody>{this.todoRowItems(false)}</tbody>
      </table>
      <div className="bg-secondary text-white text-center p-2">
        <VisibilityControl
          description="Completed Task"
          isChecked={this.state.showCompleted}
          callback={checkedState =>
            this.setState({
              showCompleted: checkedState
            })
          }
        />
      </div>
      {this.state.showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoRowItems(true)}</tbody>
        </table>
      )}
    </div>
  );

  /*  changeState = () =>{

    this.setState({
      userName: this.state.userName === 'param2' ? 'pavalan': 'param2',
    });
  }
   updateNewText = (event) => this.setState({
    newItemText: event.target.value
  })
*/
  createnewTodoCallback = task => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }]
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "param",
            todoItems: [
              { action: "buy fruit", done: false },
              { action: "go home", done: true },
              { action: "take him", done: false }
            ],
            // newItemText:''
            showCompleted: true
          }
    );
  };
}
