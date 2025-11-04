// URL do Apps Script do Google Sheets:
const scriptURL = "https://script.google.com/macros/s/AKfycbwzMRJc0z8tVctg9RA-gq0kXlkDuRLZ0F2oRFvTbCeT8PweZFOQbnlOki7VlY37uCNc/exec";

// Lista completa de presentes
const presentes = [
  { nome: "Frigideira Antiaderente Em Mármore 28cm Autêntico Chef", imagem: "Frigideira.jpg" },
  { nome: "Panela de Pressão Elétrica Electrolux", imagem: "Panela de Pressão Elétrica Electrolux.jpg" },
  { nome: "Conjunto de Assadeiras Marinex Opaline 3 Peças", imagem: "Conjunto de Assadeiras Marinex Opaline 3 Peças.jpg" },
  { nome: "Conjunto 7 Formas Pão Bolo 26cm Cupcake Assadeira Pizza Tortas", imagem: "Conjunto 7 Formas Pão Bolo 26cm Cupcake Assadeira Pizza Tortas.jpg" },
  { nome: "Conjunto de Refratários Celebrity, Retangular", imagem: "Conjunto de Refratários Celebrity, Retangular.jpg" },
  { nome: "Escorredor de macarrão inox", imagem: "Escorredor-de-macarrão-inox.jpg" },
  { nome: "Tábuas de corte (carne, legumes, pão) Madeira", imagem: "Tábuas de corte (carne, legumes, pão) Madeira.jpg" },
  { nome: "Conjunto de facas", imagem: "Conjunto de facas.jpg" },
  { nome: "Conjunto de talheres", imagem: "Conjunto de talheres.jpg" },
  { nome: "Colheres de pau, concha, espátula e pegador de macarrão", imagem: "Colheres-de-pau_-concha_-espátula-e-pegador-de-macarrão.jpg" },
  { nome: "Jogo de pratos (rasos, fundos e de sobremesa)", imagem: "Jogo de pratos (rasos, fundos e de sobremesa.jpg" },
  { nome: "Jogo de copos (água e suco)", imagem: "Jogo de copos (água e suco.jpg" },
  { nome: "Jogo de taças (vinho, cerveja, champanhe – opcional)", imagem: "Jogo de taças (vinho, cerveja, champanhe – opcional.jpg" },
  { nome: "Jogo de xícaras de café/chá", imagem: "Jogo de xícaras de café.jpg" },
  { nome: "Recipiente de Armazenamento Selado em Vidro", imagem: "Recipiente de Armazenamento Selado em Vidro.jpg" },
  { nome: "Travessas (vidro ou cerâmica)", imagem: "Travessas.jpg" },
  { nome: "Saladeiras", imagem: "Saladeiras.jpg" },
  { nome: "Ralador", imagem: "Ralador.jpg" },
  { nome: "Espremedor de alho", imagem: "Espremedor de alho.jpg" },
  { nome: "Abridor de latas/garrafas", imagem: "Abridor_de_latas.jpg" },
  { nome: "Saca-rolhas", imagem: "Saca-rolhas.jpg" },
  { nome: "Garrafa térmica / Bule", imagem: "Garrafa térmica Bule.jpg" },
  { nome: "Jarra de Suco", imagem: "Jarra de Suco.jpg" },
  { nome: "Escorredor de louças", imagem: "Escorredor de louças.jpg" },
  { nome: "Lixeira de pia", imagem: "Lixeira de pia.jpg" },
  { nome: "Porta-guardanapos", imagem: "Porta-guardanapos.jpg" },
  { nome: "Micro-ondas", imagem: "Micro-ondas.jpg" },
  { nome: "Liquidificador", imagem: "Liquidificador.jpg" },
  { nome: "Batedeira", imagem: "Batedeira.jpg" },
  { nome: "Mixer", imagem: "Mixer.jpg" },
  { nome: "Processador de alimentos", imagem: "Processador de alimentos.jpg" },
  { nome: "Torradeira", imagem: "Torradeira.jpg" },
  { nome: "Sanduicheira / Grill", imagem: "Sanduicheira Grill.jpg" },
  { nome: "Cafeteira Expresso", imagem: "Cafeteira Expresso.jpg" },
  { nome: "Chaleira elétrica", imagem: "Chaleira elétrica.jpg" },
  { nome: "Aspirador de pó vertical", imagem: "Aspirador de pó vertical.jpg" },
  { nome: "Ferro de passar", imagem: "Ferro de passar.jpg" },
  { nome: "Vaporizador portátil", imagem: "Vaporizador portátil.jpg" },
  { nome: "Ventilador", imagem: "Ventilador.jpg" },
  { nome: "Panela de arroz elétrica", imagem: "Panela de arroz elétrica.jpg" },
  { nome: "Air fryer", imagem: "Airfryer.jpg" },
  { nome: "Espremedor de fruta", imagem: "Espremedor-de-fruta.jpg" },
  { nome: "Jogos americanos / sousplat", imagem: "sousplat.jpg" },
  { nome: "Bandeja espelhada", imagem: "Bandeja espelhada.jpg" },
  { nome: "Jogo de lençóis (Queen)", imagem: "Jogo-de-lençóis.jpg" },
  { nome: "Edredons / cobertores", imagem: "Edredons-cobertores.jpg" },
  { nome: "Protetores de colchão/travesseiro", imagem: "Protetores de colchãotravesseiro.jpg" },
  { nome: "Jogo de toalhas (banho, rosto e piso)", imagem: "Jogo de toalhas.jpg" },
  { nome: "Kit Lavabo", imagem: "Kit-Lavabo.jpg" },
  { nome: "Baldes", imagem: "Baldes.jpg" },
  { nome: "Vassoura, rodo e pá", imagem: "Vassoura, rodo e pá.jpg" },
  { nome: "Mop ou esfregão", imagem: "Mop ou esfregão.jpg" },
  { nome: "Varal de chão ou secadora de roupas", imagem: "Varal de chão ou secadora de roupas.jpg" },
  { nome: "Cesto de roupa", imagem: "Cesto de roupa.jpg" },
  { nome: "Tábua de passar", imagem: "Tábua de passar.jpg" },
  { nome: "Extensões e filtros de linha", imagem: "Extensões e filtros de linha.jpg" },
  { nome: "Kit ferramentas", imagem: "Kit ferramentas.jpg" },
  { nome: "Potes Herméticos", imagem: "Potes Herméticos.jpg" },
  { nome: "Kit Caipirinha", imagem: "Kit Caipirinha.jpg" },
  { nome: "Pilão / Amassador de Alho", imagem: "Pilão.jpg" },
  { nome: "Amassador de Batata", imagem: "Amassador de Batata.jpg" },
  { nome: "Kit Churrasco", imagem: "Kit Churrasco.jpg" },
  { nome: "Peneiras", imagem: "Peneiras.jpg" },
  { nome: "Kit Lixeira Com Pedal Inox", imagem: "Kit Lixeira Com Pedal Inox.jpg" },
  { nome: "PIX", imagem: "PIX.jpg" }
];

// Exibir os presentes
const listaDiv = document.getElementById("lista-presentes");
presentes.forEach((p, i) => {
  const item = document.createElement("div");
  item.className = "presente";
  item.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}">
    <h3>${p.nome}</h3>
    <button onclick="escolherPresente(${i})">Escolher</button>
  `;
  listaDiv.appendChild(item);
});

// Escolher presente
function escolherPresente(index) {
  const nome = document.getElementById("nomeConvidado").value.trim();
  if (nome === "") {
    alert("Por favor, insira seu nome antes de escolher um presente!");
    return;
  }
  const presente = presentes[index];
  alert(`🎁 Presente reservado! Obrigado, ${nome}, por escolher: ${presente.nome}`);
  document.getElementsByClassName("presente")[index].style.display = "none";
}
