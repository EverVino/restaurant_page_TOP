import "./style.css";

function createCard(listContent, title, image) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-text");
    
    const pTitle = document.createElement("p");
    pTitle.classList.add("titulo-card");
    pTitle.textContent = title;

    card.appendChild(cardContent);
    cardContent.appendChild(pTitle);

    for(let content of listContent) {
        let p = document.createElement("p");
        p.textContent = content;
        cardContent.appendChild(p);
    }

    if (image != undefined) {
        image.classList.add("card-image");
        card.appendChild(image);
    }

    return card;
}
export default createCard