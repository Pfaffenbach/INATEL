const Carros = require('../src/application/carro_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarroRepository = require('../src/port/carro_repository');

jest.mock('../src/port/carro_repository');

it('CREATE - Dado válido 0', async () => {
    const data = {
        modelo: "A5",
        marca: "Audi",
        ano: "2018"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ ...data, id });

    const result = await Carros.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado válido 1', async () => {
    const data = {
        modelo: "I8",
        marca: "Bmw",
        ano: "2020"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ ...data, id });

    const result = await Carros.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado inválido 0 - Duplicado', async () => {
    const data = {
        modelo: "A5",
        marca: "Audi",
        ano: "2018"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Carros.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})

it('CREATE - Dado inválido 1 - Duplicado', async () => {
    const data = {
        modelo: "I8",
        marca: "Bmw",
        ano: "2020"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Carros.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})