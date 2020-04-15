import React from 'react'
import request from 'superagent'

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const cocktail = 'margarita'
const imgStyle = {
  width: '400px'
}

// strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strInstructions, strDrinkThumb

class Cocktails extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      image: '',
      instructions: ''
    }
  }

  componentDidMount () {
    request.get(apiUrl)
      .query({ s: cocktail })
      .then(response => {
        const { strDrink, strInstructions, strDrinkThumb } = response.body.drinks[0]
        // console.log(response.body.drinks[0])
        this.setState({
          name: strDrink,
          image: strDrinkThumb,
          instructions: strInstructions
        })
      })
  }

  render () {
    return (
      <>
        <h1>Classic cocktails</h1>
        <div><h2>{this.state.name}</h2></div>
        <img src={this.state.image} style={imgStyle} alt={`image of a ${this.state.name}`} />
        <div>Instructions: {this.state.instructions}</div>
      </>
    )
  }
}

export default Cocktails
