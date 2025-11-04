// URL do Apps Script do Google Sheets:
const scriptURL = "COLE_AQUI_SUA_URL_DO_APPS_SCRIPT";

const presentes = [
  { nome: "Frigideira Antiaderente Em Mármore 28cm Autêntico Chef", imagem: "https://m.media-amazon.com/images/I/81NnyzCN5WL._AC_SL1500_.jpg" },
  { nome: "Panela de Pressão Elétrica Electrolux", imagem: "https://m.media-amazon.com/images/I/71hXZ2y4j0L._AC_SL1500_.jpg" },
  { nome: "Conjunto de Assadeiras Marinex Opaline 3 Peças", imagem: "https://m.media-amazon.com/images/I/71iXUeRrLHL._AC_SL1500_.jpg" },
  { nome: "Conjunto de facas", imagem: "https://m.media-amazon.com/images/I/61iRjL3p4DL._AC_SL1500_.jpg" },
  { nome: "Air Fryer", imagem: "https://m.media-amazon.com/images/I/71Nh7TnXkFL._AC_SL1500_.jpg" },
  { nome: "Jogo de Pratos", imagem: "https://m.media-amazon.com/images/I/71MI5O3m2IL._AC_SL1500_.jpg" }
  // 👉 Você pode adicionar todos os outros aqui seguindo o mesmo formato
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
