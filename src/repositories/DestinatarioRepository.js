class DestinatarioRepository {
  constructor(db) {
    this.db = db;
  }

  async save(destinatario) {
    const { nome, email, endereco } = destinatario;
    const [id] = await this.db("destinatarios").insert({
      nome,
      email,
      cep: endereco.cep,
      logradouro: endereco.logradouro,
      numero: endereco.numero,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      estado: endereco.estado,
    });
    destinatario.id = id;
    return destinatario;
  }

  async findById(id) {
    const destinatario = await this.db("destinatarios").where({ id }).first();
    return destinatario;
  }
}

module.exports = DestinatarioRepository;
