// ==== CONFIGURAÇÕES ====
const GITHUB_USER = "jrqueirozdev";
const GITHUB_REPO = "Cha-do-Maikao";
const GITHUB_FILE = "dados.json";
const GITHUB_TOKEN = "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"; // <- Cole seu token aqui
const API_URL = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

// ==== FUNÇÃO PARA BUSCAR OS DADOS ====
async function carregarDados() {
  const res = await fetch(API_URL, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
  });
  const data = await res.json();
  const conteudo = JSON.parse(atob(data.content));
  return { conteudo, sha: data.sha };
}

// ==== FUNÇÃO PARA SALVAR OS DADOS ====
async function salvarDados(novosDados, sha) {
  const conteudoAtualizado = btoa(JSON.stringify(novosDados, null, 2));
  await fetch(API_URL, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Atualizando lista de presentes",
      content: conteudoAtualizado,
      sha: sha,
    }),
  });
}

// ==== LISTA DE PRESENTES ====
const presentes = [
  "Airfryer.jpg", "Batedeira.jpg", "Espremedordealho.jpg", "Frigideira.jpg",
  "KitLavabo.jpg", "Liquidificador.jpg", "Lixeira de pia.jpg", "Microondas.jpg",
  "Mixer.jpg", "PIX.jpg", "Peneiras.jpg", "Ralador.jpg", "Saladeiras.jpg",
  "Torradeira.jpg", "Travessas.jpg", "Ventilador.jpg", "abridordelatas.jpg",
  "amassadordebatata.jpg", "aspiradordepo.jpg", "assadeira.jpg",
  "assadeiras.jpg", "balde.jpg", "bandejaespelhada.jpg", "cafeteira.jpg",
  "caipirinha.jpg", "cesto.jpg", "chaleira.jpg", "churrasco.jpg", "conchas.jpg",
  "copos.jpg", "ededron.jpg", "escorredor.jpg", "escorredordemacarrao.jpg",
  "espremedordefruta.jpg", "extensão.jpg", "facas.jpg", "ferramentas.jpg",
  "ferro.jpg", "garrafa.jpg", "jarra.jpg", "kitlixeira.jpg", "lencois.jpg",
  "mop.jpg", "paneladearros.jpg", "paneladepressao.jpg", "pilao.jpg",
  "portaguardanapos.jpg", "poteshermeticos.jpg", "pratos.jpg", "processador.jpg",
  "protetor.jpg", "recipiente.jpg", "refratarios.jpg", "sacarolha.jpg",
  "sanduicheira.jpg", "sousplat.jpg", "tabua.jpg", "tabuasdecorte.jpg",
  "tacas.jpg", "talheres.jpg", "toalhas.jpg", "vaporizador.jpg", "varal.jpg",
  "vassoura.jpg", "xicaras.jpg"
];

// ==== GERAR A LISTA NA TELA ====
async function gerarLista() {
  const lista = document.getElementById("lista-presentes");
  const { conteudo } = await carregarDados();

  lista.innerHTML = "";

  presentes.forEach(item => {
    const reservado = conteudo.reservas?.find(r => r.presente === item);
    const div = document.createElement("div");
    div.className = "presente";
    if (reservado && item !== "PIX.jpg") div.classList.add("indisponivel");

    div.innerHTML = `
      <img src="imagens/${item}" alt="${item}">
      <h3>${item.replace(".jpg", "")}</h3>
      <button ${reservado && item !== "PIX.jpg" ? "disabled" : ""}>
        ${item === "PIX.jpg" ? "Contribuir via PIX" : reservado ? "Indisponível" : "Escolher"}
      </button>
    `;

    const botao = div.querySelector("button");
    botao.addEventListener("click", async () => {
      const nome = document.getElementById("nomeConvidado").value.trim();
      if (!nome) return alert("Por favor, digite seu nome.");

      if (item !== "PIX.jpg" && reservado) {
        return alert("Esse presente já foi escolhido!");
      }

      const { conteudo, sha } = await carregarDados();
      conteudo.reservas = conteudo.reservas || [];

      conteudo.reservas.push({
        nome: nome,
        presente: item,
        data: new Date().toLocaleString("pt-BR")
      });

      await salvarDados(conteudo, sha);

      alert("🎁 Presente reservado! Obrigado!");
      gerarLista();
    });

    lista.appendChild(div);
  });
}

// ==== CHAMAR AO INICIAR ====
document.addEventListener("DOMContentLoaded", gerarLista);
