let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let Email = document.getElementById('Email');
let FnameDisplay = document.getElementById('FnameDisplay');
let LnameDisplay = document.getElementById('LnameDisplay');
let PhoneDisplay  = document.getElementById('PhoneDisplay');
let SignOutBtn = document.getElementById('signoutbutton');

Email.innerText = `${UserCreds.email}`;
FnameDisplay.innerText = `${UserInfo.firstname}`;
LnameDisplay.innerText = `${UserInfo.lastname}`;
PhoneDisplay.innerText = `${UserInfo.phonenumber}`;

let Signout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    alert("Log out successfully");
    window.location.href = 'Login.html'
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds")){
        window.location.href = 'Login.html'
    }
}

window.addEventListener('load',CheckCred);
SignOutBtn.addEventListener('click',Signout);