const INITIAL_STATE = {
  poll: {
    isSelected: false,
    data: {},
  },
  option: {
    isSelected: false,
    data: {},
  },
};

const selected = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_POLL':
      return { ...state, poll: { isSelected: true, data: action.payload } };
    case 'SELECT_OPTION':
      return { ...state, option: { isSelected: true, data: action.payload } };
    default:
      return { ...state };
  }
};

export default selected;
