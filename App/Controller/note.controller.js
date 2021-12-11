/**
 * @description   : Taking the request from the client and gives the response
 * @author        : Vandana Singh
*/

const userService = require('../service/service.js')
const validation = require('../utilities/validation');
const { logger } = require('../../logger/logger')
class Controller {

  /**
     * @description Create and save user and sending response to service
     * @method register to save the user
     * @param req,res for service
     */

  register = (req, res) => {
    try {
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      };

      const registerValidation = validation.authRegister.validate(user)
      if (registerValidation.error) {
        logger.error('Wrong Input Validations');
        return res.status(400).send({
          success: false,
          message: 'Wrong Input Validations',
          data: registerValidation
        });
      }

      userService.registerUser(user, (error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'User already exist',
          });
        } else {
          logger.info('User registered');
          return res.status(200).json({
            success: true,
            message: "User Registered",
            data: data,
          });
        }
      });
    } catch (error) {
      logger.error('Internal server error');
      return res.status(500).json({
        success: false, message: "Error While Registering",
        data: null,
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
      console.log("In Catch", error);
      return res.status(500).json({
        success: false,
        message: 'Error while Login', error,
        data: null
      });
    }
  };
}
module.exports = new Controller();