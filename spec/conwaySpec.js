let Conway = require('../src/Conway');

describe('ConwayGame', function() {
  let grid = [
    ['.','0','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','0','0','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','0']
  ];
  let conway = new Conway(grid);

  it('should convert grid to Cell Objects', function (){
    let flatGrid = [].concat.apply([], conway.cellGrid);
    expect(flatGrid.every(ele => ele.constructor.name === 'Cell')).toBe(true);
  });

  it('should convert grid to Cell Objects with appropriate life/dead status', function (){

    expect(conway.cellGrid[0][1].alive).toBe(false);
    expect(conway.cellGrid[3][4].alive).toBe(false);
    expect(conway.cellGrid[5][7].alive).toBe(false);
  });

  it('should determine correct number of live neighbors for cells in middle of grid', function (){
    let result = conway._determineNeighbours(3,4);

    expect(result).toBe(7)
  });

  it('should determine correct number of live neighbors for cells on the edged of the grid', function (){
    let result = conway._determineNeighbours(5,7);

    expect(result).toBe(3)
  });

  
});
