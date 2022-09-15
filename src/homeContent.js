
import "./style.css";
import createCard from "./cardContent";
import horariofoto from "./someImage.jpeg"

function homeContent(content) {
    
    const tituloPrincipal = document.createElement("div");
    tituloPrincipal.classList.add("titulo-principal");
    tituloPrincipal.textContent = "Ever's Restaurant";
    content.appendChild(tituloPrincipal);

    const recomCard = createCard(["Es un buen restaurant para compartir en familia", "Un cliente feliz"],"Recomendación");
    content.appendChild(recomCard);

    const horarioImage = new Image();
    horarioImage.src = horariofoto;
    const horarioCard = createCard(["un a Vie: 9:00 - 20:00","Sab: 9:00 - 15:00"], "Horario de atención", horarioImage);
    content.appendChild(horarioCard);

    const lugarCard = createCard(["123 Forest Drive, Forest Ville. Maine","Come An enjoy the food"], "Lugar de Atención");
    content.appendChild(lugarCard);
};

export default homeContent;