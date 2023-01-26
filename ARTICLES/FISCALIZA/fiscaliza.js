const deputadosData = window.deputados;
const deputadosGastos = window.gastos;
console.log(deputadosData);
console.log(deputadosGastos);

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
    let infoGastos = deputadosGastos.filter(deputado => deputado.codigo == id_dep);
    console.log(infoGastos);
    let despesas = infoGastos.map(function (type) {
        return type.despesa;
    });
    console.log(despesas); // ['John', 'Wayne', 'David']
    let uniques = [...new Set(despesas)];
    console.log(uniques);
    let total = 0;
    let table = "";
    for (let c = 0; c < uniques.length; c++){
        console.log(uniques[c]);
        let gastosByType = infoGastos.filter(gasto => gasto.despesa == uniques[c]);
        console.log(gastosByType);
        let sum = gastosByType.reduce((accumulator, object) => {
            return accumulator + object.valor;
          }, 0);
        total += sum;
        
        console.log(uniques[c],sum)

        table += `${uniques[c]}: ${sum}<br>`
    }

    console.log("total: ",total);
    console.log(table);

    let newPage = window.open("");
    newPage.document.write(
    `<html>
    <head>
    <title>${nameDep}</title>
    </head>
    <body>
    <img src=${foto}>
    <h1>${nameDep}</h1>
    <h2>Detalhamento dos valores gastos</h2>
    <div>${table}</div>
    </body>
    </html>`
    );
}

main();