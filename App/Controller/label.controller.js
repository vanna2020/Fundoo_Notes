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
                const labelDetail = { labelName: req.body.labelName }
                const validation = labelValidation.authLabelValidation.validate(labelDetail);
                if (validation.error) {
                    return res.status(422).json({
                        message: 'Worng Credential Valdation',
                    });
                }
                const label = {
                    labelName: req.body.labelName,
                    userId: req.user.dataForToken.id,
                    noteId: req.params.id
                }
                serviceLayer.addLabelById(label, (error, data) => {
                    if (error) {
                        return res.status(201).json({
                            message: 'Successfully Note Is added',
                            data: data
                        });
                    } else if (data) {
                        return res.status(400).json({
                            message: 'Some error Occured !',
                            data: data
                        });
                    }
                })
            }
        } catch (err) {
            logger.error('Internal Server Error');
            return res.status(500).json({
                message: 'Internal Server Error'
            }
            )
        };
    }
    getlabel = (req, res) => {
        try {
            const labelCredential = {
                id: req.user.dataForToken.id
            }
            const CredentialValidation = labelValidation.Validationlabel.validate(labelCredential)
            if (CredentialValidation.error) {
                return res.status(400).json({
                    error: error.message,
                    message: 'Some error Occured ',
                    data: CredentialValidation.error
                })
            }
            serviceLayer.getlabel(labelCredential, (error, data) => {
                if (error) {
                    return res.status(400).json({
                        error: error.message,
                        message: 'Some error Occured ',
                        data: CredentialValidation.error
                    })
                }
                else if (!data) {
                    return res.status(401).json({
                        error: error.message,
                        data: data,
                        message: 'data is not found!'
                    })
                }
                return res.status(200).json({
                    message: 'succesfully reterive labels ',
                    data: data
                })
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: error
            })
        }
    }
    getlabelById = (req, res) => {
        try {
            const response = { sucess: false, message: "There is some internal error" }
            return res.status(200).json(response)
        }
        catch {
            const response = { sucess: false, message: "There is some internal error" }
            return res.status(500).json(response)
        }
    }
}
module.exports = new Label();