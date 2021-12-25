const noteService = require('../service/userNotes');
const { logger } = require('../../logger/logger');
const validation = require('../utilities/validation');


class Note {
    /**
    * @description function written to create notes into the database
    * @param {*} a valid req body is expected
    * @param {*} res
    * @returns response
    */

    createNote = (req, res) => {
        try {
            const note = {
                userId: req.user.dataForToken.id,
                title: req.body.title,
                description:req.body.description
              };
              const createNoteValidation = validation.notesCreationValidation.validate(note);
              if (createNoteValidation.error) {
                console.log(createNoteValidation.error);
                return res.status(400).send({
                  success: false,
                  message: 'Wrong Input Validations',
                  data: createNoteValidation
                });
              }
              noteService.createNote(note, (error, data) => {
                if (error) {
                    console.log("11",error);
                  logger.error('failed to post note');
                  return res.status(400).json({
                    message: 'failed to post note',
                    success: false
                  });
                } else {
                  logger.info('Successfully inserted note');
                  return res.status(201).send({
                    message: 'Successfully inserted note',
                    success: true,
                    data: data
                  });
                }
              });
        } catch (error) {
            logger.error('Internal server error');
            return res.status(500).json({
                message: 'Error occured',
                success: false
            });
        }
    }
     /**
   * @description function written to get all the notes from the database
   * @param {*} req
   * @param {*} res
   * @returns response
   */
    getNote = (req, res) =>{
      try {
        if(req.user){
        logger.info('Successfully inserted note');
        return res.status(201).send({
          message: 'Successfully inserted note',
          success: true
        });
      }
        else{
          logger.error('Internal server error');
          return res.status(400).json({
              message: 'Error occured',
              success: false
          });
        }
      }catch(error){
        logger.error('Internal server error');
        return res.status(500).json({
            message: 'Error occured',
            success: false
        });
      }
    }
}
module.exports = new Note();