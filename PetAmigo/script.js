// ================= HEADER (esconder/mostrar ao rolar) =================

const cabecalho = document.querySelector(".cabecalho");

let ultimoScroll = 0;

window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;

    if (scrollAtual <= 0) {
        cabecalho.classList.remove("escondido");
        return;
    }

    if (scrollAtual > ultimoScroll) {
        cabecalho.classList.add("escondido");
    } else {
        cabecalho.classList.remove("escondido");
    }

    ultimoScroll = scrollAtual;
});


// ================= FORMULÁRIO DE CONTATO =================

const form = document.getElementById("formContato");
const status = document.getElementById("mensagemStatus");

const emailValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        status.textContent = "Preencha todos os campos.";
        status.style.color = "red";
        return;
    }

    if (!emailValido(email)) {
        status.textContent = "Digite um e-mail válido.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Mensagem enviada com sucesso!";
    status.style.color = "green";

    form.reset();
});


// ================= MODAL DE AGENDAMENTO =================

const modal = document.getElementById("modalAgendar");
const overlay = document.getElementById("overlay");
const btnAgendar = document.getElementById("header_CTA_agendar");
const fechar = document.getElementById("fecharModal");
const btnSolicitar = document.getElementById("btnSolicitarAgendamento");
const agendaStatus = document.getElementById("agendaStatus");

function abrirModal() {
    modal.style.display = "flex";
    overlay.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    agendaStatus.textContent = "";
}

btnAgendar.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
});

fechar.addEventListener("click", fecharModal);
overlay.addEventListener("click", fecharModal);

btnSolicitar.addEventListener("click", () => {
    const nome = document.getElementById("agendaNome").value.trim();
    const pet = document.getElementById("agendaPet").value.trim();
    const telefone = document.getElementById("agendaTelefone").value.trim();
    const servico = document.getElementById("agendaServico").value;
    const data = document.getElementById("agendaData").value;

    if (!nome || !pet || !telefone || !servico || !data) {
        agendaStatus.textContent = "Preencha todos os campos obrigatórios.";
        agendaStatus.style.color = "red";
        return;
    }

    agendaStatus.textContent = "Agendamento solicitado com sucesso!";
    agendaStatus.style.color = "green";

    setTimeout(() => {
        document.getElementById("agendaNome").value = "";
        document.getElementById("agendaPet").value = "";
        document.getElementById("agendaTelefone").value = "";
        document.getElementById("agendaServico").value = "";
        document.getElementById("agendaData").value = "";
        document.getElementById("agendaObs").value = "";
        fecharModal();
    }, 1200);
});
