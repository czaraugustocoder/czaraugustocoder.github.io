/* =====================================================================
   NOTAS DE CESAR — lista de gráficos
   ---------------------------------------------------------------------
   Para publicar um gráfico novo:
     1. Suba a imagem (PNG/JPG) para a raiz do repositório.
     2. Copie um dos blocos abaixo e cole NO TOPO da lista.
     3. Preencha os campos. O primeiro item da lista vira o destaque.

   Campos:
     id       → identificador curto, sem espaço (vira link: site/#id)
     editoria → Economia | Educação | Segurança | Mercados | Cultura
                (pode criar novas; o filtro se atualiza sozinho)
     titulo   → manchete do card
     linha    → frase de apoio (o "standfirst" da Economist)
     data     → texto livre, ex.: "Outubro/2026"
     fonte    → fonte dos dados
     imagem   → nome do arquivo
     alt      → descrição da imagem para acessibilidade
   ===================================================================== */

const GRAFICOS = [
  {
    id: "renda-percentil",
    editoria: "Economia",
    titulo: "Com R$ 4.500 por mês, você já está entre os 20% mais ricos do Brasil",
    linha: "Os 20% com maior rendimento do trabalho ficam com 55,3% de toda a renda. No Centro-Oeste, o topo da distribuição se descola ainda mais.",
    data: "Outubro/2026",
    fonte: "IBGE — PNAD Contínua",
    imagem: "RENDA_PERCENTIL.png",
    alt: "Gráfico do rendimento mensal do trabalho por percentil no Brasil e grandes regiões, 1º trimestre de 2026"
  },
  {
    id: "pisa",
    editoria: "Educação",
    titulo: "20 anos de PISA: Brasil avançou, mas não sustentou a melhora",
    linha: "O maior salto veio entre 2003 e 2009. Desde então, o país alterna avanços e recuos em Leitura e Matemática.",
    data: "Setembro/2026",
    fonte: "INEP",
    imagem: "PISA.jpg",
    alt: "Gráfico das notas do Brasil no PISA em Leitura e Matemática, comparadas com OCDE e países latino-americanos, 2003 a 2025"
  },
  {
    id: "educacao-basica",
    editoria: "Educação",
    titulo: "11 anos de dados da educação básica pública do Brasil",
    linha: "A educação profissional mais que dobrou desde 2015, enquanto a EJA e o ensino regular encolheram.",
    data: "Fevereiro/2026",
    fonte: "INEP/MEC",
    imagem: "EDUC_BASICA.png",
    alt: "Gráfico da evolução de matrículas na educação básica pública por modalidade, 2015 a 2025"
  },
  {
    id: "the-walking-dead",
    editoria: "Cultura",
    titulo: "11 temporadas de The Walking Dead",
    linha: "A audiência chegou ao auge na quinta temporada e nunca mais recuperou os patamares do início.",
    data: "Fevereiro/2026",
    fonte: "TV Series Finale",
    imagem: "TWD.png",
    alt: "Gráfico da audiência por episódio de The Walking Dead, em milhões, por temporada"
  },
  {
    id: "bolsas-emergentes",
    editoria: "Mercados",
    titulo: "O mercado acionário brasileiro e outros emergentes em janeiro de 2026",
    linha: "Argentina e Brasil lideraram entre os emergentes; o Ibovespa subiu de forma mais consistente que México, China e Índia.",
    data: "Janeiro/2026",
    fonte: "Yahoo Finance",
    imagem: "IBVESPA_01_2025.png",
    alt: "Gráfico da evolução dos principais índices de bolsas emergentes, agosto de 2025 a janeiro de 2026"
  },
  {
    id: "mortes-violentas",
    editoria: "Segurança",
    titulo: "13 anos de dados de violência do Brasil",
    linha: "As mortes violentas caem desde 2017, mas Norte e Nordeste seguem acima da média nacional.",
    data: "Dezembro/2025",
    fonte: "Fórum Brasileiro de Segurança Pública",
    imagem: "MVI.png",
    alt: "Gráfico de mortes violentas intencionais por 100 mil habitantes no Brasil e grandes regiões, 2012 a 2024"
  },
  {
    id: "gini",
    editoria: "Economia",
    titulo: "13 anos de Índice de Gini",
    linha: "Depois da alta a partir de 2015 e do sobe e desce da pandemia, a desigualdade caiu em todas as regiões desde 2021.",
    data: "Agosto/2025",
    fonte: "IPEA",
    imagem: "GINI.png",
    alt: "Gráfico do Índice de Gini nas grandes regiões do Brasil, 2012 a 2024"
  }
];
