const { logger } = require('../../logger/logger');
const noteModel = require('../models/notes');
class Service {
    /**
       * @description this function is written to send data models
       * @param {*} A valid note is expected
       * @returns error if it has error else data
       */
    createNote = (note, callback) => {
        noteModel.createNote(note, (error, data) => {
            if (error) {
                logger.error(error);
                return callback(error, null);
            } else {
                return callback(null, data);
            }
        });
    }

    /**
   * @description this function is written to trigger or call the models function
   * @returns error if it has error else data
   */
    getNote = (id, resolve, reject) => {
        noteModel.getNote(id)
            .then((data) => resolve(data))
            .catch(() => reject());
    };
}
module.exports = new Service();