const Food = require('../../models/Food')

const FoodController = {

    async createFood(req,res){

        const {bodyData} = req.body
        const {user_id} = req.params

        try{

            const data = {username: user_id, ...bodyData}
            const newFood = await Food.create(data)
            await newFood.populate('username').execPopulate()

            return res.status(200).json(newFood) 
        
        } catch (err){
            return res.status(400).json(err)
        }
    },

    async getUserFoods(req,res){
        const{user_id} = req.params

        try{
            const foodsOfAnUser =await Food.find({username: user_id})
            return res.status(200).json(foodsOfAnUser)

        } catch (err){
            return res.status(400).json(err)
        }
    },

    async updateFood(req,res){
        const bodyData = req.body
        const {food_id, user_id} = req.params
        
        try{
            const updateFood = await Food.findByIdAndUpdate(food_id, bodyData, {new: true})
            return res.status(200).json(updateFood)

        } catch (err){
            return res.status(400).json(err)
        }
    },

    async deleteFood(req, res){
        const {food_id, user_id} = req.params
        try{

            const deletedFood = await Food.findByIdAndDelete(food_id)
            return res.status(200).json(deletedFood)

        } catch (err){
            return res.status(400).json(err)
        }

    },

    async getFoods(req, res){  
        try{
            const Foods = await Food.find()
            return res.status(200).json(foods)

        } catch (err){
            return res.status(400).json(err)
        }

    },

    async getFoodById(req, res){

        const {food_id} = req.params
        try{
            const food = await Food.findById(food_id)
            return res.status(200).json(food)

        } catch (err){
            return res.status(400).json(err)
        }

    }




}
module.exports = FoodController