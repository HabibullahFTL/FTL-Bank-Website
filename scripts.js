// Login Form variables
const loginSection = document.querySelector('.login-section');
const loginAlert = document.getElementById('login-alert');
const loginEmail = document.getElementById('login-email');
const loginPass = document.getElementById('login-password');
const loginButton = document.getElementById('login-btn');
const dashboard = document.querySelector(".dashboard");

// Login Form Handler
loginButton.addEventListener('click',login);
function login(_e) {
    var userLogin = {email:"abc@gmail.com",password:"123456"};
    if (loginEmail.value == userLogin.email && loginPass.value == userLogin.password) {
        loginAlert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        Successfully logged-in to FTL Banking system.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
        setTimeout(function() {
            loginSection.style.display = "none";
            dashboard.style.display = "block";
        },800)
    }else{
        loginAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to login. Email or password is wrong!
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
        setTimeout(function() {
            document.getElementById('login-alert').firstChild.remove();
        },2000)
    }
}

// Dashboard Variables
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositSubmit = document.getElementById('deposit-submit');
const withdrawSubmit = document.getElementById('withdraw-submit');

depositSubmit.addEventListener('click',deposit);
withdrawSubmit.addEventListener('click',withdraw);

function deposit(e) {
    let depositValue = parseFloat(depositInput.value);
    let depositAmountNum = parseFloat(depositAmount.innerText)
    let balanceAmountNum = parseFloat(balanceAmount.innerText)
    if (depositValue > 0) {
        depositAmount.innerText = depositValue + depositAmountNum;
        balanceAmount.innerText = balanceAmountNum + depositValue;
        depositInput.value = '';
    }else{
        alert("Please enter a valid amount.")
    }
    
}

function withdraw(e) {
    let withdrawValue = parseFloat(withdrawInput.value);
    let withdrawAmountNum = parseFloat(withdrawAmount.innerText)
    let balanceAmountNum = parseFloat(balanceAmount.innerText)
    if (withdrawValue > 0) {
        withdrawAmount.innerText = withdrawValue + withdrawAmountNum;
        balanceAmount.innerText = balanceAmountNum - withdrawValue;
        withdrawInput.value = '';
    }else{
        alert("Please enter a valid amount.")
    }
    
}