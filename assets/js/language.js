
/* 
    language.js
    Language Selection 

    @author: Matzilla
    @date: 2024-01-07
*/

let lang;
let langAvailable = localStorage.getItem("lang");

if (langAvailable == null) {
    lang = document.documentElement.lang;
} else {
    lang = langAvailable;
    document.documentElement.lang = lang;
}

function setLang() {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.getElementById(lang).checked = true;
};

function translate(lang) {
    setTimeout(function() {
        fetch("assets/lang/" + lang + ".json")
            .then(response => response.json())
            .then(data => {
                let keys = Object.keys(data);
                keys.forEach(key => {
                    let elements = document.querySelectorAll('[data-translate="' + key + '"]');
                    if (elements !== null) {
                        elements.forEach(elem => {
                            elem.innerHTML = data[key];
                        });
                    }
                });
            })
            .catch(error => {
                console.error("Unable to fetch language:", error);
            });
    }, 500);
}

function languageOverlay(lang) {
    this.lang = lang;
    document.querySelector(".language-overlay img").setAttribute("src", "assets/images/icons/" + lang + ".png");
    
    let overlay = document.querySelector(".language-overlay");
    overlay.style.display = "flex";
    overlay.style.animation = "opacity-in linear .1s";
    setTimeout( function() {
        overlay.style.display = "none";
    }, 1250);
}

function changeIcon() {
    document.querySelector(".language-icon").setAttribute("src", "assets/images/icons/" + lang + ".png");
}

setLang();
translate(lang);
changeIcon();


document.querySelector(".language").addEventListener("change", function(event) {
    lang = event.target.id;
    setLang();
    translate(lang);
    languageOverlay(lang);
    changeIcon();
});