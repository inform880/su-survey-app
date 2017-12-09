/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { apiKey } from './apikey';
// import messages from './messages';
import { createTournament } from './actions';

const challonge = require('challonge');

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const client = challonge.createClient({
      apiKey: apiKey.key,
    });
    console.log(apiKey);
    return (
      <h1>
        <button onClick={() => createTournament(client)}>
          Create Tournament
        </button>
      </h1>
    );
  }
}
