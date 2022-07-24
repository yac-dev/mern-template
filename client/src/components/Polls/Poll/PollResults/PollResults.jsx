// main libraries
import React from 'react';

// component
import TextResult from './TextResult/TextResult';

const PollResults = (props) => {
  switch (props.poll.type) {
    case 'text':
      return <TextResult poll={props.poll} />;
    case 'photo':
      return <div>Photo result</div>;
    case 'video':
      return <div>video result</div>;
    default:
      return null;
  }
};

export default PollResults;
