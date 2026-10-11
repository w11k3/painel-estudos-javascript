// Exercício1
// Inicio do programa
console.log("Exercício 1:");
console.log("Hello, World!");
console.log("");

// Exercício2
console.log("Exercício 2:");
console.log("Primeiro programa em JavaScript");
console.log("Aprendendo a programar em JavaScript");
console.log("JavaScript é uma linguagem de programação muito popular");
console.log(10 + 5);
console.log("");

// Exercício3
// Tema: Painel de Estudos
console.log("Exercício 3:");
const nomeAluno = "Bruno";
const curso = "JavaScript";
let idade = 25;
let quantidadeTarefas = 10;

console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Curso: ${curso}`);
console.log(`Idade: ${idade}`);
console.log(`Quantidade de tarefas: ${quantidadeTarefas}`);
quantidadeTarefas = 20;
console.log(`Quantidade de tarefas atualizada: ${quantidadeTarefas}`);
console.log("");

// Exercício4
console.log("Exercício 4:");
var texto = "Olá, mundo para antigos!";
console.log(texto);
console.log("");

// Exercício5
console.log("Exercício 5:");
const titulo = "Aprendendo JavaScript";
const tamanho = 4;
const ativo = true;
const observacao = null;

console.log(`String: ${titulo}`);
console.log(`Number: ${tamanho}`);
console.log(`Boolean: ${ativo}`);
console.log(`Null: ${observacao}`);
console.log("");

// Exercício6
console.log("Exercício 6:");
let soma = 10 + 5;
console.log(`Soma: ${soma}`);
let subtracao = 10 - 5;
console.log(`Subtração: ${subtracao}`);
let multiplicacao = 10 * 5;
console.log(`Multiplicação: ${multiplicacao}`);
let divisao = 10 / 5;
console.log(`Divisão: ${divisao}`);

const nota1 = 8;
const nota2 = 7;
const media = (nota1 + nota2) / 2;
console.log(`Média: ${media}`);
const aprovado = media >= 6;
console.log(`Aprovado: ${aprovado}`);
console.log(""); 

// Exercício7
console.log("Exercício 7:");
const mensagem = `Olá, ${nomeAluno}! Bem-vindo ao curso de ${curso}. Sua idade é ${idade} anos e você tem ${quantidadeTarefas} tarefas pendentes.`;
console.log(mensagem);
console.log("");

// Exercício8
console.log("Exercício 8:");
if (aprovado) {
    console.log("Parabéns! Você foi aprovado.");
} else {
    console.log("Infelizmente, você não foi aprovado.");
}
console.log("");

// Exercício10
console.log("Exercício 10:");
const produto = "Caneta";
const preco = 5.50;
const quantidade = 10;
const total = preco * quantidade;

if (total > 50) {
    console.log(`O total da compra da ${produto} é R$${total}. Você ganhou um frete grátis!`);
}
else {
    console.log(`O total da compra da ${produto} é menor que R$50. O total da compra é R$${total}. O frete será cobrado.`);
}