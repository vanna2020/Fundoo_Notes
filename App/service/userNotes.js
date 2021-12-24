const { logger } = require('../../logger/logger');
const noteModel = require('../models/userNotes');

class Service {
  /**
     * @description this function is written to send data models
     * @param {*} A valid note is expected
     * @returns error if it has error else data
     */
   createNote = (note, callback) => {
    noteModel.createNote(note, (error, data) => {
      if (error) {
        return callback(error, null);
      } else {
        return callback(null, data);
      }
    });
  }
}
module.exports = new Service();
