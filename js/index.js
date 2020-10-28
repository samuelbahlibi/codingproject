const onWindowLoaded = () => {
    console.log('window loaded');
}

var loginModal = document.querySelector("[class='navbar-login-modal']");
var loginTrigger = document.querySelector("[class='navbar-login']");
var loginCloseButton = document.querySelector("[class='login-close-button']");

function toggleModal() {
    loginModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === loginModal) {
        toggleModal();
    }
}

loginTrigger.addEventListener("click", toggleModal);
loginCloseButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);