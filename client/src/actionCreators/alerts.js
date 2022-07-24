import { v4 as uuidv4 } from 'uuid';

export const createAlert =
  (message, alertType, duration = 7000) =>
  (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: 'CREATE_ALERT',
      payload: { id, message, alertType },
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
        payload: id,
      });
    }, duration);
  };

export const removeAlert = (id) => {
  return {
    type: 'REMOVE_ALERT',
    payload: id,
  };
};
