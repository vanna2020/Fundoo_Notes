/**
 * @module      :  Models
 * @file        :  User.model.js
 * @description :  Taking the request from the client and gives the response
 * @author      :  Vandana Singh
 */
const mongoose = require('mongoose');
const utilities = require('../utilities/helper.js');
const { logger } = require('../../logger/logger');
const Otp = require('./otp.js');
const { database } = require('faker/locale/ar');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    })

const user = mongoose.model('User', userSchema);

class userModel {

    /**
      * @description register User in the database
      * @param User
      * @param callback
      */
    registerUser = async (userDetails) => {

        const newUser = new user({
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password
        });
            let hashed = await utilities.hashing(userDetails.password)
            console.log("333",hashed);
            if (hashed) {
                console.log("555",hashed);
                newUser.password = hashed;
                console.log("666",hashed);
                let User = await newUser.save()
                console.log("uu",User);
                if (!User) {
                    return User
                } else {
                    return User
                }
            } else {
                throw error;
            }  
    }

    /**
      * @description login User from the database
      * @param loginInfo
      * @param callback for service
      */
    loginUser = (loginData, callBack) => {
        //To find a user email in the database
        user.findOne({ email: loginData.email }, (error, data) => {
            if (error) {
                logger.error('Find error while loggin user');
                return callBack(error, null);
            } else if (!data) {
                logger.error('Invalid User');
                return callBack("Invalid Credential", null);
            } else {
                logger.info('Email id found');
                return callBack(null, data);
            }
        });
    }

    /**
    * @description mongoose function for forgot password
    * @param {*} email
    * @param {*} callback
    */
    forgotPassword = (data, callback) => {
        user.findOne({ email: data.email }, (err, data) => {
            if (err) {
                logger.error('Some error in the query');
                return callback(err, null);
            } else {
                if (!data) {
                    logger.error('User Not Exist')
                } else {
                    return callback(null, data);
                }
            }
        });
    };

    /**
        * @description mongooose method for reseting the password
        * @param {*} userData
        * @param {*} callback
        * @returns
        */
    resetPassword = async (userData) => {
        let otpcode = await Otp.findOne({ code: userData.code })
        if (otpcode) {
            if (userData.code == otpcode.code) {
                let hashingpassword = await utilities.hashing(userData.password)
                if (hashingpassword) {
                    userData.password = hashingpassword;
                    let setpassword = await user.updateOne({ email: userData.email }, { '$set': { "password": userData.password } })
                    if (!setpassword) {
                        return setpassword
                    }
                    return setpassword
                }
                return null
            }
            return "code not found"
        } return "otp does not match"
    }
}
module.exports = new userModel();