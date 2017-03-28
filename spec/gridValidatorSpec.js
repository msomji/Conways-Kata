GridValidator = require('../src/GridValidator');

describe('GridValidator', function() {
	let gridValidator = new GridValidator(), 
			grid;

	it('should return true if a valid grid is submitted', function() {
		grid = [
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.']
			];
		

		expect(gridValidator.validate(grid)).toEqual(true);
	})

	it('should return false if an invalid grid is submitted', function() {
		grid = [
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.']
			];

		expect(gridValidator.validate(grid)).toEqual(false);
	})


})