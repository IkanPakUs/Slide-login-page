const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_in_btn.addEventListener("click",() => {
    container.classList.add("switch");
    setTimeout(function(){
        container.classList.remove("sign-up-mode")
    }, 1300);
    setTimeout(function(){
        container.classList.remove("switch")
    }, 2000);
});

sign_up_btn.addEventListener("click",() => {
    container.classList.add("switch");
    setTimeout(function(){
        container.classList.add("sign-up-mode")
    }, 1300);
    setTimeout(function(){
        container.classList.remove("switch")
    }, 2000);
});