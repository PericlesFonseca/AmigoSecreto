//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigosDigitados = [];      // Cria uma lista vazia para colocar os amigos digitados

function adicionarAmigo() {
    let amigoDigitado = document.getElementById('amigo').value;         // Captura o valor do campo no HTML usando a função querySelector 

    if(amigoDigitado) {         // Verifica se o campo não está vazio
        listaAmigosDigitados.push(amigoDigitado);       // Adiciona o amigo digitado à lista
        atualizarLista();       // Chama a função para atualizar a exibição da lista
        document.getElementById('amigo').value = '';         // Limpa o campo de texto no HTML      
        
    }  else {  // se para caso não seja digitado nehum dado no campo de entrada
        alert('Por favor, insira um nome'); // caso nada seja digitado, um alerta é exibido requisitando
    }
}


function atualizarLista(){  // função para atualizar lista após digitar um nome no campo
    let lista = document.getElementById('listaAmigos'); // captura a lista de amigos no html
    lista.innerHTML = '';                   // é feita a limpeza para garantir que o local fique limpo para entrada do novo dado

    for(let i = 0; i < listaAmigosDigitados.length; i++){   //  laço de repetição para verificar e incrementar cada amigo digitado
        let li = document.createElement('li');     // seleciona a tag li de do array 
        li.textContent = listaAmigosDigitados[i];  //  insere o amigo digitado no array
        lista.appendChild(li);  // atualiza com cada nome digitado no html
    }
}

function sortearAmigo(){       // função para o botão de sortear um amigo
    if (listaAmigosDigitados.length === 0){  // verificar se a lista está vazia
        document.getElementById('resultado').innerHTML = 'Não existe amigos na lista';   // caso seja verdade, retorna um alert informando que não foi digitado nenhum amigo
        return;
    } else {    // caso contrario
        let amigoAleatorio = Math.floor (Math.random() * listaAmigosDigitados.length);  // usa a função para escolher aleatoriamente um amigo do array

        let amigoSorteado = listaAmigosDigitados[amigoAleatorio];  // variavel para colocar o amigo sorteado

        document.getElementById('resultado').innerHTML = 'O amigo sorteado é ' + amigoSorteado;  // exibição do amigo sorteado na pagina html
    }
}

