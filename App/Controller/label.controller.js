/** 
* Purpose : to recieve request from routes and forward it to service layer
* @file : crud.label.js
* @author : Vandana Singh
* @version : 1.0
**/

const labelValidation = require('../utilities/validation')
const { logger } = require('../../logger/logger')
const serviceLayer = require('../service/label.service')
const { errorMonitor } = require('nodemailer/lib/xoauth2')
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
                const labelDetail = { labelName : req.body.labelName }
                const validation = labelValidation.authLabelValidation.validate(labelDetail);
                if (validation.error) {
                    console.log(validation.error)
                    const response = { sucess: false, message: "Error in Vaidation" }
                    return res.status(422).json(response)
                }
                const label = {
                    labelName: req.body.labelName,
                    userId: req.user.dataForToken.id,
                    noteId: req.params.id
                }
                serviceLayer.addLabelById(label, (error, data) => {
                    if (error) {
                        const response = { sucess: true, message: error.message }
                        return res.status(401).send(response)
                    } else 
                         return res.status(201).json({
                            message: 'Authentic Entry of Token'
                        });
                    })
                }
        } catch (err) {
            console.log("9999",err)
            logger.error('Internal Server Error');
            return res.status(500).json({
                message: 'Internal Server Error'
            }
            )
        };
    }
}
module.exports = new Label();