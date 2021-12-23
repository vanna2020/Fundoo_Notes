const { logger } = require('../../logger/logger');
const noteModel = require('../models/notes');

class Service {
    /**
       * @description this function is written to send data models
       * @param {*} A valid note is expected
       * @returns error if it has error else data
       */
    /**
   * @description this function is written to send data models
   * @param {*} A valid note is expected
   * @returns error if it has error else data
   */
    createNote = (note, callback) => {
        if (note) {
            callback(null, note)
        }
    }
}
module.exports = new Service();
