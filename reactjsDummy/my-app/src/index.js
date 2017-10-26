import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {

  render() {
    return (
      <div className = "shopping-list"> 
             <h1> Shoping List for {this.props.name}</h1>
              <ul>
               <li>sample1 3</li>
               <li>sample you</li>
               <li>idly</li>
              </ul>
            </div>
    );
  }
}


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
  );
}



class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      squares: Array(9).fill(null),
      player: {

        name: "param",
        score: 12,
      },
      isNext: true,
    }

  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
      onClick = {()=> this.handleClick(i)}
    />;
  }


  handleClick(i) {

    const square = this.state.squares.slice();
    square[i] = this.state.isNext ? 'X' : 'O';
    this.setState({
      squares: square,
      isNext: !this.state.isNext,
    });

  }

  render() {
    const status = 'Next player:' + (this.state.isNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        
        <ShoppingList name="paramasivam" />
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
