/* 
    header.js
    ---------
    Navigtion Slider when Burger Icon is visible.
    Contains Overlay to cover Document for better Focus on Navigation. 

    @author: Matzilla
    @date: 2024-01-13
*/

/* Definition of ToggleElements to open and close Navigation */

const navElements = Array.from(document.querySelectorAll(".navbar-nav li a"));

const elements = [
    ...navElements,
    document.querySelector(".burger-icon"),
    document.querySelector(".overlay")
];



const toggleElements = [...elements, document.querySelector(".navbar")];

elements.forEach( elem => {
    elem.addEventListener("click", function() {
        headerToggle();
    })
})

const headerToggle = function () {    
    toggleElements.forEach(elem => {
        elem.classList.toggle("open");
    });    
}

/* Definition of Scroll-Behaviour */

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
  
    function scrollState() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > window.innerHeight * .25) {
            header.classList.add("page-scrolled");
        } else {
            header.classList.remove("page-scrolled");
        }
    }

    scrollState();

    window.onscroll = function() {
        scrollState();
    }
});

ddocument.addEventListener("DOMCONtentLoaded", cunf)