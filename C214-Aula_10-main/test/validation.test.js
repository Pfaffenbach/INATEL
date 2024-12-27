const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido 0', () => {
    const result = Validation.create({
        modelo: "A5",
        marca: "Audi",
        ano: "2018"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido 1', () => {
    const result = Validation.create({
        modelo: "I8",
        marca: "Bmw",
        ano: "2020"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido 0', () => {
    const result = Validation.create({
        modelo: "A5",
        ano: "2018"
    });
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso inválido 1', () => {
    const result = Validation.create({
        modelo: "I8",
        marca: "Bmw",
    });
    expect(result).toEqual(Constants.ErrorValidation);
});