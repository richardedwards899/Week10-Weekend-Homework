//Constructor for Rat object
var Rat = function(){

}

//Methods to add to Food
Rat.prototype = {

  spoil: function(food){
    food.poisoned = true;
  }
}

module.exports = Rat;
