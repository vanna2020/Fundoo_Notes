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

    /**
     * @description function written to Get Label into the database
     * @param {*} a valid req body is expected
     * @param {*} res
     * @returns response
     */

    getlabel = (req, res) => {
        try {
            const labelCredential = {
                id: req.user.dataForToken.id
            }
            const CredentialValidation = labelValidation.Validationlabel.validate(labelCredential)
            if (CredentialValidation.error) {
                return res.status(400).json({
                    error: error.message,
                    message: 'Some error Occured',
                    data: CredentialValidation.error
                })
            }
            serviceLayer.getlabel(labelCredential, (error, data) => {
                if (error) {
                    return res.status(400).json({
                        error: error.message,
                        message: 'Some error Occured',
                        data: CredentialValidation.error
                    })
                }
                else if (!data) {
                    return res.status(401).json({
                        error: error.message,
                        data: data,
                        message: 'data is not found'
                    })
                }
                return res.status(200).json({
                    message: 'succesfully reterive labels',
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

    /**
     * @description function written to GetLabelById into the database
     * @param {*} a valid req body is expected
     * @param {*} res
     * @returns response
     */

    getlabelById = (req, res) => {
        try {
            const labelCredential = {
                userId: req.user.dataForToken.id,
                labelId: req.params.id
            }
            const CredentialValidation = labelValidation.labelidvalidator.validate(labelCredential)
            if (CredentialValidation.error) {
                return res.status(400).json({
                    error: error.message,
                    message: 'Some error Occured ',
                    data: CredentialValidation.error
                })

            }
            serviceLayer.getlabelById(labelCredential, (error, data) => {
                if (error) {
                    return res.status(400).json({
                        error: error.message,
                        message: 'Some error Occured'
                    })
                }
                else if (!data) {
                    return res.status(401).json({
                        error: error.message,
                        data: data,
                        message: 'data is not found'
                    })
                }
                return res.status(201).json({
                    message: 'succesfully reterive labels ',
                    data: data
                })
            })
        }
        catch {
            const response = {
                sucess: false,
                message: 'There is some internal error'
            }
            return res.status(500).json(response)
        }
    }

    /**
     * @description function written to Update Label By Id into the database
     * @param {*} a valid req body is expected
     * @param {*} res
     * @returns response
     */

    updatelabelById = (req, res) => {
        try {
            const updatelabel = {
                userId: req.user.dataForToken.id,
                id: req.params.id,
                labelName: req.body.labelName
            };
            const CredentialValidation = labelValidation.updatelabelbyid.validate(updatelabel)
            if (CredentialValidation.error) {
                console.log("err",CredentialValidation.error)
                const response = {
                    sucess: false,
                    message: 'Validation Failed',
                    error: CredentialValidation.error
                }
                return res.status(422).json(response)
            }
            serviceLayer.updatelabelById(updatelabel, (error, data) => {
                if (data) {
                    const response = {
                        sucess: true,
                        message: 'token is successfully Validated',
                        data: data
                    }
                    return res.status(201).json(response)
                }
                const response = {
                    sucess: true,
                    message: 'Some error occured .....!',
                    data: data
                }
                return res.status(400).json(response)
            })
        }
        catch {
            const response = {
                sucess: false,
                message: 'There is some internal error'
            }
            return res.status(500).json(response)
        }
    }

    deletelabelById = (req,res) => {
        try{
            const deletelabel = {
                id:req.params.id
            }
            const deletionResult = labelValidation.deletinglabel.validate(deletelabel)
            if( deletionResult.eror){
                const response = {
                    sucess: true,
                    message: 'Validation failed of Params',
                }
                return res.status(422).json(response)
            }
                serviceLayer.deletelabelById(deletelabel)
                .then((data)=>{
                    const response = {
                        sucess: true,
                        message: 'checking response from service',
                        data : data
                    }
                    return res.status(201).json(response)
                }).catch((error)=>{
                    const response = {
                        sucess: true,
                        message: 'Some error Occured ',
                    }
                    return res.status(400).json(response)
                })
        }catch(error){
            const response = {
                sucess: false,
                message: 'There is some internal error'
            }
            return res.status(500).json(response)  
        }
    }
}
module.exports = new Label();