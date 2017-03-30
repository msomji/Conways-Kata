let Cell = require('./Cell');

function Conway(grid) {
  //validate grid and bail if fails

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
  this.cellGrid = this._buildCells(grid);
}

Conway.prototype._buildCells = function (grid) {
  let objectGrid = [];
  for (let x =0; x <= this.maxRowIndex; x++){
    let row = [];
    for(let y=0; y <= this.maxColIndex; y++) {
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

function updateLiveCells(cell) {
  if (cell.liveNeighbors < 2 || cell.liveNeighbors > 3) {
    cell.alive = !cell.alive;
  }
}
function updateDeadCells(cell) {
  cell.alive = cell.liveNeighbors === 3 ? !cell.alive : cell.alive;
}
Conway.prototype._updateCellLife = function (cell) {
  if (cell.alive){
    updateLiveCells(cell);
  } else {
    updateDeadCells(cell);
  }
};

Conway.prototype._clearTerminal = function() {
  console.log('\033c');
};

Conway.prototype.updateNeighbours = function() {
  for(let i=0; i <= this.maxRowIndex; i++){
    let row = this.cellGrid[i];
    for(let j =0; j < row.length; j++){
        this._updateNeighbours(i,j);
    }
  }
};

Conway.prototype.updateCellLife = function() {
  for(let i=0; i <= this.maxRowIndex; i++){
    let row = this.cellGrid[i];
    for(let j =0; j < row.length; j++){
      this._updateCellLife(this.cellGrid[i][j]);
    }
  }
};

Conway.prototype.playGame = function () {
  this.printGrid();
  this.updateNeighbours();
  this.updateCellLife();
  this.printGrid();
};

Conway.prototype.printGrid = function() {
  this._clearTerminal();
  for(let i=0; i <= this.maxRowIndex; i++){
    let printRow = "";
    let row = this.cellGrid[i];
    for(let j =0; j < row.length; j++){
      printRow += this.cellGrid[i][j].alive ? '.' : '0';
    }
    console.log(printRow + '\n');
  }
};

module.exports = Conway;