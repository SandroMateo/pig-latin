function pigLatinTranslator(input) {
  var words = input.split(/[\s]+/);
  var vowels = ["a","e","i","o","u"];
  var pigLatinWords = [];
  words.forEach(function(word, elementIndex) {
    var isVowel = false;
    var vowelIndex = 0;
    for (var i = 0; i < vowels.length; i++) {
      if(word[0] == vowels[i]) {
       isVowel = true;
      }
    }
    if (isVowel) {
      words[elementIndex] = word + "ay";
    }
    else {
      for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
          if(word.charAt(i) == vowels[j] && vowelIndex == 0) {
            vowelIndex = i;
          }
          if(word.charAt(i) === "q" && vowelIndex == 0) {
            vowelIndex = i+2;
          }
        }
      }
      if (word.slice(-1) === '.' || word.slice(-1) === ',' || word.slice(-1) === '!' || word.slice(-1) === '?' || word.slice(-1) === '\'' || word.slice(-1) === '\"') {
        words[elementIndex] = word.slice(vowelIndex, -1) + word.slice(0,vowelIndex) + "ay" + word.charAt(word.length-1);
      }
      else {
        words[elementIndex] = word.slice(vowelIndex) + word.slice(0,vowelIndex) + "ay";
      }
    }
  });
  return words.join(" ");
}
$(function() {
  $("form").submit(function(event) {
      event.preventDefault();
      var inputText = $("textarea").val();
      var output = pigLatinTranslator(inputText);
      $("#output").text(output);
  });
});
