const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});
