//ZWRACANIE TYPU PLIKU

var exe = "file.exe";
var php = "index.php";
var html = "index.html";


function returnExtension(extension){
    var extensionArray = extension;
    console.log(extensionArray.split('.').pop());
}

returnExtension(html);