var titleCase = function(string) {
  var words = string.split(" ");
  words = words.map(function(word) {
    word = word.toLowerCase();
    word = word.replace(word[0], word[0].toUpperCase());
    return word;
  });
  
  return words.join(" ")
};

// var titleCaseString = function(string) {
//   // exceptionWordsRE = /and|but|by|on|the/;
//   var words = string.split(" ");
//
//   return words.map(titleCase).join(" ");
// };
