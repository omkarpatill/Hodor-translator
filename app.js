const inputText=document.querySelector("#txt-input");
const translateButton=document.querySelector("#btn-translate");
const outputText=document.querySelector("#txt-output");

var apiUrl="https://api.funtranslations.com/translate/minion.json?text="

function constructUrl(text){
   return apiUrl+inputText.value+text
    
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("an error occured.please try again in some time.");
    }


function translatetoHodor(){
    var input=inputText.value;
    fetch(constructUrl(input))
.then(Response=>Response.json())
.then(json=>{var translatedText=json.contents.traslated
            outputText.innerText=translatedText;

})
.catch(errorHandler)
};

translateButton.addEventListener("click", translatetoHodor)