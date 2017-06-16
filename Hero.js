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

}

module.exports = Hero;
