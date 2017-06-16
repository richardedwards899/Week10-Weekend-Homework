var assert = require('assert')
var Hero = require('../Hero.js')
var Food = require('../Food.js')
var Task = require('../Task.js')


describe('Hero tests', function () {

  var hero;

  beforeEach( function(){
      var name = "Arnold";
      var health = 90;
      var favouriteFood = new Food("berries", 5);
      var task1 = new Task(1,5, 10);
      var task2 = new Task(3,2, 20);
      var task3 = new Task(5,4, 15);
      var tasks = [ task1, task2, task3 ];

      hero = new Hero(name, health, favouriteFood, tasks);
  })

	it('should create Hero', function () {
		assert.strictEqual("Arnold", hero.name);
    assert.strictEqual(90, hero.health);
    assert.strictEqual("berries", hero.favouriteFood.name);
    assert.strictEqual(5, hero.favouriteFood.replenishment);
    assert.strictEqual(3, hero.tasks.length);
	})

})//describe
