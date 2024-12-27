const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const AnimeRepository = require('../port/anime_repository');
const Validation = require('../utils/validation');

const Anime = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await AnimeRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await AnimeRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};

module.exports = Anime;