const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Helper {
  hashing = (password, callback) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, hash);
      }
    });
  }
  token = (data) => {
    const dataForToken = {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };
    return jwt.sign(
      { dataForToken },
      process.env.JWT_SECRET,
      {
        expiresIn: '20H'
      }
    );
  };
}

module.exports = new Helper();