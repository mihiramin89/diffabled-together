import React, { createElement } from 'react';
import { isNil } from 'ramda';

import AppBar from 'components/appBar';

import StandardAppBar from './standardAppBar';

export default class MainAppBar extends React.Component {
  _getAppBar = () => ({ container: StandardAppBar, open: true })

  render() {
    const appBar = this._getAppBar();

    if (isNil(appBar.container)) return null;
    return (
      <AppBar showAppBar={appBar.open} tall={appBar.tall}>
        {createElement(appBar.container)}
      </AppBar>
    );
  }
}
