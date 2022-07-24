// main libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// component
import Poll from './Poll/Poll';

// ac
import { getPolls } from '../../actionCreators/polls';

const Polls = (props) => {
  useEffect(() => {
    props.getPolls();
  }, []);

  const renderPolls = () => {
    if (props.polls.length) {
      const pollsList = props.polls.map((poll) => {
        return <Poll key={poll._id} poll={poll} />;
      });

      return <>{pollsList}</>;
    }
  };

  return <div style={{ position: 'absolute', top: '56px' }}>{renderPolls()}</div>;
};

const mapStateToProps = (state) => {
  return { polls: Object.values(state.polls.data) };
};

export default connect(mapStateToProps, { getPolls })(Polls);
