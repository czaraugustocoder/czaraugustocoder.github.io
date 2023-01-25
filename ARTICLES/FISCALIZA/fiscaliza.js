const deputadosData = window.deputados;
console.log(deputadosData);

function main(){
let content_div = document.querySelector("#box-cards");
for (let a = 0; a < deputadosData.length; a++ ) {
    console.log(deputadosData[a].nome);
    let name = document.createElement("h6");
    name.innerHTML = deputadosData[a].nome;
    img = document.createElement("img");
    img.src = deputadosData[a].urlFoto;
    let card = document.createElement("div");
    card.className = "card"
    card.setAttribute("id",deputadosData[a].id);
    card.appendChild(img);
    card.appendChild(name);
    content_div.insertAdjacentElement("afterbegin",card);
}

let cards = document.querySelectorAll(".card");
for (let b =0; b < cards.length; b++){
    let element = cards[b];
    element.addEventListener("click", () => {
        let elementId = element.id;
        console.log(elementId);
        infoDep(elementId);
        })
    }
}

function infoDep(id_dep){
    console.log(deputadosData);
    console.log(id_dep);
    let info = deputadosData.find(item => item.id == id_dep);
    console.log(info.nome);
    let nameDep = info.nome;
    let foto = info.urlFoto;
    let newPage = window.open("");
    newPage.document.write(
    `<html>
    <head>
    <title>${nameDep}</title>
    </head>
    <body>
    <img src=${foto}>
    <h1>${nameDep}</h1>
    <a href="javascript:history.back()">Go Back</a>
    </body>
    </html>`
    );
}

main();