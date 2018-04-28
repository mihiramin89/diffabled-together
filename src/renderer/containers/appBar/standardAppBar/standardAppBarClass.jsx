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
          src: 'http://placekitten.com/g/400/200',
          alt: 'test1',
        },
        {
          src: 'assets/img1.jpg',
          alt: 'test2',
        },
        {
          src: 'assets/img2.jpg',
          alt: 'test3',
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
          <div className="title">
            <div>Diffabled</div>
            <div>Together</div>
          </div>
          <Flexbox
            className="menus"
            alignItems="flex-start"
          >
            <div className="menu-item"> Events</div>
            <div className="menu-item"> Our Story</div>
            <div className="menu-item"> Chapters</div>
          </Flexbox>
        </Flexbox>
        { equals(this.props.routeName, HOME) &&
          <Button
            color="accent"
            label="Create a Chapter"
            onClick={() => this.props.goTo(CHAPTERSTART)}
          />
        }
        {this._renderImages()}
      </Flexbox>
    );
  }
}
