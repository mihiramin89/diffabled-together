import { connect } from 'react-redux';
import { select } from 'redux-modules/general';

import { routeName } from 'redux-modules/router/paths';
import { goTo } from 'redux-modules/router/thunks';
import FooterClass from './footerClass';
import './footer.scss';

const mapStateToProps = state => ({
  routeName: select(routeName, state),
});

const actions = {
  goTo,
};

export default connect(
  mapStateToProps,
  actions,
)(FooterClass);
