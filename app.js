const inputText=document.querySelector("#txt-input");
const translateButton=document.querySelector("#btn-translate");
const outputText=document.querySelector("#txt-output");

var apiUrl="https://api.funtranslations.com/translate/hodor.json";

function constructUrl(text){
   return apiUrl+"?text="+ text
    
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("an error occured.please try again in some time.");
    }


    function clickHandler(){
        var input=inputText.value;
    
        fetch(constructUrl(input))
        .then(Response=>Response.json())
        .then(json=>{var translatedText=json.contents.translated
            outputDiv.innerText=translatedText
        
        })
        .catch(errorHandler)
    
    };
translateButton.addEventListener("click", clickHandler)