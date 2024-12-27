// const validate = require('validate.js');
// const Constants = require('./constants');
// const Constraints = require('./func_validation');

// const Validation = {
//     create(data) {
//         const validation = validate.validate(data, Constraints.create);
//         if (validation) {
//             const response = Constants.ErrorValidation;
//             response.message = validation;
//             return response;
//         }
//         return validation;
//     }
// };
// module.exports = Validation;

const validate = require('validate.js');
const Constants = require('./constants');
const Constraints = require('./func_validation');

const Validation = {
  create(data) {
    const validation = validate.validate(data, Constraints.create);
    if (validation) {
      const response = Constants.ErrorValidation;
      response.message = validation;
      return response;
    }
    return undefined; // Alterado para retornar undefined quando não há erros
  },
};

module.exports = Validation;
