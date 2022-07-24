const INITIAL_STATE = {};

const votes = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_VOTE':
      return { ...state };
    default:
      return { ...state };
  }
};

export default votes;
