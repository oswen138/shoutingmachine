$(document).ready(function(){
$("#form1").submit(function(event) {
  const sentenceInput = $("input#sentence").val();
  $(".sentence").append(sentenceInput.toUpperCase());
  $("#shout").show()
  event.preventDefault();
});

});

