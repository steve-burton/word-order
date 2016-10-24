var words = [];
var totals = [];
var sentence;

$(document).ready(function(){
  $("form").submit(function(event) {
    var wordIndex = -1;
    var wordCount = 1;
    sentence = $("#input").val().split(" ");
    sentence.sort();
    sentence.forEach(function(word){
      if (words.indexOf(word) != -1) {
        wordCount++;
        totals[wordIndex] = wordCount;
      } else {
        wordIndex++;
        wordCount = 1;
        words.push(word);
        totals.push(wordCount);
      };
    });
    console.log(words);
    console.log(totals);

    event.preventDefault();
  });

});
