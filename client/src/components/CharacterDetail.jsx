import React from 'react';

class CharacterDetail extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      showImage: true
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState( { showImage: true } )


  }

  render() {
    if(!this.props.character) return null

      if (this.showImage) { 
        const image = <img src= { this.props.character.image} width="200" height ="200"/>
      } else {
        const image = ""
      }
      
      return (
        <div>
        <h3>
        {this.props.character.name}
        </h3> 
        <ul>
        <li>Gender: {this.props.character.gender}</li>
        <li>House: {this.props.character.house}</li>
        <li>Ancestry: {this.props.character.ancestry}</li>
        <li>Eye colour: {this.props.character.eyeColour}</li>
        <li>Hair colour: {this.props.character.hairColour}</li>
        </ul>
        <button onClick={ this.handleButtonClick }> Click me yo</button>
        {this.props.image}

        </div>
        )
    }
  }

  export default CharacterDetail
