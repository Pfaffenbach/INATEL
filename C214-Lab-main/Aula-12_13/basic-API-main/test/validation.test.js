const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Iago",
        email: "iago.luiz@ges.inatel.br",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "iago.luiz@ges.inatel.br",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
