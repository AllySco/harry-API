import React from 'react';

class CharacterSelector extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectIndex : undefined
    };
  }

handleChange(event){
  const newIndex = event.target.value;
  this.setState({ selectedIndex: newIndex })

  const selectedCharacter =this.props.characters[newIndex];
  this.props.selectCharacter(selectedCharacter);
}



  render() {
    console.log(this.props.characters)

    const options = this.props.characters.map((character, index) => {
      return <option value={index} key={index}> {character.name} </option>
    })
    return (
      <div className ="da-button">
      <select id="characters" value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
        {options}
      </select>
      </div>
    );
  }
}

export default CharacterSelector;