import React, { useState, useMemo } from 'react';
import Square from './Square';

const Board = () => {
  const [marks, setMarks] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = useMemo(() => (i: number) => {
    if (marks[i]) return
    // const squares: Array<string> = marksと書くと単純に参照渡しをしているだけなので同一オブジェクト認識されるため再レンダリングが行われない
    const newMarks: Array<string> = [...marks];
    newMarks[i] = xIsNext ? '○' : '×';
    setMarks(newMarks);
    setXIsNext(!xIsNext);
  }, [marks, xIsNext])

  const renderSquare = (i: number) => {
    return <Square mark={marks[i]} onclick={() => handleClick(i)} />
  }

  const status = `Next Player: ${xIsNext ? 'X' : 'Y'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board