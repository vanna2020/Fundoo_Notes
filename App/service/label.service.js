const { database } = require('faker/locale/az');
const modelLayer = require('../models/label.model')

class labelService {

    /**
     * @description Create a new label 
     * @method labelModel.addlabelBYId calls model class method
     */
    addLabelById = (label, callback) => {
        modelLayer.addLabelById(label, (error, data) => {
            if (!data) {
                return callback("Label is not defined", null)
            }
            return callback(null, data);
        })
    }

    /**
    * @description get label
    * @method labelModel.getlabel calls model class method
    */
    getlabel = (labelCredential, callback) => {
        modelLayer.getlabel(labelCredential, (error, data) => {
            if (error) {
                return callback(error, null);
            } else if (!data) {
                return callback("data is not found or undefine", data);
            }
            return callback(null, data);
        })
    }

    /**
     * @description get label By Id
     * @method labelModel.getlabelById calls model class method
     */
    getlabelById = (labelCredential, callback) => {
        modelLayer.getlabelById(labelCredential, (error, data) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, data);
        })
    }

    /**
     * @description Update label By Id
     * @method labelModel.UpdatelabelById calls model class method
     */
    updatelabelById = (labelCredential, callback) => {
        modelLayer.updatelabelById(labelCredential, (error, data) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, data);
        })
    }

    deletelabelById = (deletelabel) => {
        return new Promise((resolve, reject) => {
            modelLayer.deletelabelById(deletelabel)
            .then(data =>{
                resolve(data);
            }).catch(error =>{
                reject(error);
            })
        })
    }
}
module.exports = new labelService();