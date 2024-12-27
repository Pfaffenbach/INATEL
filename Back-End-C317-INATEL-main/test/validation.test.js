const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido - completo', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308",
        servico: "Pedreiro",
        celular: "(35)99946-7089",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - sem serviço', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308",
        celular: "(35)99946-7089",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308",
        servico: "Pedreiro",
        celular: "(35)99946-7089",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido - sem o parâmetro email', () => {
    const result = Validation.create({
        nome: "Norberto",
        senha: "Ee.46829308",
        servico: "Pedreiro",
        celular: "(35)99946-7089",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido - sem o parâmetro senha', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        servico: "Pedreiro",
        celular: "(35)99946-7089",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido - sem o parâmetro celular', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308",
        servico: "Pedreiro",
        cidade: "Santa Rita do Sapucaí"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido - sem parâmetro cidade', () => {
    const result = Validation.create({
        nome: "Norberto",
        email: "noorberto@tabajara.net.br",
        senha: "Ee.46829308",
        servico: "Pedreiro",
        celular: "(35)99946-7089",
    });
    expect(result).toEqual(Constants.ErrorValidation);
});