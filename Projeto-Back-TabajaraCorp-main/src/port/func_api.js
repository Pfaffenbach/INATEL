const User = require('../application/func_service');
const Utils = require('../utils/utils');

const route = '/func';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await User.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await User.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await User.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listFunc`, async (req, res) => {
        const response = await User.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete/:email`, async (req, res) => {
        const data = req.body;
        const { email } = req.params;
        data.email = email;
        const response = await User.delete(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};