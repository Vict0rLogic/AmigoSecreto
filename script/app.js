let amigos = []; // Array que armazenará os nomes

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o campo de entrada
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") { // Se o campo estiver vazio, exibe alerta
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) { // Evita nomes repetidos
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome); // Adiciona ao array

    atualizarLista(); // Atualiza a exibição da lista

    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura a lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let item = document.createElement("li"); // Cria um item de lista <li>
        item.textContent = nome;
        lista.appendChild(item); // Adiciona o item à lista
    });
}
