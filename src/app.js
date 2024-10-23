const express = require("express");
const knex = require("./infrastructure/knex");
const ViaCEPService = require("./infrastructure/ViaCEPService");
const DestinatarioRepository = require("./repositories/DestinatarioRepository");
const CreateDestinatarioUseCase = require("./use-cases/CreateDestinatarioUseCase");
const DestinatarioController = require("./controllers/DestinatarioController");

const app = express();
app.use(express.json());

const viaCEPService = new ViaCEPService();
const destinatarioRepository = new DestinatarioRepository(knex);
const createDestinatarioUseCase = new CreateDestinatarioUseCase(
  destinatarioRepository,
  viaCEPService
);
const destinatarioController = new DestinatarioController(
  createDestinatarioUseCase
);

app.post("/destinatarios", (req, res) =>
  destinatarioController.criarDestinatario(req, res)
);

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});
