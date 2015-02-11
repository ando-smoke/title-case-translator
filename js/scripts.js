var titleCase = function(string) {
  var words = string.split(" ");
  var nonTitleCaseWordsRE =
    /\b(?:a|about|an|and|at|but|by|in|near|of|on|or|the|under|upon|with)\b/i;
  words = words.map(function(word, index) {
    word = word.toLowerCase();

    if ((index === 0) || (nonTitleCaseWordsRE.test(word) === false)) {
      word = word.replace(word[0], word[0].toUpperCase());
    }

    return word;
  });

  return words.join(" ")
};
