function verificarPlaneta() {
    const planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
    const planetaDigitado = document.getElementById("planeta").value.trim();

    if (planetas.includes(planetaDigitado)) {
        document.getElementById("resultado").textContent = `${planetaDigitado} está na lista de planetas!`;
    } else {
        document.getElementById("resultado").textContent = `${planetaDigitado} não está na lista de planetas.`;
    }
}
