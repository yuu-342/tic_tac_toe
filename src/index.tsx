import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board'
import './index.css';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* todo */}</ol>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)