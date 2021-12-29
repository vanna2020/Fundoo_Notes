/** 
* Purpose : to recieve request from routes and forward it to service layer
* @file : crud.label.js
* @author : Vandana Singh
* @version : 1.0
**/

const labelValidation = require('../utilities/validation')
const { logger } = require('../../logger/logger')
class Label {
    /**
     * @description function written to Added Label into the database
     * @param {*} a valid req body is expected
     * @param {*} res
     * @returns response
     */
    addLabelById = (req, res) => {
        try {
            if (req.user) {
                const labelDetail = req.body.labelName
                const validation = labelValidation.authLabelValidation.validate(labelDetail);
                if (validation.error) {
                    const response = { sucess: false, message: "Wrong Input Vaidation" }
                    return res.status(422).json(response)
                }
                return res.status(201).json({
                    message: 'Authentic Entry of Token'
                });
            } else {
                return res.status(400).json({
                    message: 'False Entry of Token'
                });
            }
        } catch (err) {
            logger.error('Internal Server Error');
            return res.status(500).json({
                message: 'Internal Server Error'
            }
            )
        };
    }
}
module.exports = new Label();