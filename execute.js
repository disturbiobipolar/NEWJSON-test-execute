console.log(reinosepaises[6].principaisReis[1]);
console.log(figurasHistoricas[7]);
let figurasPossiveis = [...figurasHistoricas];
let perguntaIndex = 0;

// Perguntas adicionais para deixar o jogo mais interessante
let perguntas = [
    { campo: "ocupacao", texto: "A pessoa é um(a) {ocupacao}?" },
    { campo: "periodo", texto: "A pessoa viveu na {periodo}?" },
    { campo: "principaisRealizacoes", texto: "A pessoa realizou algo relacionado a {realizacao}?" },
    { campo: "descricao", texto: "A pessoa é famosa por sua inteligência ou sabedoria?" }
];

// Função para embaralhar as perguntas
function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos
    }
}

// Função para gerar a próxima pergunta
function nextQuestion() {
    if (figurasPossiveis.length === 1) {
        // Se restar apenas uma figura, mostramos o resultado
        document.getElementById('question').textContent = `Você estava pensando em ${figurasPossiveis[0].nome}?`;
        document.getElementById('result').textContent = figurasPossiveis[0].descricao;
        return;
    }

    if (perguntaIndex >= perguntas.length) {
        // Se não houver mais perguntas para fazer, finalize o jogo
        document.getElementById('question').textContent = "Eu não consegui adivinhar. Você tem outra figura em mente?";
        document.getElementById('result').textContent = "";
        return;
    }

    const pergunta = perguntas[perguntaIndex];
    const atributo = pergunta.campo;

    if (atributo === 'principaisRealizacoes') {
        // Se for para perguntar sobre realizações, escolhe uma realização aleatória
        const realizacaoIndex = Math.floor(Math.random() * figurasPossiveis[0].principaisRealizacoes.length);
        const realizacao = figurasPossiveis[0].principaisRealizacoes[realizacaoIndex];
        document.getElementById('question').textContent = pergunta.texto.replace("{realizacao}", realizacao);
    } else {
        // Para as outras perguntas (ocupação, período, etc.), escolhemos o primeiro valor
        const valor = figurasPossiveis[0][atributo] || figurasPossiveis[0][atributo][0];  // Pega o primeiro valor caso seja uma lista
        document.getElementById('question').textContent = pergunta.texto.replace(`{${atributo}}`, valor);
    }
}

// Função para processar a resposta
function answer(resposta) {
    let filtro;

    if (resposta === "sim") {
        filtro = figurasPossiveis.filter(figura => {
            if (figura[perguntas[perguntaIndex].campo] instanceof Array) {
                return figura[perguntas[perguntaIndex].campo].includes(perguntas[perguntaIndex].texto);  // Para listas, verifica se contém o valor
            } else {
                return figura[perguntas[perguntaIndex].campo] === perguntas[perguntaIndex].texto;
            }
        });
    } else if (resposta === "nao") {
        filtro = figurasPossiveis.filter(figura => {
            if (figura[perguntas[perguntaIndex].campo] instanceof Array) {
                return !figura[perguntas[perguntaIndex].campo].includes(perguntas[perguntaIndex].texto);
            } else {
                return figura[perguntas[perguntaIndex].campo] !== perguntas[perguntaIndex].texto;
            }
        });
    }

    figurasPossiveis = filtro;
    perguntaIndex++;

    nextQuestion();
}

// Começar o jogo
shuffleQuestions(perguntas); // embaralha as pergunta para a ordem ser random
nextQuestion();