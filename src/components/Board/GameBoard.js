import React from 'react';
import Tile from './Tile'
function GameBoard() {

  function buildRowTiles() {
    let columns = [0, 1, 2, 3]
    return columns.map(column => {
      return (
        <Tile/>
      )
    })
  }

  function buildBoard() {
    let rows=[0,1,2,3]
    return rows.map(row => {
      return (
        <div className="board-row">
          {buildRowTiles(row)}
        </div>
      )
    })
  }

  return (
    <div className="game-board-container">
      {buildBoard()}
    </div>
  );
}

export default GameBoard;
