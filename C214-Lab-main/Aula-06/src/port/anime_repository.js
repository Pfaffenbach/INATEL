const { AnimeModel } = require('../infrastructure/database');

const AnimeRepository = {
    async create(data) {
        try {
            const model = new AnimeModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await AnimeModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = AnimeRepository;