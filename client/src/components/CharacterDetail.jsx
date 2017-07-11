import React from 'react';

class CharacterDetail extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      showImage: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState( { showImage: !this.state.showImage } )


  }

  render() {
    let image = ""
    if(!this.props.character) return null

      if (this.state.showImage) { 
        image = <img src= { this.props.character.image} width="200" height ="200"/>
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
        <button onClick={ this.handleButtonClick }> MugShot Toggle</button>
        {image}

        </div>
        )
    }
  }

  export default CharacterDetail
