class MyNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar">
            <ul class="navitemlist">
                <li class="sidebarOn">
                    <svg width="45" height="45" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- <rect width="30" height="30" fill="white"/> -->
                        <rect x="4" y="6" width="22" height="3" fill="black"/>
                        <rect x="4" y="13" width="22" height="3" fill="black"/>
                        <rect x="4" y="20" width="22" height="3" fill="black"/>
                    </svg>
                </li>
                <li class="Logo"><a href="/index.html"><p>Solution-Navigator</p></a></li>
                <li class="dummy"></li>
                <li class="impressum"><a href=""><p>Impressum</p></a></li>
            </ul>
        </nav>
        <nav class="sidebar">
            <ul class="sideitemlist" >
                <div class="sidebarOff">
                    <svg width="45" height="45" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- <rect width="30" height="30" fill="white"/> -->
                        <rect x="6.16113" y="21.5563" width="22" height="3" transform="rotate(-45 6.16113 21.5563)" fill="black"/>
                        <rect x="8.12134" y="6.33881" width="22" height="3" transform="rotate(45 8.12134 6.33881)" fill="black"/>
                    </svg>
                </div>
                <li><a href="../Uebung_0/Uebung_0.html"><p class="sidebarItemtext">Hallo Welt!</p></a></li>
                <li><a href="../Uebung_1/Uebung_1.7.html"><p class="sidebarItemtext">Übung 1.7</p></a></li>
                <li><a href="../Uebung_2/Uebung_2.4.html"> <p class="sidebarItemtext">Übung 2.4</p></a></li>
                <li>
                    <a class="uebutton" >
                        <p class="sidebarItemtext">Übung 3</p>
                        <div class="pos">
                            <svg class="dropdownicon" width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2325_9)">
                                <rect x="12.1213" y="4" width="16" height="3" transform="rotate(45 12.1213 4)" fill="black"/>
                                <rect x="10.21" y="24.5237" width="15.8599" height="3" transform="rotate(-45 10.21 24.5237)" fill="black"/>
                                </g>
                            </svg>
                        </div>
                    </a>
                </li>
                <ul class="dropdown">
                    <li>
                        <a href="../Uebung_3/Uebung_3.1.html"> <p class="sidebarItemtext">Übung 3.1</p></a>
                        <a href="../Uebung_3/Uebung_3.2.html"> <p class="sidebarItemtext">Übung 3.2</p></a>
                    </li>
                </ul>
                <li><a href="../Uebung_4/Uebung_4.html"><p class="sidebarItemtext">Übung 4.1</p></a></li>
                <li><a href="../Uebung_5/Uebung_5.2.html"><p class="sidebarItemtext">Übung 5.2</p></a></li>
                <li><a href="../Uebung_6/Uebung_6.1.html"><p class="sidebarItemtext">Übung 6.1</p></a></li>
                <li><a href="../Uebung_7/Uebung_7.2.html"><p class="sidebarItemtext">Übung 7.2</p></a></li>
                <li>
                    <a class="uebutton2">
                        <p class="sidebarItemtext">Übung 8</p>
                        <div class="pos">
                            <svg class="dropdownicon2" width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2325_9)">
                                <rect x="12.1213" y="4" width="16" height="3" transform="rotate(45 12.1213 4)" fill="black"/>
                                <rect x="10.21" y="24.5237" width="15.8599" height="3" transform="rotate(-45 10.21 24.5237)" fill="black"/>
                                </g>
                            </svg>
                        </div>
                    </a>
                </li>
                <ul class="dropdown2">
                    <li>
                        <a href="../Uebung_8/Uebung_8.1.html"> <p class="sidebarItemtext">Übung 8.1</p></a>
                        <a href="../Uebung_8/Uebung_8.2.html"> <p class="sidebarItemtext">Übung 8.2</p></a>
                    </li>
                </ul>
                <li><a href="../Uebung_9/Uebung_9.3.html"><p class="sidebarItemtext">Übung 9.3</p></a></li>
                <li><a href="../Uebung_10/Uebung_10.1.html"><p class="sidebarItemtext">Übung 10.1</p></a></li>
                <li><a href="../Uebung_11/Uebung_11.1.html"><p class="sidebarItemtext">Übung 11.1</p></a></li>
                <li><a href="../Uebung_12/index.php"><p class="sidebarItemtext">Übung 12.1</p></a></li>
                <li><a href="../sonstige/Spread.html"><p class="sidebarItemtext">Spread</p></a></li>
            </ul>
        </nav>
            `
    }
}
customElements.define('my-nav', MyNav);

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
    // toggleDropdown();
    dropdown.classList.toggle("open");
    sidebar.classList.toggle("dropdownwidth");
    turnicon();
});

UebButton2.addEventListener("click", () => {
    // toggleDropdown();
    dropdown2.classList.toggle("open");
    sidebar.classList.toggle("dropdownwidth2");
    turnicon2();
});

// function toggleDropdown(){
//     dropdown.get
// }
function turnicon() {
    dropdownicon.classList.toggle("turned");
}
function turnicon2() {
    dropdownicon2.classList.toggle("turned");
}



