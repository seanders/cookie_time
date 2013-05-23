$(document).ready(function(){
var Oven = {

  init: function(contents){
    this.cook_time = 0
    this.contents = contents //should be an array
  },

  bake: function(){
    this.cook_time ++
  }

}

var Batch = function(){

  init: function(type, bakeTime){
    this.type = type
    this.bakeTime = bakeTime
  },



}

Oven.init();

$('form').on('submit', function(){})

});