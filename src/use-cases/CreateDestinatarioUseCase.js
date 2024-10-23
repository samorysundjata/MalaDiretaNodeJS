class CreateDestinatarioUseCase {
  constructor(destinatarioRepository, cepService) {
    this.destinatarioRepository = destinatarioRepository;
    this.cepService = cepService;
  }

  async execute(data) {
    const { nome, email, cep, numero, complemento } = data;

    // Validar e buscar o endereço com o serviço ViaCEP
    const enderecoData = await this.cepService.buscarEndereco(cep);
    if (!enderecoData) {
      throw new Error("CEP inválido");
    }

    // Criar o objeto Endereco
    const endereco = new Endereco(
      cep,
      enderecoData.logradouro,
      numero,
      complemento,
      enderecoData.bairro,
      enderecoData.localidade,
      enderecoData.uf
    );

    // Criar o objeto Destinatario
    const destinatario = new Destinatario(null, nome, email, endereco);

    // Salvar no repositório
    return await this.destinatarioRepository.save(destinatario);
  }
}

module.exports = CreateDestinatarioUseCase;
