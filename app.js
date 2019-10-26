const express = require('express')
require('express-group-routes')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())

const AuthController = require('./controller/Auth')
const RoomsController = require('./controller/rooms')
const CustomerController = require('./controller/customer')

const { authenticated,  } = require('./middleware')
app.group("/api/v2", (router) => {
	 router.post('/registrasi',AuthController.signUp)
     router.post('/login',authenticated,AuthController.signIn)
     // ----------------------- room ----------------------
     router.get('/rooms',authenticated,RoomsController.rooms)
     router.post('/room',authenticated,RoomsController.addRoom)
     router.put('/room/:id',authenticated,RoomsController.updateRoom)
     router.delete('/room/:id',authenticated,RoomsController.deleteRoom)
     // ------------------- customer --------------------------------
     router.get('/customers',authenticated,CustomerController.customers)


})


app.listen(port, () => console.log(`Listening on port ${port}!`))