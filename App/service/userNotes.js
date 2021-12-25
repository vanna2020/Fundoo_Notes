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
    /**
  * @description this function is written to trigger or call the models function
  * @returns error if it has error else data
  */
     getNote = (id, callback) => {
      noteModel.getNote(id, (error, data) => {
        if (data) {
          callback(null, data);
        }
        else {
          callback(error, null);
        }
      });
    };
}
module.exports = new Service();