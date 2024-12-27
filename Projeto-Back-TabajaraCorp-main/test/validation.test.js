const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro email', () => {
    const result = Validation.create({
        nome: "Norberto",
        senha: "Ee.46829308"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro senha', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});