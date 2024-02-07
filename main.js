class MyNav extends HTMLElement {
    connectedCallback(){
        fetch('/navigation.html')
        .then(response => response.text())
        .then(htmlContent => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            const navElement = doc.querySelector('.navigation'); 
            if (navElement) {
                this.innerHTML = navElement.innerHTML; 
                init();
            } else {
                console.error('Die Klasse .navigation wurde nicht in der HTML-Datei gefunden.');
            }
        })
        .catch(error => console.error('Fehler beim Laden der HTML-Datei:', error));
    }
}
customElements.define('my-nav', MyNav);

function init() {
    const sidebarOn = document.querySelector(".sidebarOn");
    const sidebarOff = document.querySelector(".sidebarOff");
    const sidebar = document.querySelector(".sidebar");
    const sideitemlist = document.querySelector(".sideitemlist");
    const sideitems = document.querySelector(".sideitemlist li")
    const pagecontent = document.querySelector(".pagecontent")  // Jede einzelne Übungsaufgabe gehört hier rein

    sidebarOn.addEventListener("click", () => {
        if(pagecontent != null){
            pagecontent.classList.add("toSide");
        }
        sidebar.classList.add("open");
    })

    sidebarOff.addEventListener("click", () => {
        if(pagecontent != null){
            pagecontent.classList.remove("toSide");
        }
        sidebar.classList.remove("open");
    })

    //dropdown

    const dropdown = document.querySelector(".dropdown");
    const dropdown2 = document.querySelector(".dropdown2");
    const UebButton = document.querySelector(".uebutton");
    const UebButton2 = document.querySelector(".uebutton2");
    const dropdownicon = document.querySelector(".dropdownicon");
    const dropdownicon2 = document.querySelector(".dropdownicon2");
    UebButton.addEventListener("click", () => {
        dropdown.classList.toggle("open");
        sidebar.classList.toggle("dropdownwidth");
        turnicon();
    });

    UebButton2.addEventListener("click", () => {
        dropdown2.classList.toggle("open");
        sidebar.classList.toggle("dropdownwidth2");
        turnicon2();
    });

    function turnicon() {
        dropdownicon.classList.toggle("turned");
    }
    function turnicon2() {
        dropdownicon2.classList.toggle("turned");
    }
   
}

import { HideSolution } from '/modules.js';
HideSolution();






