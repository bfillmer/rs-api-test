
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { store } from 'store';
import { Videos } from 'Videos';

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
class App extends Component {
  componentWillMount () {
    this.setState(this.props.store());
    this.props.store.subscribe(s => this.setState(s));
  }

  render () {
    // Little wonky, no default component containing videos as part of a
    // larger application.
    return this.state.videos ?
      <Videos { ...this.state } action = { this.props.store } /> :
      <div></div>;
  }
}

App.propTypes = {
  store: PropTypes.func.isRequired,
};

// Render our application.
render(
  <App store = { store } />,
  document.getElementById('app')
);
