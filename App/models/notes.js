const { logger } = require('../../logger/logger');
const mongoose = require('mongoose');
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


module.exports = new Model();