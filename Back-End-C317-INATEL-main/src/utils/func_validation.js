const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    senha: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    servico: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    celular: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cidade: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    servico: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    celular: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cidade: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    servico: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    }
};

const deleteBy = {
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};