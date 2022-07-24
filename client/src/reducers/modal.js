const INITIAL_STATE = {
  createPoll: {
    isOpen: false,
  },
  login: {
    isOpen: false,
  },
  signup: {
    isOpen: false,
  },
  cropPhoto: {},
  // 最終的に、
  //{1: {isOpen: false,imageData: ''}, 2: {isOpen: false,imageData: ''}, 3" {isOpen: false,imageData: ''}, 4: {isOpen:false,imageData: '',}}
  // ていうようなdata structureにならんといかん。
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OEPN_CREATE_POLL_MODAL':
      return { ...state, createPoll: { isOpen: action.payload } };
    case 'OPEN_LOGIN_MODAL':
      return { ...state, login: { isOpen: action.payload } };
    case 'OPEN_SIGNUP_MODAL':
      return { ...state, signup: { isOpen: action.payload } };
    case 'SET_CROP_PHOTO_MODAL':
      const previousCrops = { ...state.cropPhoto };
      previousCrops[action.payload.index] = { isOpen: action.payload.bool, imageData: action.payload.imageData };
      return { ...state, cropPhoto: previousCrops };
    case 'DONE_CROP_PHOTO':
      const prevCrops = { ...state.cropPhoto };
      // const done = { ...prevCrops[action.payload.index] };
      prevCrops[action.payload.index].isOpen = false;
      return { ...state, cropPhoto: prevCrops };
    default:
      return { ...state };
  }
};

export default modalReducer;
