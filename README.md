# Projeto Car Shop

Projeto de Back End, no qual foi sobre `MongoDB` com `Node.js` e `POO`.

Nesse projeto foi desenvolvida uma `REST API`, através do `Node.js`, `Express`, `Mongoose` e `TypeScript`, utilizando arquitetura de software `MSC`, `POO` e `SOLID`, tendo como sistema de gerenciamento de banco de dados o `MongoDB`.

A API é um sistema de gerenciamento de veículos de uma concessionária, no qual é possível realizar operações de CRUD(create, read, update, delete).

Para verificar a funcionalidade da API, foram desenvolvidos testes unitários com as ferramentas `Mocha`, `Chai` e `Sinon`.


## Tecnologias

  - Node.js
  - Express
  - TypeScript
  - MongoDB
  - Mongoose
  - Zod
  - Mocha
  - Chai
  - Sinon
  - Docker

## Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone git@github.com:calopessoa/car-shop.git

$ cd car-shop
```

Para iniciá-lo, siga os passos abaixo:


### Rodando

  ```bash
  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm start
  ```

  Para executar os testes, utilize o terminal e insira o comando abaixo: 

  ```bash
  $ npm run test:dev
  ```

Atenção! O arquivo `.env.example` deverá ser renomeado para `.env` e a variável de ambiente contida nele deverá possuir uma `URI` válida.
