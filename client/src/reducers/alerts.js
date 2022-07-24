const INITIAL_STATE = [];

const alerts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_ALERT':
      return [...state, action.payload];
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alerts;
