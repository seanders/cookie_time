
var Oven = function(){

  this.init = function(){
    this.cook_time = 0
    this.contents = []
  };

  this.bake = function(){
    this.cook_time ++
  };

  this.init();

};

var PrepTable = function(){
  this.contents = []

};

var Batch = function(type, bakeTime){

  this.init = function(){
    this.type = type
    this.bakeTime = bakeTime
    this.state = "raw"
  };


  this.init(type,bakeTime);
};

$(document).ready(function(){
var oven = new Oven();
var prepTable = new PrepTable();

$('form').on('submit', function(e){
  e.preventDefault();
  var type = $('input[name=batch_type]').val()
  var bakeTime = $('input[name=bake_time]').val()
  var newBatch = new Batch(type, bakeTime);
  prepTable.contents.push(newBatch)
  var index = prepTable.contents.indexOf(newBatch)
  $('#prep_batches').append("<li id="+index+">"+newBatch.type+"<button>Add to Oven</button></li>")
  $('input[name=batch_type]').val("")
  $('input[name=bake_time]').val("")

});

$('#prep_batches').on('click', 'button', function(){
  var batchName = $(this).parent('li').clone().children('button').remove().end().text()
  var index = $(this).parent('li').attr('id')
  oven.contents.push(prepTable.contents[index])
  prepTable.contents.splice(index, 1)
  $('#rack_' + index).text()
})

});
