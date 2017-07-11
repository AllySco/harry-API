import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    characters: [],
    focusCharacter: null
  };
}

componentDidMount(){
  const url = "http://hp-api.herokuapp.com/api/characters";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if (request.status != 200) return

    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);

    console.log(data)

    this.setState({ characters: data, focusCharacter: data[0] })
  }

  request.send()
}

setFocusCharacter(character){
  this.setState({focusCharacter: character})
}


  render(){
    return (
      <div>
        <h2>character Container</h2>
        <CharacterSelector characters={this.state.characters} selectCharacter={this.setFocusCharacter.bind(this)}/>
        <CharacterDetail character={ this.state.focusCharacter } />
      </div>
    );
  }
}

export default CharacterContainer;