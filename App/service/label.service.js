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
}
module.exports = new labelService();