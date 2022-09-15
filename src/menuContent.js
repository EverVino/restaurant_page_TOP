
import "./style.css";
import createCard from "./cardContent";
import somePhoto from "./someImage.jpeg"

function menuContent(content) {
    
    const tituloBebidas = document.createElement("div");
    tituloBebidas.classList.add("titulo-principal");
    tituloBebidas.textContent = "Bebidas";
    content.appendChild(tituloBebidas);

    const someImage = new Image();
    someImage.src = somePhoto;

    const bebidas = createCard(["Una sabrosa mezcla de miel con agua de los nevados", "Precio: Bs 10"], "Hidromiel", someImage);
    content.appendChild(bebidas);

    const tituloPostres = document.createElement("div");
    tituloPostres.classList.add("titulo-principal");
    tituloPostres.textContent = "Postres";
    content.appendChild(tituloPostres);

    const someImage2 = new Image();
    someImage2.src = somePhoto;

    const postres = createCard(["Una mezcla de leche evaporada con gelatina","Precio: Bs 3"],"Chatilin", someImage2);
    content.appendChild(postres);

    const tituloPlato = document.createElement("div");
    tituloPlato.classList.add("titulo-principal");
    tituloPlato.textContent = "Plato Principal";
    content.appendChild(tituloPlato);

    const someImage3 = new Image();
    someImage3.src = somePhoto;

    const plato = createCard(["Multiples carnes con papas fritas y su llajua","Precio: Bs 25"],"Pique Macho", someImage3);
    content.appendChild(plato);
};

export default menuContent;