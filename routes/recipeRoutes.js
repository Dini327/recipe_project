const express = require('express')
const {addRecipe, deleteRecipe, updateRecipe  } = require('../controllers/recipeController')
const router = express.Router() 

router.post('/addRecipe',addRecipe)
router.delete('/deleteRecipe',deleteRecipe)
router.put('/updateRecipe',updateRecipe)

module.exports = router