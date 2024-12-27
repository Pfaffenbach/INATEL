const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido 0', () => {
    const result = Validation.create({
        nome: "Black Summoner",
        produtora: "Crunchyroll",
        temporadas: "1",
        episodios: "11"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido 1', () => {
    const result = Validation.create({
        nome: "A Couple of Cuckoos",
        produtora: "Crunchyroll",
        temporadas: "1",
        episodios: "21"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido 2', () => {
    const result = Validation.create({
        nome: "Orient",
        produtora: "Crunchyroll",
        temporadas: "1",
        episodios: "22"
    });
    expect(result).toEqual(undefined);
});


it('Caso inválido 0 - sem o parâmetro episodios', () => {
    const result = Validation.create({
        nome: "Black Summoner",
        produtora: "Crunchyroll",
        temporadas: "1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido 1 - sem o parâmetro temporadas', () => {
    const result = Validation.create({
        nome: "A Couple of Cuckoos",
        produtora: "Crunchyroll",
        episodios: "21"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido 2 - sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "Orient",
        temporadas: "1",
        episodios: "22"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});