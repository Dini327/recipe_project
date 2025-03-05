const express = require('express')
const {addRecipe, deleteRecipe, updateRecipe, getAllRecipes, getRecipeById  } = require('../controllers/recipeController')
const router = express.Router() 

router.post('/addRecipe',addRecipe)
router.get('/getAllRecipes',getAllRecipes)
router.get('/getRecipeById/:id',getRecipeById)
router.delete('/deleteRecipe/:id',deleteRecipe)
router.put('/updateRecipe',updateRecipe)

module.exports = router