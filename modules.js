//Buttonmodul

export function SocialButtonEventListener() {
    const button = document.querySelectorAll("social"); //es gibt genau 2 Elemente mit social als class -> Array zurück
    button[0].addEventListener('click', e => {
        window.location.href = "https://de.linkedin.com/in/moataz-chaouch-4b506b1a1";   //https://www.altcademy.com/blog/how-to-link-a-button-to-another-page-in-html/
    })

    button[1].addEventListener('click', e => {
        window.location.href = "https://www.xing.com/profile/Moataz_Chaouch";
    })
}

