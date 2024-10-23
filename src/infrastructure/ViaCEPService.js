const axios = require("axios");

class ViaCEPService {
  async buscarEndereco(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) return null;
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

module.exports = ViaCEPService;
