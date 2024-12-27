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
            }),
        }));

        expect(await func.create({
            id: 1,
            nome: "Erich Pfaffenbach",
            email: "erich@tabajara.net.br",
            senha: "123456789"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
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
                }),
            }),
        }));

        expect(await func.update({
            email: 'nelson@tabajara.net.br',
            nome: 'Nelson Marcondes',
        })).toEqual(
            expect.objectContaining({
                email: expect.any(String),
                nome: expect.any(String),
                senha: expect.any(String),
                id: expect.any(Number),
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
            }),
        }));

        expect(await func.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
            }),
        );

    });
});

describe('getByEmail', () => {
    it('Valid list', async () => {
        FuncModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
            }),
        }));

        expect(await func.getByEmail({
            email: 'narcizo@tabajara.net.br'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'narcizo@tabajara.net.br',
                nome: 'Narcizo Cardozo',
                senha: 'teste1234',
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