const { FuncModel } = require('../infrastructure/database');

const FuncRepository = {
    async create(data) {
        try {
            const model = new FuncModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { email: data.email };
            const result = await FuncModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await FuncModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByEmail(data) {
        try {
            const result = await FuncModel.findOne({ email: data.email }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await FuncModel.deleteOne({ email: data.email }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = FuncRepository;