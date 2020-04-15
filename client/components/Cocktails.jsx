import React from 'react'
// import request from 'superagent'

// strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strInstructions, strDrinkThumb

class Cocktails extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      instructions: '',
      image: ''
    }
  }

  render () {
    return (
      <h2>Classic cocktails</h2>
    )
  }
}

export default Cocktails
