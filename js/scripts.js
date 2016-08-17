function pigLatinMaker(wordIn, index) {
  var puncts = /[.,?!:';]$/;
  if (puncts.test(wordIn)) {
    return wordIn.slice(index, -1) + wordIn.slice(0,index) + "ay" + wordIn.charAt(wordIn.length-1);
  }
  else {
    return wordIn.slice(index) + wordIn.slice(0,index) + "ay";
  }
}
function pigLatinTranslator(input) {
  var words = input.split(/[\s]+/);
  var vowels = /^[aeiou]/;
  words.forEach(function(word, elementIndex) {
    var isVowel = false;
    var vowelIndex = 0;
    isVowel = vowels.test(word);
    if (isVowel) {
      words[elementIndex] = pigLatinMaker(word, vowelIndex);
    }
    else {
      for (var i = 0; i < word.length; i++) {
        if(vowelIndex == 0 && word[i] === "q") {
          vowelIndex = i+2;
        }
        else if (vowelIndex == 0 && vowels.test(word[i])) {
          vowelIndex = i;
        }
      }
      words[elementIndex] = pigLatinMaker(word, vowelIndex);
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
