//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; 

function adicionarAmigo() {
    let input = document.getElementById("amigo"); 
    let nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) { 
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome); 

    atualizarLista(); 

    input.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((nome) => {
        let item = document.createElement("li"); 
        item.textContent = nome;
        lista.appendChild(item); 
    });
}
function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("A lista de amigos está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceSorteado]; 

    document.getElementById("resultado").innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong> 🎉</li>`; 
}
