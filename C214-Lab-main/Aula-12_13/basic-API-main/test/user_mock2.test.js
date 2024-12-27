const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "João",
                email: "joao@inatel.br",
                senha: "123456789",
            }),
        }));

        expect(await user.create({
            id: 1,
            nome: "João",
            email: "joao@inatel.br",
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

describe('editUser', () => {
    it('Valid edit', async () => {
        UserModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    senha: '123Maria',
                    email: 'jao10@email.com',
                    nome: 'Maria João',
                }),
            }),
        }));

        expect(await user.update({
            email: 'jao10@email.com',
            nome: 'Maria João',
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

describe('listUsers', () => {
    it('Valid list', async () => {
        UserModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        }));

        expect(await user.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        );

    });
});

describe('getByEmail', () => {
    it('Valid list', async () => {
        UserModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        }));

        expect(await user.getByEmail({
            email: 'cardozo10@email.com'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        );

    });
});

describe('deleteUser', () => {
    it('Valid delete', async () => {
        UserModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await user.delete({
            email: 'jao10@email.com',
        })).toEqual(1);
    });
});