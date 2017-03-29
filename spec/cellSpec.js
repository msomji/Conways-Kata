let Cell = require('../src/Cell');

describe("Cell", function() {
		let cell; 

	beforeEach(function() {
		cell = new Cell('.');
	});

	it("Should be able to be initialized", function() {
		expect(cell).toBeDefined();
	});

	it("Should be initialized as alive", function() {
		expect(cell.alive).toBe(true);
	});

	it("Should be initialized as not alive", function() {
		cell = new Cell('x');
		expect(cell.alive).toBe(false);
	});

	it("Should have 0 live neighbours", function() {
		expect(cell.liveNeighbors).toBe(0);
	});

});