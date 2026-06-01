console.log("Welcome to Community Portal");

window.onload = function(){
    alert("Page Loaded Successfully");
}

/* Registration */

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("outputMsg")
    .innerHTML = "Registration Successful!";

    let modal =
    new bootstrap.Modal(
    document.getElementById("successModal"));

    modal.show();
});

/* Phone Validation */

function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    if(phone.length != 10){
        alert("Enter Valid Phone Number");
    }
}

/* Event Fee */

function showFee(){

    let event =
    document.getElementById("eventType").value;

    let fee="";

    if(event==="Music")
        fee="Fee : ₹500";

    else if(event==="Food")
        fee="Fee : ₹300";

    else if(event==="Sports")
        fee="Fee : ₹400";

    document.getElementById("fee")
    .innerHTML=fee;

    localStorage.setItem(
    "eventType",event);
}

/* Load Preference */

window.addEventListener("load",()=>{

    let saved=
    localStorage.getItem("eventType");

    if(saved){
        document.getElementById("eventType").value=saved;
    }
});

/* Character Counter */

document.getElementById("feedback")
.addEventListener("keyup",()=>{

    let count=
    document.getElementById("feedback")
    .value.length;

    document.getElementById("count")
    .innerHTML=count+" Characters";
});

/* Clear Storage */

function clearStorage(){

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

/* Video */

function videoReady(){

    document.getElementById("videoMsg")
    .innerHTML="Video Ready To Play";
}

/* Geolocation */

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation
        .getCurrentPosition(success,error,
        {
            enableHighAccuracy:true,
            timeout:5000
        });

    }
}

function success(position){

    document.getElementById("location")
    .innerHTML=

    `Latitude:
    ${position.coords.latitude}
    <br>

    Longitude:
    ${position.coords.longitude}`;
}

function error(){

    alert("Unable to fetch location");
}

/* Before unload */

window.onbeforeunload=function(){

    return "Your form data may be lost!";
}