document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".parallax-background");

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        background.style.transform = "translateY(" + scrollPosition * .4 + "px)";
    })
})