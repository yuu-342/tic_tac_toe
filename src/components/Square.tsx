import React, { FC } from 'react';

type SquareProps = Required<{
  mark: string,
  onclick: () => void
}>

const Square: FC<SquareProps> = ({ mark, onclick }) => {
  return (
    <button className="square" onClick={onclick}>
      {mark}
    </button>
  );
}

export default Square;