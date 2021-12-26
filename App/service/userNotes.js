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
  /**
    * @description it acts as a middleware between controller and model for getnotebyid 
    * @param {*} inputData
    * @param {*} callback
    * @returns
    */
  getNoteById = (id, callback) => {
    if (!id) {
      return callback("id is not found", null)
    }
    return callback(null, id);
  }
}
module.exports = new Service();
