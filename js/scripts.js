function pigLatinTranslator(input) {
  var words = input.split(/[\s]+/);
  var vowels = /^[aeiou]/;
  var pigLatinWords = [];
  var puncts = /[.,?!:';]$/;
  words.forEach(function(word, elementIndex) {
    var isVowel = false;
    var vowelIndex = 0;
    isVowel = vowels.test(word);
    if (isVowel) {
      if (puncts.test(word)) {
        words[elementIndex] = word.slice(0,-2) + "ay" + word.slice(-1);
      }
      else {
        words[elementIndex] = word + "ay";
      }
    }
    else {
      for (var i = 0; i < word.length; i++) {
        if(vowelIndex == 0 && vowels.test(word[i])) {
          vowelIndex = i;
        }
        if(vowelIndex == 0 && word[i] === "q") {
          vowelIndex = i+2;
        }
      }
      if (puncts.test(word)) {
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
