import Validador from 'validator';

class FormValidator {

    constructor(validacao) {
        this.validacao = validacao;
    }

    validar(state) {
        const campoValor = state[this.validacao.campoValor.toString()];
    }

}
export default FormValidator