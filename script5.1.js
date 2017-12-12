//ANIMACJA INPUTU

function animateString(target) {
    var target = document.getElementById('js-target');
    var textNode = target.childNodes[0];
    var text = textNode.data; //siegam po sam tekst

    setInterval(function () 
    {
     text = text[text.length - 1] + text.substring(0, text.length - 1);
      textNode.data = text;
    }, 100); // funkcja idzie co kazde 100ms czyli tak jakby petla,
}

window.onload = animateString();