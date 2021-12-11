/**
 * @module       : utilities
 * @file         : validation.js
 * @description  : it contains the validation for register and login API
 * @author       : Vandana Singh
 */

const Joi = require('joi');
class Validation {
  authRegister =
    Joi.object({
      firstName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .pattern(new RegExp("^([A-Z]?[a-zA-Z]{1,30}[ ]?[.]?[']?[ ]?[a-zA-Z]{1,30}[ ]?[.]?[']?[ ]?[a-zA-Z]{0,30}[ ]?[a-zA-Z]{0,30}?)")),

      lastName: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required()
        .pattern(new RegExp("^([A-Z]?[a-zA-Z]{1,30}[ ]?[.]?[']?[ ]?[a-zA-Z]{1,30}[ ]?[.]?[']?[ ]?[a-zA-Z]{0,30}[ ]?[a-zA-Z]{0,30}?)")),


      email: Joi.string()
        .pattern(new RegExp('^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$'))
        .required(),

      password: Joi.string()
        // eslint-disable-next-line no-control-regex
        .pattern(new RegExp('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'))
        .required()
    });

  authLogin =
    Joi.object({
      email: Joi.string()
        .pattern(new RegExp('^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$'))
        .required(),

      password: Joi.string()
        .required()
        .pattern(new RegExp('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'))
    });
  authenticateLogin = Joi.object({
    email: Joi.string()
      .pattern(new RegExp('^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$'))
      .required()
  })
}
module.exports = new Validation();