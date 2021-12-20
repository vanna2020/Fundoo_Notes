/**
 * @module       routes
 * @file         user.routes.js
 * @description  API Routing
 * @author       Vandana Singh
 */

const controller = require('../Controller/note.controller.js');
const noteController = require('../Controller/notes')
const helper = require('../utilities/helper');

module.exports = (app) => {
  // api for registration
  app.post('/register', controller.register);
  // api for login
  app.post('/login', controller.login);
  // api for forget pasword
  app.post('/forgotPassword', controller.forgotPassword);
  //api for reset-password
  app.put('/reset-Password', controller.resetPassword);

  // api for CRUD
  app.post('/createnotes', helper.validateToken, noteController.createNote);

  // api for getnotes
  app.get('/getnotes', helper.validateToken, noteController.getNote);

  // api for getnotesById
  app.get('/getnotes/:id', helper.validateToken, noteController.getNoteById);

  // api for updatenotes
   app.put('/updatenotes/:id', helper.validateToken, noteController.updateNoteById);
}