/* =====================================================================
   NOTAS DE CESAR — lista de artigos
   ---------------------------------------------------------------------
   Cada artigo é uma página em artigos/<id>.html (use taxi-driver.html
   como modelo) com a capa em artigos/img/. Depois, cole um bloco
   NO TOPO desta lista para ele aparecer na página inicial.
   Campo opcional: foco: "center 30%" → qual parte da capa aparece no card.
   ===================================================================== */

const ARTIGOS = [
  {
    id: "a-estrada",
    editoria: "Cultura · Cinema",
    titulo: "A Estrada",
    linha: "Se Thomas Hobbes fosse vivo, usaria A Estrada como peça argumentativa em Leviatã",
    data: "Novembro/2026",
    capa: "artigos/img/a-estrada-capa.jpg",
    alt: "Viggo Mortensen e Kodi Smit-McPhee em A Estrada"
  },
  {
    id: "onde-os-fracos-nao-tem-vez",
    editoria: "Cultura · Cinema",
    titulo: "Onde os Fracos Não Têm Vez",
    linha: "O niilismo em um clássico moderno dos irmãos Coen",
    data: "Março/2026",
    capa: "artigos/img/onde-os-fracos-capa.jpg",
    alt: "Tommy Lee Jones, Javier Bardem e Josh Brolin em Onde os Fracos Não Têm Vez"
  },
  {
    id: "taxi-driver",
    editoria: "Cultura · Cinema",
    titulo: "50 anos de ‘Taxi Driver’",
    linha: "Onde estaria Travis Bickle na era das redes sociais?",
    data: "Fevereiro/2026",
    capa: "artigos/img/taxi-driver-capa.jpg",
    alt: "Travis Bickle, personagem de Robert De Niro, numa sala de cinema"
  }
];
