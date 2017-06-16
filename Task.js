//Constructor for Task object
var Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

//Methods to add to Food
Task.prototype = {

}

module.exports = Task;
