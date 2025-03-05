const mongoose = require('mongoose')

const RecipeSchema=new mongoose.Schema({
    name:String,
    category:String,
    instruction:[String]
})

module.exports=mongoose.model('Recipe',RecipeSchema)