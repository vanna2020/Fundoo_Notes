const modelLayer = require('../models/label.model')

class labelService {
    /**
     * @description Create a new label 
     * @method labelModel.create calls model class method
     */
    addLabelById = (label, callback) => {
        modelLayer.addLabelById(label, (error, data) => {
            if (!label) {
                return callback("Label is not defined", null)
            }
            return callback(null, label);
        })
    }
}
module.exports = new labelService();