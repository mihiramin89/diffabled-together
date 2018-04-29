import React from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import Button from 'components/button';
import {
  HOME,
  CHAPTERSTART,
} from 'redux-modules/router/constants';

export default class FooterClass extends React.Component {
  static defaultProps = {
    routeName: HOME,
  }
  static propTypes = {
    goTo: PropTypes.func.isRequired,
    routeName: PropTypes.string,
  };

  render() {
    return (
      <Flexbox
        alignItems="center"
        justifyContent="center"
        className="footer"
        flexDirection="column"
      >
        <Flexbox
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          className="overlay"
        >
          <img
            alt="logo"
            className="title"
            src="assets/logo.png"
          />
          { equals(this.props.routeName, HOME) &&
            [
              <Flexbox
                alignItems="flex-start"
                className="menus"
                key="menus"
              >
                <a href="#events" className="menu-item"> Events</a>
                <a href="#story" className="menu-item"> Our Story</a>
                <a href="#chapters" className="menu-item"> Chapters</a>
              </Flexbox>,
              <Button
                color="accent"
                key="chapter"
                label="Create a Chapter"
                onClick={() => this.props.goTo(CHAPTERSTART)}
              />,
            ]
          }
        </Flexbox>
      </Flexbox>
    );
  }
}
