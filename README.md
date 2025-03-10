# Projeto de E-commerce

Este projeto é uma aplicação de e-commerce que consiste em um back-end desenvolvido com Node.js e Express, e um front-end desenvolvido com React. A aplicação permite visualizar uma lista de produtos, ordená-los por preço e visualizar detalhes de cada produto em um modal.

## Índice

- Tecnologias Utilizadas
- Funcionalidades
- Pré-requisitos
- Instalação
  - Configuração do Back-end
  - Configuração do Front-end
- Estrutura do Projeto

## Tecnologias Utilizadas

- Node.js
- Express
- React
- Tailwind CSS

## Funcionalidades

- Visualização de uma lista de produtos.
- Ordenação de produtos por preço.
- Visualização de detalhes do produto em um modal.

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

## Instalação

### Configuração do Back-end

1. **Clone o repositório:**

Clone o repositório:

  git clone https://github.com/victorl-barbosa/virtual-loja.git 
  
  cd virtual-loja/backend

2. Instale as dependências:
   
  npm install

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do diretório backend e adicione a seguinte linha:

  PORT=5000

4. Inicie o servidor:
   
  npm run dev

O servidor estará rodando em http://localhost:5000.

### Configuração do Front-end

1. Navegue até o diretório do front-end:
 
  cd ../frontend

2. Instale as dependências:

  npm install

3. Inicie a aplicação do front-end:
   
  npm run dev

## Estrutura do Projeto

### Back-end

Controllers:

ProductController.js: Controlador responsável por gerenciar as operações relacionadas aos produtos.

Data:

data.json: Arquivo JSON contendo os dados dos produtos.

Routes:

productRoutes.js: Define as rotas para as operações relacionadas aos produtos.

env: Arquivo de configuração das variáveis de ambiente.

server.js: Arquivo principal que configura e inicia o servidor Express.

### Front-end

Components:

Header.jsx: Componente de cabeçalho da aplicação.

Products.jsx: Componente responsável por exibir os produtos disponíveis.

Assets:

nike.png: Imagem do logo da Nike utilizada no cabeçalho.
