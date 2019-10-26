const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt');
const customer = models.customer

module.exports = {

customers: (req, res) => {

    customer.findAll().then((customers) => {

      if (customers != '') {
        res.status(200).json({
        message : 'success',
        room : customers
      })
      } else {
        res.status(200).json({
        message : 'data not found',
      
      })
      }
      
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },

addcustomer: (req, res) => {

     console.log(req.body)
    room.create({
        name : req.body.name,
  }).then((room) => {
      res.status(200).json({
        message : 'success',
        room : room
      })
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },

  updateRoom: (req, res) => {
     console.log(req.body)
    room.update(
       req.body,
        {
        where : { id : req.params.id}
  }).then((room) => {
      res.status(200).json({
        message : 'success',
      })
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },

deleteRoom : (req, res) => {
  room.destroy({
        where: {id : req.params.id}
  }).then(room => {
    res.send({message : 'sukses'})
  })
  .catch((error) => res.status(404).json(
            ResponseFormat.error(
            error,
            "somthing went wrong when reterieve the data",
            404,
            "error"
            )
        ))
}

};