var assert = require('assert')
var Hero = require('../Hero.js')
var Food = require('../Food.js')
var Task = require('../Task.js')


describe('Hero', function () {

  var hero;

  beforeEach( function(){
      var name = "Arnold";
      var health = 90;
      var favouriteFood = new Food("berries", 5);
      //Tasks created with (difficulty, urgency, reward)
      var task1 = new Task( 3, 5, 10 );
      var task2 = new Task( 2, 2, 20 );
      var task3 = new Task( 5, 4, 15 );
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

  it('should say their name', function () {
		assert.strictEqual("Ug! My name Arnold", hero.talk());
  })

  it('should be able to eat food and replenish health', function () {
    var nuts = new Food("nuts", 3);
    hero.eat(nuts);
    assert.strictEqual(93, hero.health);
  })

  it('should be able to eat favourite food and replenish health at 1.5', function () {
    var berries = new Food("berries", 5);
    hero.eat(berries);
    assert.strictEqual(97.5, hero.health);
  })

  it('should be able to sort tasks by difficulty', function () {
    hero.sortTasks("difficulty");
    assert.strictEqual(2, hero.tasks[0].difficulty);
    assert.strictEqual(3, hero.tasks[1].difficulty);
    assert.strictEqual(5, hero.tasks[2].difficulty);
  })

  it('should be able to sort tasks by urgency', function () {
    hero.sortTasks("urgency");
    assert.strictEqual(2, hero.tasks[0].urgency);
    assert.strictEqual(4, hero.tasks[1].urgency);
    assert.strictEqual(5, hero.tasks[2].urgency);
  })

})//describe
