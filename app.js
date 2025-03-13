// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value.trim();
    if (!amigo) {
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(amigo);
    inputAmigo.value = "";
    actualizarLista();
}
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("no hay amigos para sortear");
        return;
    }
    const amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    const lista = document.getElementById("resultado");
    lista.innerHTML = `El amigo elegido es: ${amigoElegido}`;
} 
