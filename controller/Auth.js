const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt');
const admin = models.admin

module.exports = {

signUp: (req, res) => {

  console.log('ini menu registrasi')
     console.log(req.body)
    admin.create({
        username : req.body.name,
        password : req.body.password
  }).then((admin) => {

    const payload = {
     username : admin.name,
     password : admin.password
    }
  var token = jwt.sign({ payload },'secret_key');
  var name = admin['username']
    if (token) {
      res.status(200).json({
        message : 'success',
        name: name,
        token : token
      })
    }
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },

  signIn: (req,res) => {
     console.log(req.body)
    admin.findOne({
      where: {
            username : req.body.name, password : req.body.password
      }
    }).then((user) => {
    
        const token = req.headers.authorization
        const username = user['username']

        if (username) {
          res.status(200).json({
            message: "Success Sign In",
            name : username,
            token: token

          });
        }
    }).catch((err) => {
      res.status(200).json({
        message: err.message,
      });
    });
  },
};