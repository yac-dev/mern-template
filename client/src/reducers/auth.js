const INITIAL_STATE = { data: null };
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    case 'LOG_IN':
    case 'LOAD_ME':
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
