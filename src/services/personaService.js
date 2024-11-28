class PersonaService {
    constructor({ PersonaModel }) {
      this.PersonaModel = PersonaModel;
    }
  
    async crearPersona(data) {
      return await this.PersonaModel.create(data);
    }
  
    async obtenerPersonas() {
      return await this.PersonaModel.find();
    }

    async obtenerPersonaPorId(id) {
      return this.PersonaModel.findById(id);
    }
  
    async eliminarPersona(id) {
      return this.PersonaModel.findByIdAndDelete(id);
    }
  }
  
  module.exports = PersonaService;
  