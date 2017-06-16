var assert = require('assert')
var Task = require('../Task.js')

describe('Task tests', function () {

  var task;

  beforeEach( function(){
      var difficulty = 5; //don't like having hard-coded values
      var urgency = 4;
      var reward = 10;
      task = new Task(difficulty, urgency, reward);
  })

	it('should create Task', function () {
		assert.strictEqual(5, task.difficulty);
    assert.strictEqual(4, task.urgency);
    assert.strictEqual(10, task.reward);
    assert.strictEqual(false, task.complete);
	})

})//describe
