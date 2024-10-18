const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais materiais podem ser recicládos?",
        alternativas: [
            {
                texto: " Plástico, papelão, vidro e alumínio",
                afirmacao: " Parabéns você acertou esses são os lixos reciclávei",
            },
            {
                texto: " Lampada, espelho, ampola de remedio e oculos",
                afirmacao: " Que pena, você errou esses não são os lixos recicláveis",
            }
        ]
    },
    {
        enunciado: " Quais são os diferentes tipos de pláticos que podem ser reciclados?",
        alternativas: [
            {
                texto: "Polipropileno (cobre), polietileno (garrafas de água)",
                afirmacao: "Esses são os plástico corretos para fazer a reciclágem ",
            },
            {
                texto: "Plástico PVC e ácido polilatico",
                afirmacao: "Esses não são plásticos adequados para a areciclágem",
            }
        ]
    },
    {
        enunciado: "O que é coleta seletiva?",
        alternativas: [
            {
                texto: "É a separação do lixo em devidas cores, separando o organico de plásticos e recicláveis",
                afirmacao: "Essa é a forma correta de separação",
            },
            {
                texto: "São lixos que podem ser misturados",
                afirmacao: "São formas erradas de coleta seletiva",
            }
        ]
    },
    {
        enunciado: "O que são resíduos líquidos?",
        alternativas: [
            {
                texto: "São materiais não aproveitados que se encontram no estado líquido",
                afirmacao: "Parabéns, você acertouessa é a afirmativa correta",
            },
            {
                texto: "São materiais recicláveis que podem ser reutilizados",
                afirmacao: "Que pena, essa não é a resposta corta",
            }
        ]
    },
    {
        enunciado: "Onde é o lugar correto para descartar os lixos?",
        alternativas: [
            {
                texto: "Em çixeiras proximas para que seja dirigida aos lixôes",
                afirmacao: "Esa é a reposta certa, parabéns",
            },
            {
                texto: "Nas ruas ou em qualquer lugar onde estiver",
                afirmacao: "Infelizmente não é a forma correta",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

