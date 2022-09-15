function removeChild(element) {
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}

export default removeChild;