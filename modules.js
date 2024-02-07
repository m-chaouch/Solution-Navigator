//Buttonmodul für Soziales

export function SocialButtonEventListener() {
    const button = document.querySelectorAll(".buttons"); //es gibt genau 2 Elemente mit social als class -> Array zurück
    button[0].addEventListener('click', e => {  // Xing-Profil
        window.open("https://www.xing.com/profile/Moataz_Chaouch", "_blank"); //https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    })

    button[1].addEventListener('click', e => {  // LinkedIn-Profil
        window.open("https://de.linkedin.com/in/moataz-chaouch-4b506b1a1", "_blank");  
    })
}

export function HideSolution() {
    const solutionButton = document.querySelector(".solutionButton");
    const solutionDiv = document.querySelector(".solution")
    solutionButton.addEventListener('click' , e => {
        if(solutionDiv.style.display === "none") {
            solutionDiv.style.display = "block";
            solutionButton.textContent = "Lösung verbergen";
        } else {
            solutionDiv.style.display = "none";
            solutionButton.textContent = "Lösung anzeigen";
        }
    });
}

