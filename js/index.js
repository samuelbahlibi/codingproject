const onWindowLoaded = () => {
    console.log('window loaded');
}

var loginModal = document.querySelector("[class='navbar-login-modal']");
var loginTrigger = document.querySelector("[class='navbar-login']");
var loginCloseButton = document.querySelector("[class='login-close-button']");

var signupModal = document.querySelector("[class='navbar-signup-modal']");
var signupTrigger = document.querySelector("[class='navbar-signup']");
var signupCloseButton = document.querySelector("[class='signup-close-button']");

function toggleLoginModal() {
    loginModal.classList.toggle("show-login-modal");
}

function toggleSignupModal() {
    signupModal.classList.toggle("show-signup-modal");
}

function loginWindowOnClick(event) {
    if (event.target === loginModal) {
        toggleLoginModal();
    }
    if (event.target === signupModal) {
        toggleSignupModal();
    }
}

loginTrigger.addEventListener("click", toggleLoginModal);
loginCloseButton.addEventListener("click", toggleLoginModal);
signupTrigger.addEventListener("click", toggleSignupModal);
signupCloseButton.addEventListener("click", toggleSignupModal);
window.addEventListener("click", loginWindowOnClick);