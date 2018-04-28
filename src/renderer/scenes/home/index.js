import { connect } from 'react-redux';

import { goTo } from 'redux-modules/router/thunks';
import Home from './homeClass';
import './home.scss';

const actions = {
  goTo,
};

export default connect(
  null,
  actions,
)(Home);
