# Mala Direta NodeJS

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![SQLite](https://img.shields.io/badge/SQLite-3.x-blue)
![Axios](https://img.shields.io/badge/Axios-0.21.1-yellow)
![ViaCEP](https://img.shields.io/badge/ViaCEP-API-orange)

## Descrição

Esta é uma API REST para mala direta desenvolvida em Node.js, utilizando SQLite como banco de dados, ViaCEP para consulta de endereços e Axios para requisições HTTP.

## Funcionalidades

- **Cadastro de contatos**: Adicione novos contatos à sua lista de mala direta.
- **Consulta de endereços**: Utilize o ViaCEP para buscar endereços pelo CEP.
- **Envio de mala direta**: Envie mensagens para os contatos cadastrados.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **SQLite**: Banco de dados leve e eficiente.
- **ViaCEP**: API para consulta de endereços.
- **Axios**: Cliente HTTP para realizar requisições.

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/MalaDiretaNodeJS.git
cd MalaDiretaNodeJS
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

- Crie o arquivo `database.sqlite` na raiz do projeto.
- Execute as migrações para criar as tabelas necessárias:
  ```bash
  npx sequelize-cli db:migrate
  ```

4. **Inicie o servidor:**

```bash
npm start
```

## Uso

### Cadastro de Contatos

- **Endpoint:** `POST /contatos`
- **Descrição:** Adiciona um novo contato.
- **Exemplo de corpo da requisição:**
  ```json
  {
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "cep": "01001-000"
  }
  ```

### Consulta de Endereços

- **Endpoint:** `GET /enderecos/:cep`
- **Descrição:** Consulta o endereço pelo CEP.
- **Exemplo de resposta:**
  ```json
  {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP"
  }
  ```

### Envio de Mala Direta

- **Endpoint:** `POST /mala-direta`
- **Descrição:** Envia uma mensagem para todos os contatos cadastrados.
- **Exemplo de corpo da requisição:**
  ```json
  {
    "mensagem": "Olá, esta é uma mensagem de teste."
  }
  ```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
