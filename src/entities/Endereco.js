class Endereco {
  constructor(cep, logradouro, numero, complemento, bairro, cidade, estado) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  validarCEP() {
    // Lógica de validação de CEP aqui (ou delegar para serviço externo).
  }
}
module.exports = Endereco;
