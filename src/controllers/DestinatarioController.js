class DestinatarioController {
  constructor(createDestinatarioUseCase) {
    this.createDestinatarioUseCase = createDestinatarioUseCase;
  }

  async criarDestinatario(req, res) {
    try {
      const destinatario = await this.createDestinatarioUseCase.execute(
        req.body
      );
      return res.status(201).json(destinatario);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = DestinatarioController;
