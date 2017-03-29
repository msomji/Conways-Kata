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

module.exports = Conway;