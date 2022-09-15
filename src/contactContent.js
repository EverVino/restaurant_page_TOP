
import "./style.css";
import createCard from "./cardContent";
import somePhoto from "./someImage.jpeg"

function contactContent(content) {
    
    const tituloContacto = document.createElement("div");
    tituloContacto.classList.add("titulo-principal");
    tituloContacto.textContent = "Contactanos";
    content.appendChild(tituloContacto);

    const someImage = new Image();
    someImage.src = somePhoto;

    const dueño = createCard(["Celular: 6445615", "alsduh@falksu.com"],"Dueño", someImage);
    content.appendChild(dueño);

    const someImage2 = new Image();
    someImage2.src = somePhoto;

    const chef = createCard(["Celular: 8615684","llll@ljka.com"],"Chef principal", someImage2);
    content.appendChild(chef);
};

export default contactContent;