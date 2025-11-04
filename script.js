// URL do Apps Script do Google Sheets:
const scriptURL = "https://script.google.com/macros/s/AKfycbxLG3SwLVDgJX3Tf8c-S2OvKiPoYqKvLuxhP6wN0HdQZS8-ixBnnM-O7RJhAzfUGHrI/exec";

// Lista de presentes (nomes simplificados e sem acentos)
const presentes = [
  { nome: "Air Fryer", imagem: "images/Airfryer.jpg" },
  { nome: "Amassador de Batata", imagem: "images/amassadordebatata.jpg" },
  { nome: "Aspirador de Pó Vertical", imagem: "images/aspiradordepo.jpg" },
  { nome: "Conjunto 7 Formas Pão Bolo 26cm Cupcake Assadeira Pizza Tortas", imagem: "images/assadeira.jpg" },
  { nome: "Conjunto de Assadeiras Marinex Opaline 3 Peças", imagem: "images/assadeiras.jpg" },
  { nome: "Baldes", imagem: "images/balde.jpg" },
  { nome: "Bandeja Espelhada", imagem: "images/bandejaespelhada.jpg" },
  { nome: "Batedeira", imagem: "images/Batedeira.jpg" },
  { nome: "Cafeteira Expresso", imagem: "images/cafeteira.jpg" },
  { nome: "Kit Caipirinha", imagem: "images/caipirinha.jpg" },
  { nome: "Cesto de Roupa", imagem: "images/cesto.jpg" },
  { nome: "Chaleira Elétrica", imagem: "images/chaleira.jpg" },
  { nome: "Kit Churrasco", imagem: "images/churrasco.jpg" },
  { nome: "Colheres de pau, concha, espátula e pegador de macarrão", imagem: "images/conchas.jpg" },
  { nome: "Jogo de copos (água e suco)", imagem: "images/copos.jpg" },
  { nome: "Edredons / cobertores", imagem: "images/ededron.jpg" },
  { nome: "Escorredor de Louças", imagem: "images/escorredor.jpg" },
  { nome: "Escorredor de Macarrão", imagem: "images/escorredordemacarrao.jpg" },
  { nome: "Espremedor de Alho", imagem: "images/Espremedordealho.jpg" },
  { nome: "Espremedor de Fruta", imagem: "images/espremedordefruta.jpg" },
  { nome: "Extensão e Filtro de Linha", imagem: "images/extensão.jpg" },
  { nome: "Conjunto de Facas", imagem: "images/facas.jpg" },
  { nome: "Kit de Ferramentas", imagem: "images/ferramentas.jpg" },
  { nome: "Ferro de Passar", imagem: "images/ferro.jpg" },
  { nome: "Frigideira Antiaderente", imagem: "images/Frigideira.jpg" },
  { nome: "Garrafa Térmica", imagem: "images/garrafa.jpg" },
  { nome: "Jarra de Suco", imagem: "images/jarra.jpg" },
  { nome: "Kit Lixeira Inox", imagem: "images/kitlixeira.jpg" },
  { nome: "Kit Lavabo", imagem: "images/KitLavabo.jpg" },
  { nome: "Jogo de Lençóis (Queen)", imagem: "images/lencois.jpg" },
  { nome: "Liquidificador", imagem: "images/Liquidificador.jpg" },
  { nome: "Lixeira de Pia", imagem: "images/Lixeirapia.jpg" },
  { nome: "Micro-ondas", imagem: "images/Microondas.jpg" },
  { nome: "Mixer", imagem: "images/Mixer.jpg" },
  { nome: "Mop ou Esfregão", imagem: "images/mop.jpg" },
  { nome: "Panela de Arroz Elétrica", imagem: "images/paneladearroz.jpg" },
  { nome: "Panela de Pressão Elétrica", imagem: "images/paneladepressao.jpg" },
  { nome: "Peneiras", imagem: "images/Peneiras.jpg" },
  { nome: "Pilão / Amassador de Alho", imagem: "images/pilao.jpg" },
  { nome: "Porta-guardanapos", imagem: "images/portaguardanapos.jpg" },
  { nome: "Potes Herméticos", imagem: "images/poteshermeticos.jpg" },
  { nome: "Jogo de Pratos", imagem: "images/pratos.jpg" },
  { nome: "Processador de Alimentos", imagem: "images/processador.jpg" },
  { nome: "Protetores de Colchão / Travesseiro", imagem: "images/protetor.jpg" },
  { nome: "Recipiente de Armazenamento em Vidro", imagem: "images/recipiente.jpg" },
  { nome: "Conjunto de Refratários", imagem: "images/refratarios.jpg" },
  { nome: "Ralador", imagem: "images/Ralador.jpg" },
  { nome: "Saca-rolhas", imagem: "images/sacarolha.jpg" },
  { nome: "Sanduicheira / Grill", imagem: "images/sanduicheira.jpg" },
  { nome: "Saladeiras", imagem: "images/Saladeiras.jpg" },
  { nome: "Jogo de Taças", imagem: "images/tacas.jpg" },
  { nome: "Jogo de Talheres", imagem: "images/talheres.jpg" },
  { nome: "Tábua de Passar", imagem: "images/tabua.jpg" },
  { nome: "Tábuas de Corte", imagem: "images/tabuasdecorte.jpg" },
  { nome: "Toalhas (banho, rosto e piso)", imagem: "images/toalhas.jpg" },
  { nome: "Torradeira", imagem: "images/Torradeira.jpg" },
  { nome: "Travessas", imagem: "images/Travessas.jpg" },
  { nome: "Ventilador", imagem: "images/Ventilador.jpg" },
  { nome: "Varal de Chão", imagem: "images/varal.jpg" },
  { nome: "Vassoura, Rodo e Pá", imagem: "images/vassoura.jpg" },
  { nome: "Jogo de Xícaras", imagem: "images/xicaras.jpg" },
  { nome: "Jogos americanos/sousplat", imagem: "images/sousplat.jpg" },
  { nome: "PIX", imagem: "images/PIX.jpg" },
  { nome: "Abridor de Latas", imagem: "images/abridordelatas.jpg" }
];

// Exibir os presentes na tela
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

// Função de escolha do presente
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
