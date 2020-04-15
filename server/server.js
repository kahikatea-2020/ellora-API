const path = require('path')
const express = require('express')

const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const cocktail = 'margarita'

server.get('/api/v1/cocktails', (req, res) => {
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

module.exports = server
