import { lampostAPI } from '../apis/lampost';

export const createVote = (optionId) => async (dispatch, getState) => {
  try {
    const pollId = getState().selected.poll.data._id;
    const result = await lampostAPI.post('/votes', { pollId, optionId });
    const { vote } = result.data;
    dispatch({
      type: 'CREATE_VOTE',
      payload: vote,
    });
  } catch (error) {
    console.log(error);
  }
};
