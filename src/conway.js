let Cell = require('./Cell');

function Conway(grid) {
  this.cellGrid = this._buildCells(grid);
}

Conway.prototype._buildCells = function(grid) {
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
  let coordinates = [[1,1],
                    [1, -1],
                    [-1, 1],
                    [-1, -1],
                    [0,1],
                    [0,-1],
                    [1, 0],
                    [-1, 0]
  ];

  coordinates.forEach(coordinate => {
    let rowPosition = row + coordinate[0];
    let colPosition = col + coordinate[1];

    if (validCoordinates(rowPosition, colPosition)){
      let currentCell = this.cellGrid[row + coordinate[0]][col + coordinate[1]];
      if(currentCell.alive) liveNeighboursCount++;
    }
  });

  return liveNeighboursCount;
};

function validCoordinates(x, y) {
  return x < 6 && x >= 0 && y < 8 && y >= 0;
}

module.exports = Conway;