/**
 * @module       routes
 * @file         user.routes.js
 * @description  api Routing
 * @author       Vandana Singh
 */

const controller = require('../Controller/user.controller.js');
const noteController = require('../Controller/notes.controller');
const helper = require('../utilities/helper');
const crud = require('../Controller/label.controller');

module.exports = (app) => {
  // API for registration
  app.post('/register', controller.register);
  // API for login
  app.post('/login', controller.login);
  // API for forgot pasword
  app.post('/forgotPassword', controller.forgotPassword);
  // API for reset-password
  app.put('/reset-Password', controller.resetPassword);
  // API for Create Note 
  app.post('/createnotes', helper.validateToken, noteController.createNote);
  // API for Get Note
  app.get('/getnotes', helper.validateToken, noteController.getNote);
  // API for GetNotesbyId 
  app.get('/getnotes/:id', helper.validateToken, noteController.getNoteById);
  // API for updatenotes Id 
  app.put('/updatenotes/:id', helper.validateToken, noteController.updateNoteById); 
  // API for delete By Id 
  app.delete('/deletenotes/:id', helper.validateToken, noteController.deleteNoteById);
  // API for addLabel By Id 
  app.post('/addlabel/:id', helper.validateToken, crud.addLabelById);
}