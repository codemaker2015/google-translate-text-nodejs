var api = "AIzaSyCTuGY6zJqImEcpKKL8rANGr3Ne7-dI_L4";
var googleTranslate = require('google-translate')(api);

var text = 'I am using google translator to convert this text to spanish'
console.log("English :>",text);
googleTranslate.translate(text, 'es', function(err, translation) {
  console.log("Spanish :>",translation.translatedText);
});		