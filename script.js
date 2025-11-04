// URL do Apps Script do Google Sheets:
const scriptURL = "https://script.google.com/macros/s/AKfycbwzMRJc0z8tVctg9RA-gq0kXlkDuRLZ0F2oRFvTbCeT8PweZFOQbnlOki7VlY37uCNc/exec";

const presentes = [
  { nome: "Frigideira Antiaderente Em Mármore 28cm Autêntico Chef", imagem: "https://m.media-amazon.com/images/I/81NnyzCN5WL._AC_SL1500_.jpg" },
  { nome: "Panela de Pressão Elétrica Electrolux", imagem: "https://m.media-amazon.com/images/I/71hXZ2y4j0L._AC_SL1500_.jpg" },
  { nome: "Conjunto de Assadeiras Marinex Opaline 3 Peças", imagem: "https://m.media-amazon.com/images/I/71iXUeRrLHL._AC_SL1500_.jpg" },
  { nome: "Conjunto 7 Formas Pão Bolo 26cm Cupcake", imagem: "https://m.media-amazon.com/images/I/61Z0RjUsmZL._AC_SL1500_.jpg" },
  { nome: "Conjunto de Refratários Celebrity", imagem: "https://m.media-amazon.com/images/I/81Dh8jgiQnL._AC_SL1500_.jpg" },
  { nome: "Escorredor de macarrão inox", imagem: "https://m.media-amazon.com/images/I/61bAYHVDdtL._AC_SL1500_.jpg" },
  { nome: "Tábuas de corte (carne, legumes, pão)", imagem: "https://m.media-amazon.com/images/I/81mPqPyfPAL._AC_SL1500_.jpg" },
  { nome: "Conjunto de facas", imagem: "https://m.media-amazon.com/images/I/61iRjL3p4DL._AC_SL1500_.jpg" },
  { nome: "Conjunto de talheres", imagem: "https://m.media-amazon.com/images/I/71Hhfg5E0pL._AC_SL1500_.jpg" },
  { nome: "Colheres de pau, concha e espátula", imagem: "https://m.media-amazon.com/images/I/71sAnvBoPPL._AC_SL1500_.jpg" },
  { nome: "Jogo de pratos (rasos, fundos e sobremesa)", imagem: "https://m.media-amazon.com/images/I/81IfO64PyUL._AC_SL1500_.jpg" },
  { nome: "Jogo de copos", imagem: "https://m.media-amazon.com/images/I/71VyFK9b2RL._AC_SL1500_.jpg" },
  { nome: "Jogo de taças (vinho, cerveja, champanhe)", imagem: "https://m.media-amazon.com/images/I/61zZtWKiJfL._AC_SL1500_.jpg" },
  { nome: "Jogo de xícaras", imagem: "https://m.media-amazon.com/images/I/71jUuD2MwsL._AC_SL1500_.jpg" },
  { nome: "Recipientes de vidro selados", imagem: "https://m.media-amazon.com/images/I/71i4kfs2fXL._AC_SL1500_.jpg" },
  { nome: "Travessas (vidro ou cerâmica)", imagem: "https://m.media-amazon.com/images/I/71+mvBeuATL._AC_SL1500_.jpg" },
  { nome: "Saladeiras", imagem: "https://m.media-amazon.com/images/I/71YUyhM9M1L._AC_SL1500_.jpg" },
  { nome: "Ralador", imagem: "https://m.media-amazon.com/images/I/71a3LzRvG2L._AC_SL1500_.jpg" },
  { nome: "Espremedor de alho", imagem: "https://m.media-amazon.com/images/I/61cKyb9FJVL._AC_SL1500_.jpg" },
  { nome: "Abridor de latas/garrafas", imagem: "https://m.media-amazon.com/images/I/61oz66x6s3L._AC_SL1500_.jpg" },
  { nome: "Saca-rolhas", imagem: "https://m.media-amazon.com/images/I/61vKv3PuxoL._AC_SL1500_.jpg" },
  { nome: "Garrafa térmica / Bule", imagem: "https://m.media-amazon.com/images/I/71EoUOfB0hL._AC_SL1500_.jpg" },
  { nome: "Jarra de suco", imagem: "https://m.media-amazon.com/images/I/71uRIR9X2WL._AC_SL1500_.jpg" },
  { nome: "Escorredor de louças", imagem: "https://m.media-amazon.com/images/I/81bZNhItbBL._AC_SL1500_.jpg" },
  { nome: "Lixeira de pia", imagem: "https://m.media-amazon.com/images/I/61T6yXQKtBL._AC_SL1500_.jpg" },
  { nome: "Micro-ondas", imagem: "https://m.media-amazon.com/images/I/71+oT7Z1EfL._AC_SL1500_.jpg" },
  { nome: "Liquidificador", imagem: "https://m.media-amazon.com/images/I/71WZzImlBFL._AC_SL1500_.jpg" },
  { nome: "Batedeira", imagem: "https://m.media-amazon.com/images/I/71SrK2Ns1VL._AC_SL1500_.jpg" },
  { nome: "Air Fryer", imagem: "https://m.media-amazon.com/images/I/71Nh7TnXkFL._AC_SL1500_.jpg" },
  { nome: "Cafeteira Expresso", imagem: "https://m.media-amazon.com/images/I/71+L2Ki5FUL._AC_SL1500_.jpg" },
  { nome: "Chaleira elétrica", imagem: "https://m.media-amazon.com/images/I/71SxmuKfPAL._AC_SL1500_.jpg" },
  { nome: "Ferro de passar", imagem: "https://m.media-amazon.com/images/I/71btlmI5mZL._AC_SL1500_.jpg" },
  { nome: "Ventilador", imagem: "https://m.media-amazon.com/images/I/71sKmDqtmVL._AC_SL1500_.jpg" },
  { nome: "Jogo de lençóis (Queen)", imagem: "https://m.media-amazon.com/images/I/81DMG0XzPIL._AC_SL1500_.jpg" },
  { nome: "Jogo de toalhas", imagem: "https://m.media-amazon.com/images/I/71g+ZQPGsUL._AC_SL1500_.jpg" },
  { nome: "Vassoura, rodo e pá", imagem: "https://m.media-amazon.com/images/I/61Blh7TSPQL._AC_SL1500_.jpg" },
  { nome: "Cesto de roupa", imagem: "https://m.media-amazon.com/images/I/71nLf9gk3AL._AC_SL1500_.jpg" },
  { nome: "Kit ferramentas", imagem: "https://m.media-amazon.com/images/I/71uEtBbzZwL._AC_SL1500_.jpg" },
  { nome: "Kit Churrasco", imagem: "https://m.media-amazon.com/images/I/81TgckjNPeL._AC_SL1500_.jpg" },
  { nome: "Kit Lixeira Inox", imagem: "https://m.media-amazon.com/images/I/71frPBCZtPL._AC_SL1500_.jpg" },
  { nome: "PIX (opcional)", imagem: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png" }
];

const container = document.getElementById("presentesContainer");
const mensagem = document.getElementById("mensagem");
const nomeInput = document.getElementById("nome");

presentes.forEach((p, i) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}">
    <h3>${p.nome}</h3>
    <button onclick="escolherPresente(${i})">Escolher</button>
  `;
  container.appendChild(card);
});

function escolherPresente(i) {
  const nome = nomeInput.value.trim();
  if (!nome) {
    alert("Por favor, insira seu nome antes de escolher um presente!");
    return;
  }

  const presente = presentes[i];
  const card = document.getElementsByClassName("card")[i];
  card.classList.add("indisponivel");
  card.querySelector("button").innerText = "Indisponível";

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ nome: nome, presente: presente.nome }),
    headers: { "Content-Type": "application/json" }
  })
  .then(() => mostrarMensagem("Presente reservado! Obrigado!"))
  .catch(err => console.error("Erro ao enviar:", err));
}

function mostrarMensagem(txt) {
  mensagem.textContent = txt;
  mensagem.style.display = "block";
  setTimeout(() => (mensagem.style.display = "none"), 3000);
}
