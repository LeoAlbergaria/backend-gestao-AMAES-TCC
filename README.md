<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Sistema de Gestão Administrativo-Financeiro da AMAES

Este repositório contém o código-fonte do backend do sistema de gestão administrativo-financeiro desenvolvido para a AMAES (Associação dos Amigos dos Autistas do Espírito Santo). Este projeto está sendo realizado como parte do Trabalho de Conclusão de Curso (TCC) do aluno Leonardo Franco Emerick Albergaria, do curso de Ciência de Computação da Universidade Federal do Espírito Santo.

## Descrição do Projeto

O objetivo deste projeto é desenvolver um sistema robusto para auxiliar a AMAES no gerenciamento de suas operações administrativas e financeiras, incluindo:

- **Cadastro e gerenciamento de usuários e colaboradores**: Controle completo de diferentes tipos de usuários e colaboradores da instituição.
- **Controle de stakeholders e recursos financeiros**: Monitoramento e gerenciamento de todas as partes interessadas e dos recursos financeiros associados.
- **Processamento de ordens de pagamento**: Processamento eficiente de ordens de pagamento com validação por administradores.
- **Cadastro e monitoramento de documentos**: Armazenamento de documentos físicos digitalizados e gerenciamento de expirações de alvarás e permissões.
- **Importação e exportação de dados**: Facilitação da manipulação de dados através de importação e exportação em formatos como Excel (.xlsx).
- **Integração com APIs**: Utilização de APIs para processamento e armazenamento de dados, permitindo operações como importação e exportação de informações.

## Tecnologias Utilizadas

- **NestJS**: Framework para desenvolvimento do backend em Node.js e TypeScript.
- **TypeORM**: Ferramenta de mapeamento objeto-relacional para interagir com o banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento persistente.
- **Docker**: Utilizado para containerização do banco de dados e replicação do ambiente de desenvolvimento.
- **Swagger**: Ferramenta para documentação automática e interativa da API.
- **Postman**: Utilizado para testar e validar os endpoints da API.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clonar o repositório**:

    ```bash
    git clone https://github.com/LeoAlbergaria/backend-gestao-AMAES-TCC.git
    ```

2. **Instalar as dependências**:

    ```bash
    cd backend-gestao-AMAES-TCC
    npm install
    ```

3. **Configurar o banco de dados**:

    - Certifique-se de ter o Docker instalado.
    - Suba o contêiner do PostgreSQL.

4. **Configurar variáveis de ambiente**:

    - Crie um arquivo `.env.development.local`.
    - Adicione as variáveis de ambiente conforme necessário.

5. **Executar a aplicação**:

    ```bash
    npm run start
    ```

6. **Acessar a documentação da API**:

    - Acesse [http://localhost:3000/api](http://localhost:3000/api) para visualizar a documentação gerada pelo Swagger.

## Contato

Para mais informações sobre o projeto:

- Aluno: Leonardo Franco Emerick Albergaria (leonardo.albergaria@edu.ufes.br)