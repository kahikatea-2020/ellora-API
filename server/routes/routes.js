const express = require('express')

const router = express.Router()
const request = require('superagent')

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const cocktail = 'margarita'

router.get('/api/v1/cocktails', (req, res) => {
  request.get(apiUrl)
    .query({ s: cocktail })
    .then(response => {
      const { strDrink, strInstructions, strDrinkThumb } = response.body.drinks[0]
      res.json({
        name: strDrink,
        image: strDrinkThumb,
        instructions: strInstructions
      })
    })
})

module.exports = router
