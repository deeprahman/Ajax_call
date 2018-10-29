"use strict";


//Store the reference to the xmlHttpRequest object
var xmlHttp = createXmlHttpRequestObject();

//Function for creating the XMPHttpRequest object reference.
function createXmlHttpRequestObject() {
    //variable to store the reference to the XMLHttpRequest object
    var xmlHttp; //local scope
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        xmlHttp = false;
    }
    //Return the created object or display an error message
    if (!xmlHttp) {
        alert("Error creating the XMLHttpRequest object.");
    } else {
        return xmlHttp;
    }
}



//Make asynchronous HTTP request using XMLHttpRequest object.
function process() {
    //Proceed only if the xmlHttp object isn't busy
    if (xmlHttp.readyState === 4 || xmlHttp.readyState === 0) {
        //The entered name
        var name = encodeURIComponent(document.getElementById("name").value);
        // The entered password
        var pass = encodeURIComponent(document.getElementById("pass").value);
        console.log("name is:"+name);
        console.log("password is:"+pass);
        //Execute the validate.php page from the server
        var url = "http://localhost/ajax/php/validate.php?name="+name+"&pass="+pass;
        xmlHttp.open("GET",url, true);

        //Define the method to handle the server responses
        xmlHttp.onreadystatechange = handleServerResponse;

        //Make the server request
        xmlHttp.send();
        console.log(xmlHttp);
    }else{
        //If connection is busy, try again one second later
        setTimeout('process()', 1000);
    }
}

//Executed automatically when a message is received from the server
function handleServerResponse(){
    if(xmlHttp.readyState === 4 || xmlHttp.status === 200){
        
            document.getElementById("warning").innerHTML = xmlHttp.responseText;
      
    }
    setTimeout('process()',1000);
}
