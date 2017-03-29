let _ = require('lodash');

function GridValidator(){
}

GridValidator.prototype.validate = function(array){
	return this._validateElements(array) && this._validateRows(array) && this._validateColumns(array);
};

GridValidator.prototype._validateRows = function(array){
	return array.length === 6;
};

GridValidator.prototype._validateColumns = function(array){
	return array.every(function(subArray){
		return subArray.length === 8;
	});
};

GridValidator.prototype._validateElements = function(array) {
	let uniqueArray = _.uniq([].concat.apply([], array)).sort();
	return uniqueArray.every(ele => ele === '0' || ele === '.');
};

module.exports = GridValidator;