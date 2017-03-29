let GridValidator = require('../src/GridValidator');

describe('GridValidator', function() {
	let gridValidator = new GridValidator(), 
			grid;

    it('should return false if grid doesnt have 8 columns ', function() {
        grid = [
            ['.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.']
        ];

        expect(gridValidator._validateColumns(grid)).toEqual(false);
    });

    it('should return false if a grid  doesnt have 6 rows', function() {
		grid = [
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.']
			];

		expect(gridValidator._validateRows(grid)).toEqual(false);
	});

	it('should return false if a valid grid size has invalid characters in it', function() {
		grid = [
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','A','.','.','.'],
			['.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.']
			];

		expect(gridValidator._validateElements(grid)).toEqual(false);
	});

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
    });
});