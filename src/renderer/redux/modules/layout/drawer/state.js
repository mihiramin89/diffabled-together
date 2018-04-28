import {
  HOME,
  CHAPTERSTART,
} from 'redux-modules/router/constants';
import {
  LEFT,
} from 'redux-modules/layout/drawer/constants';

export default {
  openDrawers: {},
  sidesByRoute: {
    [HOME]: [LEFT],
    [CHAPTERSTART]: [LEFT],
  },
};
