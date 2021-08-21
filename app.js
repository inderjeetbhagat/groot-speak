var btnTranslate = document. querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("error occured");
    alert("Something wrong with server!")
}


function clickHandler() {
    // outputDiv.innerText = "Translated " + txtInput.value;
    var inputTxt = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;//output
    })
    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)
