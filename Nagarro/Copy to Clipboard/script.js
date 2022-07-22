var text1 = document.getElementById('text');
var text2 = document.getElementById('output');
var text = "";
var input_value = document.getElementById('lengthChange');

$(document).ready(function(){
    $('#btn-copy').click(function(){
      $('#text').select();
      document.execCommand('copy');
      text = $('#text').val();
      console.log(text);
    });

    
// Paste Text    
$('#btn-paste').click(function(){
    $('#output').html(text);
});

// Remove punctuation
$('#removePun').click(function(){
    let out = text;
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    $('#output').html(out);
    let rawLetters = out.split('');
    
    let cleanLetters = rawLetters.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    });
    
    out = cleanLetters.join('');
    $('#output').html(out);   
});

// Lowercase
$('#low').click(function(){
    let out = text;
    out = out.toLowerCase();
    $('#output').html(out);
});

// Uppercase
$('#up').click(function(){
    let out = text;
    out = out.toUpperCase();
    $('#output').html(out);
});

// Remove Extra Space
$('#removeSp').click(function(){
    let out = text;
    out = out.trim();
    $('#output').html(out);
});

// Remove Linebreaks
$('#removeLb').click(function(){
    let out = text;
    out = out.replace( /[\r\n]+/gm, "");
    $('#output').html(out);

});

// Clear
$('#clear').click(function(){
    text = "";
    text1.textContent = text;
    text2.textContent = text;
    $('#input').select();
    document.execCommand(text);
});





});
