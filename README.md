# Painel de Estudos JavaScript

Projeto acadêmico desenvolvido para praticar os fundamentos de JavaScript ES6 e a criação de interfaces responsivas utilizando Bootstrap 5.3.8.

## Sobre o projeto

O Painel de Estudos JavaScript tem como objetivo organizar e apresentar os conteúdos estudados durante a introdução à programação com JavaScript.

A interface apresenta os principais assuntos dos exercícios, como variáveis, operações matemáticas, tipos de dados e estruturas condicionais, organizados em cards para facilitar a visualização.

## Tecnologias utilizadas

- **HTML5:** estruturação da página.
- **Bootstrap 5.3.8:** estilização e construção do layout responsivo por meio de CDN.
- **JavaScript:** prática dos fundamentos da linguagem e execução de instruções no Console do navegador.

## Estrutura do projeto

```text
Atividade1/
├── index.html
├── script.js
└── README.md
```

## Interface

A interface foi construída utilizando componentes e classes do Bootstrap, sem a necessidade de um arquivo CSS próprio.

Os principais componentes utilizados foram:

- **Navbar:** apresenta o nome do projeto e os links de navegação.
- **Seção de apresentação:** exibe o título e a descrição do painel.
- **Cards:** organizam os conteúdos estudados em diferentes categorias.
- **Badges:** identificam os exercícios e seus respectivos status.
- **Buttons:** apresentam elementos de ação visual.
- **Alert:** exibe uma mensagem de incentivo aos estudos.
- **Footer:** apresenta a identificação do projeto.

O layout utiliza `container`, `row` e `col` para organizar os elementos de forma responsiva, adaptando-se a diferentes tamanhos de tela.

## Exercícios de JavaScript

### Questão 1 — Conexão com o JavaScript

O arquivo `script.js` foi conectado ao `index.html` utilizando a tag `script`. As instruções são executadas no navegador, e os resultados podem ser visualizados no Console.

### Questão 2 — Instruções e comentários

Foram utilizados comentários para identificar os exercícios e instruções `console.log()` para exibir mensagens, informações e resultados de operações matemáticas.

### Questão 3 — Variáveis com `const` e `let`

As variáveis foram utilizadas para armazenar informações relacionadas ao painel de estudos, como nome do aluno, curso, idade e quantidade de tarefas.

**Resposta:**

A variável nomeAluno foi criada usando const pois o nome dele não será alterado.  
A vartiável curso foi criada usando const pois o nome daquele curso não será alterado.  
A variável idade foi criada utilizando let, pois a idade dele pode ser alterada.  
A variável quantidadeTarefas foi criada utilizando let, pois pode ser alterada.

### Questão 4 — `var` como contexto histórico

Foi utilizada uma variável declarada com `var` para demonstrar o conhecimento dessa forma de declaração.

**Resposta:**

o const e let ja tem suas funções programadas e diferentes uma da outra enquanto o var não tem uma regra de uso podendo redefinir o valor e não obedecendo a regra do escopo

### Questão 5 — Tipos de dados

Foram utilizados os seguintes tipos de dados:

- `string`: armazenamento de textos.
- `number`: armazenamento de valores numéricos.
- `boolean`: representação de valores verdadeiros ou falsos.
- `null`: representação intencional de ausência de valor.

Os valores são exibidos no Console utilizando `console.log()`.

### Questão 6 — Operadores

Foram realizadas operações matemáticas de soma, subtração, multiplicação e divisão. Também foi utilizado um operador de comparação para verificar se a média calculada atende ao critério de aprovação.

### Questão 7 — Strings e template literals

Foram utilizadas template literals para montar uma mensagem dinâmica com informações armazenadas em variáveis, como nome do aluno, curso, idade e quantidade de tarefas.

### Questão 8 — Decisão com `if` e `else`

Foi criada uma estrutura condicional para verificar se o aluno foi aprovado com base na média calculada.

O programa utiliza `if` e `else` para apresentar mensagens diferentes conforme o resultado da condição.

### Questão 9 — Criação da interface com Bootstrap

Foi criada uma interface para o Painel de Estudos JavaScript utilizando Bootstrap via CDN. A página contém uma navbar, uma seção de apresentação, três cards, badges, botões, um alert e um footer.

A estilização utiliza classes do Bootstrap, sem a criação de um arquivo `style.css`.

### Questão 10 — Desafio integrador

Os exercícios desenvolvidos utilizam variáveis, operações matemáticas, template literals e estruturas condicionais para trabalhar conceitos relacionados ao painel de estudos.

## Como executar o projeto

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador.
3. Abra as ferramentas de desenvolvedor do navegador.
4. Acesse a aba **Console** para visualizar as mensagens e os resultados dos exercícios.

O Bootstrap é carregado por CDN, portanto, é necessário ter conexão com a internet para carregar seus arquivos.

## Objetivo acadêmico

Este projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de praticar os fundamentos de JavaScript ES6 e a construção de interfaces utilizando Bootstrap, consolidando os conhecimentos adquiridos durante as aulas.
