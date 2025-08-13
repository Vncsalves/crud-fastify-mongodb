# CRUD com Fastify e MongoDB

![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

### 📖 Sobre o Projeto

Este é um projeto de exemplo para demonstrar a criação de um **CRUD (Create, Read, Update, Delete)** utilizando o framework web **Fastify** com o banco de dados **MongoDB**. O objetivo é criar uma API REST simples e eficiente para gerenciar uma coleção de dados, seguindo boas práticas de organização de código e modularidade.

A arquitetura do projeto foi desenvolvida para ser escalável e de fácil manutenção, separando as responsabilidades de configuração do aplicativo, inicialização do servidor e definição das rotas.

### ⚙️ Tecnologias Utilizadas

* **Fastify**: Framework web de alta performance e baixo overhead para Node.js.
* **MongoDB**: Banco de dados NoSQL orientado a documentos.
* **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática e melhora a manutenibilidade do código.
* **Node.js**: Ambiente de execução para o JavaScript no servidor.

### 🚀 Começando

Siga as instruções abaixo para configurar e rodar o projeto na sua máquina local.

#### Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas:

* **Node.js** (`versão 18+` recomendada)
* **npm** (gerenciador de pacotes do Node.js)
* **MongoDB** (instância local ou um cluster remoto, como o MongoDB Atlas)
* **Git**

#### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Vncsalves/crud-fastify-mongodb.git
    cd crud-fastify-mongodb
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o arquivo `.env`:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a string de conexão do seu MongoDB, além de outras variáveis de ambiente necessárias.

    ```bash
    PORT=3000
    ```

#### Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

Caso não tenha um script start configurado, você pode rodar o arquivo principal diretamente com node src/server.js.

### 🗺️ Estrutura do Projeto

A arquitetura foi pensada para ser escalável e de fácil manutenção, seguindo o padrão de separação de responsabilidades.

```bash
├── src
│   ├── modules
│   │   ├── <entidade>
│   │   │   ├── <entidade>.model.ts        # Definição do modelo de dados
│   │   │   ├── <entidade>.repository.ts   # Lógica de acesso ao banco de dados
│   │   │   └── <entidade>.routes.ts       # Rotas da entidade com Fastify
│   ├── app.ts                             # Configuração da aplicação e registro de rotas
│   └── server.ts                          # Ponto de entrada que inicia o servidor
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### 🛣️ Endpoints da API
A API expõe os seguintes endpoints de CRUD para a entidade <nome-da-entidade>:

* **POST /<nome-da-entidade>**: Cria uma nova entidade.
* **GET /<nome-da-entidade>**: Retorna todas as entidades.
* **GET /<nome-da-entidade>/:id**: Retorna uma entidade específica pelo ID.
* **PUT /<nome-da-entidade>/:id**: Atualiza uma entidade existente pelo ID.
* **DELETE /<nome-da-entidade>/:id**: Remove uma entidade pelo ID.







