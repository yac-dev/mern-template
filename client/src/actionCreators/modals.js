export const setCreatePollModal = (bool) => {
  return {
    type: 'OEPN_CREATE_POLL_MODAL',
    payload: bool,
  };
};

export const setSignupModal = (bool) => {
  return {
    type: 'OPEN_SIGNUP_MODAL',
    payload: bool,
  };
};

export const setLoginModal = (bool) => {
  return {
    type: 'OPEN_LOGIN_MODAL',
    payload: bool,
  };
};

export const setCropPhotoModal = (index, bool, imageData) => {
  return {
    type: 'SET_CROP_PHOTO_MODAL',
    payload: { index, bool, imageData },
  };
};

export const doneCropPhoto = (index, bool) => {
  return {
    type: 'DONE_CROP_PHOTO',
    payload: { index, bool },
  };
};

// export const setImage = (image) => {
//   return {
//     type: 'SET_IMAGE',
//     payload: image,
//   };
// };
