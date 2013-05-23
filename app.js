
var Oven = function(){

  this.init = function(){
    this.cook_time = 0
    this.contents = []
  };

  this.bake = function(){
    this.cook_time ++;
    for (var i = 0; i < this.contents.length; i++) {
    if (this.cook_time < this.contents[i].bakeTime ){
      this.contents[i].state = "still_gooey"
    }
    else if (this.cook_time === this.contents[i].bakeTime) {
      this.contents[i].state = 'just_right'
    }
    else if (this.cook_time > this.contents[i].bakeTime) {
      this.contents[i].state = "crispy"
    }
    ;
}
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
var id = 0

$('form').on('submit', function(e){
  e.preventDefault();
  var type = $('input[name=batch_type]').val()
  var bakeTime = parseInt($('input[name=bake_time]').val())
  var newBatch = new Batch(type, bakeTime);
  prepTable[id] = newBatch
  $('#prep_batches').append("<li id="+id+">"+newBatch.type+"<button>Add to Oven</button></li>")
  $('input[name=batch_type]').val("")
  $('input[name=bake_time]').val("")
  id ++

});

$('#prep_batches').on('click', 'button', function(){
  var batchName = $(this).parent('li').clone().children('button').remove().end().text()
  var id = $(this).parent('li').attr('id')
  var batch = prepTable[id]
  oven.contents.push(batch)
  delete prepTable[id]
  $(this).parent('li').remove()
  $('#rack_' + id).addClass('raw').text(batchName + "--" + batch.state )
})

$('#bake').on('click', function(){
  oven.bake();
  $('td').each(function(index, element){
    $(element).addClass(oven.contents[index].state)
  });

});

});
