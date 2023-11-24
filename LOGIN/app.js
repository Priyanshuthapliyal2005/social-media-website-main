const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function redirectToMainPage() {
    // Replace this path with the actual path to your index.html
    window.location.replace("https://priyanshuthapliyal2005.github.io/social-media-website-main/");
}
