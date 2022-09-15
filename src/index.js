
import "./style.css";
import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent"
import removeChild from "./removeChild";

const content = document.querySelector("#content");
console.log(content);

const buttonHome = document.querySelector("#buttonHome");
const buttonMenu = document.querySelector("#buttonMenu");
const buttonContact = document.querySelector("#buttonContact");

let coverhome = document.querySelector("#coverhome");
let covermenu = document.querySelector("#covermenu");
let covercontact = document.querySelector("#covercontact");

buttonHome.addEventListener("click", ()=> {
        removeChild(content);
        homeContent(content);
        coverhome.hidden = false;
        covermenu.hidden = true;
        covercontact.hidden = true;
    }
);

buttonMenu.addEventListener("click", () => {
    removeChild(content);
    menuContent(content);
    coverhome.hidden = true;
    covermenu.hidden = false;
    covercontact.hidden = true;
    }
);

buttonContact.addEventListener("click", () => {
    removeChild(content);
    contactContent(content);
    coverhome.hidden = true;
    covermenu.hidden = true;
    covercontact.hidden = false;
    }
);

homeContent(content);


