import React, { createElement } from 'react';
import { isNil } from 'ramda';
import PropTypes from 'prop-types';

import AppBar from 'components/appBar';

import StandardAppBar from './standardAppBar';
import Footer from './footer';

export default class MainAppBar extends React.Component {
  static defaultProps = {
    isFooter: false,
  }

  static propTypes = {
    isFooter: PropTypes.bool,
  }

  _getAppBar = () => {
    if (this.props.isFooter) {
      return ({ container: Footer, open: true });
    }

    return ({ container: StandardAppBar, open: true });
  }

  render() {
    const appBar = this._getAppBar();
    if (isNil(appBar.container)) return null;
    return (
      <AppBar
        className={this.props.isFooter ? '-footer' : ''}
        showAppBar={appBar.open}
        tall={appBar.tall}
      >
        {createElement(appBar.container)}
      </AppBar>
    );
  }
}
