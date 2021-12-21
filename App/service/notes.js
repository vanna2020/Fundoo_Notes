/**
 * @module       Service
 * @file         user.service.js
 * @description  Service class holds the callback method for controller
 * @author       Vandana Singh
 */
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

    /**
     * @description this function is written to trigger or call the models function
     * @returns error if it has error else data
     */
    getNoteById = (id, callback) => {
        noteModel.getNoteById(id, (err, data) => {
            if (data) {
                return callback(null, data)
            }
            else {
                return callback(err, null)
            }
        });
    };

    /**
     * @description this function is written to trigger or call the models function
     * @returns error if it has error else data
     */
    updateNoteById = (updateNote, callback) => {
        noteModel.updateNoteById(updateNote, (error, data) => {
            if (error) {
                logger.error(error);
                return callback(error, null);
            } else {
                return callback(null, data);
            }
        }
        );
    };


    /**
* @description deleting notes by id
* @param {*} notesId
* @returns
*/
    deleteNoteById = async (id) => {
        try {
            return await noteModel.deleteNoteById(id);
        } catch (err) {
            return err;
        }
    }
}
module.exports = new Service();