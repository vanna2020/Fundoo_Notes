const note = require('../models/notes.model').note
class Model {
    /**
         * @description Create a new label
         */
    addLabelById = (label, callback) => {
     note.find({email : label.email,noteId : label.noteId},(error,data)=>{
         if(!data){
             return callback("Note is exits in user info",data);
         }
         return callback(null,data);
     })
}
}
module.exports = new Model();