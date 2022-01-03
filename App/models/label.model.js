const note = require('../models/notes.model').note
const mongoose = require('mongoose');
const { logger } = require('../../logger/logger')

const labelSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    noteId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NoteRegister'
    }],
    labelName: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const labelRegister = mongoose.model('labelRegister', labelSchema)
class Model {
    /**
         * @description Creating a new label
         */
    addLabelById = (label, callback) => {
        note.find({ email: label.email, noteId: label.noteId }, (error, data) => {
            if (!data) {
                return callback("Note does not exists in user info", data);
            }
            else if (data) {
                labelRegister.find({ email: label.email, noteId: label.noteId }, (error, data) => {
                    if (error) {
                        return callback("Some error to find note", null)
                    }
                    else if (!data) {
                        callback("label is not found", data)
                    }
                    else {
                        labelRegister.findOneAndUpdate({ userId: label.userId, labelName: label.labelName }, { $addToSet: { noteId: label.noteId } }, (error, data) => {
                            if (error) {
                                return callback("Some error occured", null)
                            }
                            else if (!data) {
                                const labeldata = new labelRegister({
                                    userId: label.userId,
                                    noteId: [label.noteId],
                                    labelName: label.labelName
                                })
                                labeldata.save((error, data) => {
                                    if (data) {
                                        return callback(null, data);
                                    }
                                    else {
                                        return callback(error, null)
                                    }
                                })
                            }
                            else {
                                return callback(null, data);
                            }
                        })
                    }
                })
            }
        })
    }
    getlabel = (labelCredential, callback) => {
        labelRegister.find({ userId: labelCredential.id }, (error, data) => {
            if (error) {
                return callback("Not getting response from service layer", null)
            }
            return callback(null, data)
        })
    }
    getlabelById = (labelCredential, callback) => {
        labelRegister.find({ $and: [{ _id: labelCredential.labelId }, { userId: labelCredential.userId }] }, (error, data) => {
            if (error) {
                return callback(error, null)
            } else if (!data) {
                return callback("data is not found", data)
            }
            return callback(null, data)
        })
    }
    updatelabelById = (labelCredential, callback) => {
            if (error) {
                return callback(error, null)
            } else if (!data) {
                return callback("data is not found", data)
            }
            return callback(null, data)
    }
}
module.exports = new Model()