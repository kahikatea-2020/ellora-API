import React from 'react'
// import request from 'superagent'

// strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strInstructions, strDrinkThumb

class Cocktails extends React.Component {
  constructor () {
    super()

    this.state = {
      name: 'Margarita',
      image: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg',
      instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'
    }
  }

  render () {
    return (
      <>
        <h2>Classic cocktails</h2>
        <div>{this.state.name}</div>
        <img src={this.state.image} alt={`image of a ${this.state.name}`} />
        <div>Instructions: {this.state.instructions}</div>
      </>
    )
  }
}

export default Cocktails
