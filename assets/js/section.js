
function setSectionDependencies() {

    const sections = Array.from(document.querySelectorAll("section"));
    const navigation = Array.from(document.querySelectorAll(".navbar-nav a"));
    const sectionButton = document.querySelector(".btn-section");

    
    // Get current Section

    sections.forEach(section => {
        let position = section.getBoundingClientRect();

        if ((position.top >= window.innerHeight / 2 * (-1)) && position.top <= window.innerHeight / 2 ) {
            currentSection = section;
        }
    });

    // Set Link for Section-Button

    const nextIndex = sections.indexOf(currentSection) + 1;

 
    if (currentSection.getBoundingClientRect().top >= 80) {
        sectionButton.href = "#" + currentSection.id;
    } else { 
        if (currentSection.id != sections[sections.length - 1].id) {
            sectionButton.href = "#" + sections[nextIndex].id;
        }
    }
    
    // Hide Section Button on Document-End

    const positionLastSection = sections[sections.length - 1].getBoundingClientRect();

    if (positionLastSection.top <= window.innerHeight / 2) {
        sectionButton.classList.add("inactive");
    } else {        
        sectionButton.classList.remove("inactive");
    }


    // Color Nav-Item for current Section
    
    navigation.forEach(navItem => navItem.classList.remove("nav-current"));
    document.querySelector(".navbar-nav a[data-translate='" + currentSection.id + "']").classList.add("nav-current");
}

// Run Functions on Load and Scroll

setSectionDependencies();
window.addEventListener("scroll", setSectionDependencies);

