let Cell = require('./Cell');

function Conway(grid) {
  //validate grid and bail if fails
  this.cellGrid = this._buildCells(grid);
  this.maxColIndex = 7;
  this.maxRowIndex = 5;
  this.coordinates = [[1,1],
                      [1, -1],
                      [-1, 1],
                      [-1, -1],
                      [0,1],
                      [0,-1],
                      [1, 0],
                      [-1, 0]
  ];
}

Conway.prototype._buildCells = function (grid) {
  let objectGrid = [];

  for (let x =0; x < 6; x++){
    let row = [];

    for(let y=0; y < 8; y++) {
      row.push(new Cell(grid[x][y]));
    }
    objectGrid.push(row);
  }
  return objectGrid;
};

Conway.prototype._determineNeighbours = function (row, col) {
  let liveNeighboursCount = 0;

  this.coordinates.forEach(coordinate => {
    let rowPosition = row + coordinate[0];
    let colPosition = col + coordinate[1];

    if (this._validateCoordinates(rowPosition, colPosition)){
      let currentCell = this.cellGrid[row + coordinate[0]][col + coordinate[1]];
      if(currentCell.alive) liveNeighboursCount++;
    }
  });
  return liveNeighboursCount;
};

Conway.prototype._validateCoordinates = function (row, col) {
  return row <= this.maxRowIndex && row >= 0 && col <= this.maxColIndex && col >= 0;
};

Conway.prototype._updateNeighbours = function (row, col) {
  let cell = this.cellGrid[row][col];
  cell.liveNeighbors = this._determineNeighbours(row,col);
};

Conway.prototype.playGame = function () {
  console.log('\033c');

  // print current Cellgrid on terminal
  // updateNeighbors for each cell
  // update alive for each cell
  // print updated CellGrid on terminal
};

module.exports = Conway;