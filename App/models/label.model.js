const note = require('../models/notes.model').note
const mongoose = require('mongoose');

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

const labelRegister = mongoose.model('labelRegister',labelSchema)
class Model {
    /**
         * @description Creating a new label
         */
    addLabelById = (label, callback) => {
        note.find({ email: label.email, noteId: label.noteId }, (error, data) => {
            if (!data) {
                return callback("Note is exits in user info", data);
            }
            else if (data){
                labelRegister.find({email :label.email,noteId:label.noteId},(error,data)=>{
                    if(error){
                        return callback("Some error to find note",null)
                    }
                    else if(!data){
                        callback("label is not found",data)
                    }
                    else{
                        labelRegister.findOneAndUpdate({ label:label.labelName },{ $addToSet: { noteId: label.noteId } },(error,data)=>{
                            if(error){
                                return callback("Some error occured",null)
                            }
                            else if(!data){
                                return callback(null,data)
                            }
                            else{
                                return callback(null,data);
                            }
                        })
            }
        })
}
})
}
}
module.exports = new Model()