var words;
var totals;
var punctuation = [".", ",", "?", "!", ";", ":", "-", "_", '"', "/", "(", ")"];
var sentence;
var tempWord;

$(document).ready(function(){
  $("form").submit(function(event) {
    words = [];
    totals = [];
    var wordIndex = -1;
    var wordCount = 1;
    sentence = $("#input").val().split(" ");
    newSentence = sentence.map(function(word){
      return word.toUpperCase();
    })
    newSentence.sort();
    newSentence.forEach(function(word){
      tempWord = word;
      punctuation.forEach(function(mark) {
        if (word.indexOf(mark) != -1) {
          tempWord = word.replace(mark, "");
        };
      });

      if (words.indexOf(tempWord) != -1) {
        wordCount++;
        totals[wordIndex] = wordCount;
      } else {
        wordIndex++;
        wordCount = 1;
        words.push(tempWord);
        totals.push(wordCount);
      };
    });

    $("ul").text("");

    words.forEach(function(word) {
      $("ul").append("<li>" + word + " " + totals[words.indexOf(word)] + "</li>")
    })

    event.preventDefault();
  });

});
