const Recipe = require("../models/Recipe")

exports.addRecipe = async(req,res) =>{
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
}

exports.deleteRecipe = (req,res) =>{}

exports.updateRecipe = (req,res) =>{}

