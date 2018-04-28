import React from 'react';
import Flexbox from 'flexbox-react';

export default class ChapterStartClass extends React.Component {
  render() {
    return (
      <Flexbox
        className="chapter-start"
        justifyContent="center"
        width="100%"
      >
        <div>Chapter start page</div>
      </Flexbox>
    );
  }
}
