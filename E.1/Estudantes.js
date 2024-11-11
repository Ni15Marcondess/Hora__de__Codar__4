const estudantes = [];

function cadastrarEstudante() {
    const nome = document.getElementById("nome").value.trim();

    if (nome.toUpperCase() === "PARE") {
        exibirEstudantes();
    } else if (nome) {
        estudantes.push(nome);
        document.getElementById("nome").value = "";
    }
}

function exibirEstudantes() {
    document.getElementById("lista-estudantes").innerHTML = estudantes.map(estudante => `<li>${estudante}</li>`).join('');
    document.getElementById("total").textContent = `Total de estudantes cadastrados: ${estudantes.length}`;
}
