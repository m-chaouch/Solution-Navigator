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
                    <li class="Logo"><a href="">Solution-Navigator</a></li>
                    <li></li>
                    <li class="impressum"><a href="">Impressum</a></li>    
                </ul>
            </nav>
            <nav class="sidebar">
                <ul class="sideitemlist">
                    <li class="sidebarOff">
                        <svg width="45" height="45" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- <rect width="30" height="30" fill="white"/> -->
                            <rect x="6.16113" y="21.5563" width="22" height="3" transform="rotate(-45 6.16113 21.5563)" fill="black"/>
                            <rect x="8.12134" y="6.33881" width="22" height="3" transform="rotate(45 8.12134 6.33881)" fill="black"/>
                        </svg>  
                    </li>         
                    <li><a href="Uebung_0/Uebung_0.html">Übung 0</a></li>
                    <li><a href="Uebung_1/Uebung_1.html">Übung 1</a></li>
                    <li><a href="Uebung_2/Uebung_2.html">Übung 2</a></li>
                    <li><a href="Uebung_3/Uebung_3.1.html">Übung 3</a></li>
                    <li><a href="Uebung_4/Uebung_4.1.js">Übung 4</a></li>
                    <li><a href="Uebung_5/Uebung_5.1.html">Übung 5</a></li>
                    <li><a href="Uebung_6/Uebung_6.1.html">Übung 6</a></li>
                    <li><a href="Uebung_7/Uebung_7.1.js">Übung 7</a></li>
                    <li><a href="Uebung_8/Uebung_8.1.html">Übung 8</a></li>
                    <li><a href="Uebung_9/Uebung_9.1.html">Übung 9</a></li>  
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

sidebarOn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})

sidebarOff.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})
