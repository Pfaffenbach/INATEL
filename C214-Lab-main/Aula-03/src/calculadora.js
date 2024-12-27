const validate = require('validate.js');
const CalculadoraValidate = require('./validate');

const Calculadora = {
    soma(numero1, numero2) {
        const validateNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidade);
        const validateNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidade);
        if (validateNumero1 !== undefined && validateNumero2 !== undefined) {
            return 'Error';
        }
        let sresultado = numero1 + numero2;
        return sresultado;
    },

    subtracao(numero1, numero2) {
        const validateNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidade);
        const validateNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidade);
        if (validateNumero1 !== undefined && validateNumero2 !== undefined) {
            return 'Error';
        }
        let subresultado = numero1 - numero2;
        return subresultado;
    },

    multiplicacao(numero1, numero2) {
        const validateNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidade);
        const validateNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidade);
        if (validateNumero1 !== undefined && validateNumero2 !== undefined) {
            return 'Error';
        }
        let mresultado = numero1 * numero2;
        return mresultado;
    },

    divisao(numero1, numero2) {
        const validateNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidade);
        const validateNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidade);
        if (validateNumero1 !== undefined && validateNumero2 !== undefined) {
            return 'Error';
        }
        let divresultado = numero1 / numero2;
        return divresultado;
    },

    restoDiv(numero1, numero2) {
        const validateNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidade);
        const validateNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidade);
        if (validateNumero1 !== undefined && validateNumero2 !== undefined) {
            return 'Error';
        }
        let rdresultado = numero1 % numero2;
        return rdresultado;
    }
};

module.exports = Calculadora;