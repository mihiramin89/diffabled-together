import React from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import Button from 'components/button';
import {
  HOME,
  CHAPTERSTART,
} from 'redux-modules/router/constants';

export default class StandardAppBar extends React.Component {
  static defaultProps = {
    routeName: HOME,
  }
  static propTypes = {
    goTo: PropTypes.func.isRequired,
    routeName: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.interval = setInterval(this._changeIndex, 7000);
    this.state = {
      index: 0,
      images: [
        {
          src: 'assets/header.png',
          alt: 'header',
        },
      ],
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _changeIndex = () => {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      const newIndex = this.state.index + 1;
      this.setState({ index: newIndex });
    }
  }

  _renderImages = () => {
    const images = [];

    this.state.images.forEach((item, index) => {
      const classes = equals(this.state.index, index) ? 'header-image -show' : 'header-image -hidden';
      images.push(
        <img
          alt={item.alt}
          className={classes}
          key={item.src}
          src={item.src}
        />,
      );
    });

    return images;
  }

  render() {
    return (
      <Flexbox
        alignItems="center"
        justifyContent="center"
        className="standard-bar"
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
        {this._renderImages()}
      </Flexbox>
    );
  }
}
