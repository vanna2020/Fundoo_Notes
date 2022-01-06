/**
 * @description   : Taking the request from the client and gives the response
 * @author        : Vandana Singh
*/

const userService = require('../service/user.service.js')
const validation = require('../utilities/validation');
const { logger } = require('../../logger/logger')
class Controller {

  /**
     * @description Create and save user and sending response to service
     * @method register to save the user
     * @param req,res for service
     */

  register = async (req, res) => {
    try {
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      };

      const registerValidation = validation.RegisterValidation.validate(user)
      if (registerValidation.error) {
        logger.error('Wrong Input Validations');
        return res.status(400).send({
          success: false,
          message: 'Wrong Input Validations',
          data: registerValidation
        });
      }

      let register = await userService.registerUser(user)
      if (!register) {
        return res.status(400).json({
          success: false,
          message: 'User already exist'
        });
      } else {
        logger.info('User registered');
        return res.status(200).json({
          success: true,
          message: "User Registered Succesfully",
          data: register
        });
      }
    } catch (error) {
      logger.error('Internal server error');
      console.log("5555",error);
      return res.status(500).json({
        success: false, message: "Error While Registering",
        data: null
      });
    }
  }

  /**
    * @description retrieving login info from user by email and password
    * @method login
    * @param req,res for service
    */

  login = (req, res) => {
    try {
      const userLoginInfo = {
        email: req.body.email,
        password: req.body.password
      };

      const loginValidation = validation.authLogin.validate(userLoginInfo);
      if (loginValidation.error) {
        logger.error(loginValidation.error);
        res.status(400).send({
          success: false,
          message: loginValidation.error.message
        });
      }

      userService.userLogin(userLoginInfo, (error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'Unable to login. Please enter correct info',
            error
          });
        }
        logger.info('User logged in successfully');
        return res.status(200).json({
          success: true,
          message: 'User logged in successfully',
          data: data
        });
      });
    }
    catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error while Login', error,
        data: null
      });
    }
  };

  /**
    * description controller function for forgot password
    * @param {*} req
    * @param {*} res
    * @returns
    */
  forgotPassword = (req, res) => {
    try {
      const userCredential = {
        email: req.body.email
      };

      const validationforgotPassword =
        validation.authenticateLogin.validate(userCredential);
      if (validationforgotPassword.error) {
        logger.error('Wrong Input Validations');
        return res.status(400).send({
          success: false,
          message: 'Wrong Input Validations',
          data: validationforgotPassword
        });
      }

      userService.forgotPassword(userCredential, (error, result) => {
        if (error) {
          return res.status(400).send({
            success: false,
            message: 'failed to send email'
          });
        } else {
          return res.status(200).send({
            success: true,
            message: 'Email sent successfully'
          });
        }
      });
    } catch (error) {
      logger.error('Internal server error');
      return res.status(500).send({
        success: false,
        message: 'Internal server error',
        result: null
      });
    }
  };

  /**
   * description controller function for reset password
   * @param {*} req
   * @param {*} res
   * @returns
   */
  resetPassword = async (req, res) => {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password,
        code: req.body.code
      };

      const resetVlaidation = validation.validateReset.validate(userData);
      if (resetVlaidation.error) {
        logger.error('Invalid password');
        res.status(400).send({
          success: false,
          message: 'Invalid password'
        });
        return;
      }

      let resetPassword = await userService.resetPassword(userData)
      if (!resetPassword) {
        logger.error(error);
        return res.status(400).send({
          message: error,
          success: false
        });
      }
      logger.info('Password reset succesfully');
      return res.status(200).json({
        success: true,
        message: 'Password reset succesfully',
        data: userData
      });
    }
    catch (error) {
      logger.error('Internal server error');
      return res.status(500).send({
        success: false,
        message: 'Internal server error',
        error: error
      });
    }
  }
}
module.exports = new Controller();