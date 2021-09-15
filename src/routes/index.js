const{Router} = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const FoodController = require('../controllers/FoodController')
//const CartController = require('../controllers/CartController')

const routes = Router()

routes.get('/', (req,res) => {
    res.send('Hello world')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/foods/:user_id', FoodController.createFood)
routes.get('/:user_id/foods ', FoodController.getUserFoods)
routes.patch('/foods/:user_id/:food_id',FoodController.updateFood)
routes.delete('/foods/:user_id/:food_id', FoodController.deleteFood)

routes.get('/foods', FoodController.getFoods)
routes.get('/foods/:food_id', FoodController.getFoodById)

//routes.post('/carts/:user_id', CartController.createCart)

//routes.get('/carts/:user_id', CartController.getUserCarts)

//routes.get('/carts:user_id/:cart_id', CartController.getCart)



module.exports = routes



