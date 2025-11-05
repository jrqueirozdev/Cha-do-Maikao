// ==== CONFIGURAÇÕES ====
const GITHUB_USER = "jrqueirozdev";
const GITHUB_REPO = "Cha-do-Maikao";
const GITHUB_FILE = "presentes.json";
const GITHUB_TOKEN = "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"; // seu token
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

// ==== GERAR A LISTA NA TELA ====
async function gerarLista() {
  const lista = document.getElementById("lista-presentes");
  lista.innerHTML = "<p>Carregando presentes...</p>";

  try {
    const { conteudo } = await carregarDados();
    lista.innerHTML = "";

    conteudo.presentes.forEach((item) => {
      const reservado = conteudo.reservas?.find(r => r.presente === item.nome);
      const div = document.createElement("div");
      div.className = "presente";

      if (reservado && !item.ilimitado) {
        div.classList.add("indisponivel");
      }

      div.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <h3>${item.nome}</h3>
        <button ${reservado && !item.ilimitado ? "disabled" : ""}>
          ${item.ilimitado ? "Contribuir via PIX" : reservado ? "Indisponível" : "Escolher"}
        </button>
      `;

      const botao = div.querySelector("button");
      botao.addEventListener("click", async () => {
        const nome = document.getElementById("nomeConvidado").value.trim();
        if (!nome) return alert("Por favor, digite seu nome.");

        if (reservado && !item.ilimitado) {
          return alert("Esse presente já foi escolhido!");
        }

        const { conteudo, sha } = await carregarDados();
        conteudo.reservas = conteudo.reservas || [];

        conteudo.reservas.push({
          nome: nome,
          presente: item.nome,
          data: new Date().toLocaleString("pt-BR")
        });

        await salvarDados(conteudo, sha);
        alert("🎁 Presente reservado com sucesso!");
        gerarLista();
      });

      lista.appendChild(div);
    });
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
    lista.innerHTML = "<p>Erro ao carregar a lista. Recarregue a página.</p>";
  }
}

// ==== INICIAR ====
document.addEventListener("DOMContentLoaded", gerarLista);
