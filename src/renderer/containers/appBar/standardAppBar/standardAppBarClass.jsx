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

    this.interval = setInterval(this._changeIndex, 3000);
    this.leftInterval = setInterval(this._changeLeftIndex, 5000);
    this.state = {
      index: 0,
      images: [
        {
          src: 'assets/header.png',
          alt: 'header',
        },
        {
          src: 'assets/header2.png',
          alt: 'header2',
        },
      ],
      leftIndex: 0,
      leftImages: [
        {
          src: 'assets/leftheader.png',
          alt: 'left header1',
        },
        {
          src: 'assets/leftheader2.png',
          alt: 'left header2',
        },
        {
          src: 'assets/leftheader3.png',
          alt: 'left header3',
        },
      ],
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.leftInterval);
  }

  _changeIndex = () => {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      const newIndex = this.state.index + 1;
      this.setState({ index: newIndex });
    }
  }

  _changeLeftIndex = () => {
    if (this.state.leftIndex === this.state.leftImages.length - 1) {
      this.setState({ leftIndex: 0 });
    } else {
      const newIndex = this.state.leftIndex + 1;
      this.setState({ leftIndex: newIndex });
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

  _renderLeftImages = () => {
    const images = [];

    this.state.leftImages.forEach((item, index) => {
      const classes = equals(this.state.leftIndex, index) ? 'left-image -show' : 'left-image -hidden';
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
        {this._renderLeftImages()}
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
