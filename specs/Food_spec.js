var assert = require('assert')
var Food = require('../Food.js')

describe('Food tests', function () {

	it('should create Food', function () {
		var food = new Food("berries", 5);
		assert.strictEqual("berries", food.name);
    assert.strictEqual(5, food.replenishment);
	})


})
