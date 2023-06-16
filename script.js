var authForm = document.forms.auth;
var tg = window.Telegram.WebApp;
function sendDataToBot(event) {
    var formData =  new FormData(authForm);
    let data = {
        name: formData.get("name"),
        phone: formData.get("phone")
    }
    console.log(data);
    tg.sendData(JSON.stringify(data));
    tg.close();
    event.preventDefault();
}
authForm.addEventListener("submit", sendDataToBot);
