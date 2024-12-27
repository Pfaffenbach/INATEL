const Anime = require('../application/anime_service');
const Utils = require('../utils/utils');

const route = '/anime';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Anime.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Anime.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};