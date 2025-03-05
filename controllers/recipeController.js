const Recipe = require("../models/Recipe")

exports.addRecipe = async(req,res) =>{
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
}

exports.getAllRecipes=async(req,res)=>{
    try {

        const recipes = await Recipe.find();
        res.json(recipes);
      } catch (error) {
        console.error('Failed to get recipes:', error);
        res.status(500).json({ message: 'Failed to get recipes' });
      }
}
exports.deleteRecipe = (req,res) =>{

}

exports.updateRecipe = (req,res) =>{}

exports.getRecipeById = async (req, res) => {
    const { id } = req.params; 
    try {
      const recipe = await Recipe.findOne({ _id:id });
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      console.error('Failed to get recipe:', error);
      res.status(500).json({ message: 'Failed to get recipe' });
    }
  };
