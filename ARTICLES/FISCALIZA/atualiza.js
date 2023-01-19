const deputadosData = window.deputados;
console.log(deputadosData);


let content_div = document.querySelector("#box-cards");
for (let a = 0; a < deputadosData.length; a++ ) {
    console.log(deputadosData[a].nome);
    let name = document.createElement("h6");
    name.innerHTML = deputadosData[a].nome;
    img = document.createElement("img");
    img.src = deputadosData[a].urlfoto;
    let card = document.createElement("div");
    card.setAttribute("id","card");
    card.appendChild(img);
    card.appendChild(name);
    content_div.insertAdjacentElement("afterbegin",card);
}