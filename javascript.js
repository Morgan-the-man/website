

//Menu and side bar fetch
let getOpenSideBar = document.getElementById("open-side-bar");
let getCloseSideBar = document.getElementById("close-side-bar");
let getOverLay = document.getElementById("overlay");
let getMenu = document.getElementById("menu");

//Contcts fetch
const openContacts = document.getElementById("open-contacts");
const whatsapp = document.querySelector(".two");
const email = document.querySelector(".one");

//Menu and side bar functions
function addI() {
    getMenu.classList.add("active");
    getOverLay.classList.add("active");
}
function removeI() {
    getMenu.classList.remove("active");
    getOverLay.classList.remove("active");
}

//Contcts functions
function active1() {
    whatsapp.classList.add("active")
    email.classList.add("active")
}
function deactivate() {
    whatsapp.classList.remove("active")
    email.classList.remove("active")
}

//Menu and side bar listen
getOpenSideBar.addEventListener("click",addI);
getCloseSideBar.addEventListener("click",removeI);
getOverLay.addEventListener("click",removeI);

//Contcts listen
openContacts.addEventListener("click",active1);
getOverLay.addEventListener("click",deactivate);



document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzNYUc1STxX0jni49QnKYL5XwnnQsM-EQRFNUWRaWhXhww7M6mw2Hzc4SfZ3u7Bsl8u/exec"; 

  const data = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };

  fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });
});

