const { logger } = require('../../logger/logger');
const mongoose = require('mongoose');
const { database } = require('faker/locale/az');
const noteSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 2
    }
}, {
    timestamps: true
});

const NoteRegister = mongoose.model('NoteRegister', noteSchema);
class Model {
    /**
     * @description function written to create notes into database
     * @param {*} a valid info is expected
     * @returns saved data or if error returns error
     */
     createNote = (note, callback) => {
        if (note) {
            callback(null, note)
        }
    }
}
module.exports = new Model();