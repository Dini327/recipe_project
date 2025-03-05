const express = require('express')
const {addRecipe, deleteRecipe, updateRecipe, getAllRecipes  } = require('../controllers/recipeController')
const router = express.Router() 

router.post('/addRecipe',addRecipe)
router.get('/getAllRecipes',getAllRecipes)
router.delete('/deleteRecipe/:id',deleteRecipe)
router.put('/updateRecipe',updateRecipe)

module.exports = router