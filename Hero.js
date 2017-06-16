var _ = require('lodash')

//Constructor for Hero object
var Hero = function(name, health, favouriteFood, tasks){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

//Methods to add to Food
Hero.prototype = {

  talk: function(){
    return "Ug! My name "+ this.name;
  },

  eat: function(food){

    if (_.isEqual(food, this.favouriteFood) ){
      this.health += (food.replenishment * 1.5);
    } else {
      this.health += food.replenishment;
    }
  },

  sortTasks: function(sortBy){
    this.tasks = _.sortBy(this.tasks, [ sortBy ]);
  },

  completeTask: function(taskIndex){
    this.tasks[taskIndex].complete = true;
  }

}

module.exports = Hero;
