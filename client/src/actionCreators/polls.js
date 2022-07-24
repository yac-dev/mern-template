import { lampostAPI } from '../apis/lampost';
import { createAlert } from './alerts';

export const createPoll = (formData) => async (dispatch, getState) => {
  try {
    await lampostAPI.post('/polls', formData);
    dispatch(createAlert('Your poll has been created.', 'success'));
  } catch (error) {
    console.log(error);
    dispatch(createAlert('OOPS. Something wrong with your request...', 'error'));
  }
};

export const getPolls = () => async (dispatch, getState) => {
  try {
    const result = await lampostAPI.get('/polls');
    const { polls } = result.data;
    console.log(polls);
    dispatch({
      type: 'GET_POLLS',
      payload: polls,
    });
  } catch (error) {
    console.log(error);
  }
};
