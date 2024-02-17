// SOFTSKILLS PROGRESS BARS

const bars = Array.from(document.querySelectorAll(".skill-progress"));
let values = [];

function getValues() {
    const progress = Array.from(document.querySelectorAll(".skill-value"));

    progress.forEach(value => {
        values.push(parseInt(value.innerHTML));
    })
};

function setProgressBar() {
    for(let i = 0; i < bars.length; i++) {
        bars[i].style.width = values[i] + "%";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    getValues();
    setProgressBar();
});


