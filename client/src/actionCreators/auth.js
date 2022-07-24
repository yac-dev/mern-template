import { lampostAPI } from '../apis/lampost';

export const signup = (formData) => async (dispatch, getState) => {
  const result = await lampostAPI.post('/auth/signup', formData);
  const { user, jwtToken } = result.data;
  localStorage.setItem('lampost token', jwtToken);
  localStorage.setItem('after signup', true);

  dispatch({
    type: 'SIGN_UP',
    payload: user,
  });
  window.location = '/';
  // dispatch(alertActionCreator('Something wrong with your email or password. Please try again.', 'error', 7000));
};

export const login = (formData) => async (dispatch, getState) => {
  try {
    const result = await lampostAPI.post('/auth/login', formData);
    const { user, jwtToken } = result.data;
    localStorage.setItem('lampost token', jwtToken);
    localStorage.setItem('after login', true);
    dispatch({
      type: 'LOG_IN',
      payload: user,
    });
    window.location = '/';
  } catch (error) {
    const errorMessage = error.response.data.message;
    // dispatch(alertActionCreator('Something wrong with your email or password. Please try again.', 'error', 7000));
  }
};

export const loadMe = (jwtToken) => async (dispatch, getState) => {
  try {
    const result = await lampostAPI.get('/auth/loadMe', {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    });
    const { user } = result.data;

    dispatch({
      type: 'LOAD_ME',
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};
