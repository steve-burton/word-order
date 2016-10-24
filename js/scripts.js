var words = [];
var totals = [];
var sentence;

$(document).ready(function(){
  $("form").submit(function(event) {
    var count = 1;
    sentence = $("#input").val().split(" ");
    sentence.sort();
    sentence.forEach(function(word){
      if (words.indexOf(word) != -1) {
        count++;
      } else {
        words.push(word);
        totals.push(count);
        count = 1;
      };
    });
    console.log(words);
    console.log(totals);

    event.preventDefault();
  });

});
