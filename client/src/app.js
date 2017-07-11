import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from './containers/CharacterContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <CharacterContainer />,
    document.getElementById('app')
  );
};
