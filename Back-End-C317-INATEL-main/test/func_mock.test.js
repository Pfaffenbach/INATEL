const { FuncModel } = require('../src/infrastructure/database');
const func = require('../src/port/func_repository');

describe('create', () => {
    it('Valid Func', async () => {
        FuncModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "Erich",
                email: "erich@tabajara.net.br",
                senha: "123456789",
                servico: "Jardinagem",
                celular: "(35)97070-7070",
                cidade: "Pouso Alegre"
            }),
        }));

        expect(await func.create({
            id: 1,
            nome: "Erich Pfaffenbach",
            email: "erich@tabajara.net.br",
            senha: "123456789",
            servico: "Jardinagem",
            celular: "(35)97070-7070",
            cidade: "Pouso Alegre"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
                servico: expect.any(String),
                celular: expect.any(String),
                cidade: expect.any(String),
            }),
        );
    });
});

describe('editFunc', () => {
    it('Valid Edit', async () => {
        FuncModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    senha: '46829308',
                    email: 'nelson@tabajara.net.br',
                    nome: 'Nelson Marcondes',
                    servico: "Pintura",
                    celular: "(35)98080-8080",
                    cidade: "Uberaba"
                }),
            }),
        }));

        expect(await func.update({
            email: 'nelson@tabajara.net.br',
            nome: 'Nelson Marcondes',
            servico: "Pintura",
            celular: "(35)98080-8080",
            cidade: "Uberaba"
        })).toEqual(
            expect.objectContaining({
                email: expect.any(String),
                nome: expect.any(String),
                senha: expect.any(String),
                id: expect.any(Number),
                servico: expect.any(String),
                celular: expect.any(String),
                cidade: expect.any(String),
            }),
        );
    });
});

describe('listFunc', () => {
    it('Valid list', async () => {
        FuncModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
                servico: "Pedreiro",
                celular: "(35)99090-9090",
                cidade: "Estiva"
            }),
        }));

        expect(await func.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
                servico: "Pedreiro",
                celular: "(35)99090-9090",
                cidade: "Estiva"
            }),
        );
    });
});

describe('getByJob', () => {
    it('Valid list', async () => {
        FuncModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
                servico: "Pedreiro",
                celular: "(35)99090-9090",
                cidade: "Estiva"
            }),
        }));

        expect(await func.getByJob({
            servico: 'Pedreiro'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
                servico: "Pedreiro",
                celular: "(35)99090-9090",
                cidade: "Estiva"
            }),
        );

    });
});

describe('deleteFunc', () => {
    it('Valid delete', async () => {
        FuncModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await func.delete({
            email: 'nelson@tabajara.net.br',
        })).toEqual(1);
    });
});