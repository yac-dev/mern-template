const INITIAL_STATE = { data: {} };

// 特定のupdateにはこれでii。
// [action.id]: {
//           ...state[action.id],
//           isChecked: !state[action.id].isChecked
//         }

const polls = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POLLS':
      const polls = {}; // object keyed by id
      action.payload.forEach((poll) => {
        polls[poll._id] = poll;
      });
      return { ...state, data: polls };
    default:
      return { ...state };
  }
};

export default polls;
