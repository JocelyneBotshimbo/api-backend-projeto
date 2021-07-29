const{Router} = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/SessionController')
const FoodController = require('../controllers/FoodController')

const routes = Router()

routes.get('/', (req,res) => {
    res.send('Hello world')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)
routes.post('/sessions', SessionController.createSession)

routes.get('/users/:user_id')

routes.post('/menu/:user_id', FoodController)
routes.get('/menu/:user_id', FoodController)
routes.patch('/menu/:user_id/:food_id',FoodController )
routes.delete('/menu/:user_id/:food_id', FoodController)

routes.get('/menu')
routes.get('/menu/:food_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart:user_id/:cart_id')



module.exports = routes



