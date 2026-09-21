const formLogin = document.getElementById("formLogin");
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const fecharModal = document.getElementById("fecharModal");

function abrirModal(titulo, texto, redirecionar = false) {
    tituloModal.textContent = titulo;
    textoModal.textContent = texto;
    modal.classList.add("aberto");

    fecharModal.onclick = function () {
        modal.classList.remove("aberto");

        if (redirecionar) {
            window.location.href = "main.html";
        }
    };
}

if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (!email || !senha) {
            abrirModal("Erro", "Preencha o usuário e a senha!");
            return;
        }

        abrirModal("Sucesso", "Login realizado com sucesso!", true);
    });
}