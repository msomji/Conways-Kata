let Conway = require('../src/Conway');

describe('ConwayGame', () => {
  let grid = [
    ['.','0','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','0','0','.','.'],
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','0']
  ];
  let conway = new Conway(grid);

  it('should convert grid to Cell Objects', () => {
    let flatGrid = [].concat.apply([], conway.cellGrid);
    expect(flatGrid.every(ele => ele.constructor.name === 'Cell')).toBe(true);
  });

  it('should convert grid to Cell Objects with appropriate life/dead status', () => {

    expect(conway.cellGrid[0][1].alive).toBe(false);
    expect(conway.cellGrid[3][4].alive).toBe(false);
    expect(conway.cellGrid[5][7].alive).toBe(false);
  });

  it('should validate that the given coordinates are valid and within the grid', () => {
    let result = conway._validateCoordinates(5,7);

    expect(result).toBe(true)
  });

  it('should validate that the given coordinates are invalid and not within the column range', () => {
    let result = conway._validateCoordinates(5,9);

    expect(result).toBe(false)
  });

  it('should validate that the given coordinates are invalid and not within the row range', () => {
    let result = conway._validateCoordinates(9,3);

    expect(result).toBe(false)
  });

  it('should determine correct number of live neighbors for cells in middle of grid', () => {
    let result = conway._determineNeighbours(3,4);

    expect(result).toBe(7)
  });

  it('should determine correct number of live neighbors for cells on the edged of the grid', () => {
    let result = conway._determineNeighbours(5,7);

    expect(result).toBe(3)
  });

  it('should update cell\'s liveNeighbors field with appropriate number', () => {
    let result = conway.cellGrid[3][4];

    conway._updateNeighbours(3,4);

    expect(result.liveNeighbors).toBe(7);
  });

  describe('Game Play', function () {

    beforeEach(() => {
      spyOn(conway, '_clearTerminal');
      spyOn(conway, '_updateNeighbours');
      spyOn(conway, 'updateNeighbours').and.callThrough();

      conway.playGame();
    });
    it('should clear terminal screen on playGame', () => {

      expect(conway._clearTerminal).toHaveBeenCalled();
    });

    it('should updateNeighbors for each cell in grid', function () {

      expect(conway.updateNeighbours).toHaveBeenCalled();
      expect(conway._updateNeighbours.calls.count()).toBe(48);
    });

    it('should updateAliveCell for each cell in grid', function () {

      expect(conway.updateNeighbours).toHaveBeenCalled();
      expect(conway._updateNeighbours.calls.count()).toBe(48);
    });
  });

});
