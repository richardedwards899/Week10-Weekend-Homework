var assert = require('assert')
var Rat = require('../Rat.js')
var Food = require('../Food.js')

describe('Rat tests', function () {

	it('should poison Food', function () {
		var food = new Food("berries", 5);
    var rat = new Rat();
    rat.spoil(food);

		assert.strictEqual(true, food.poisoned)
	})


})
