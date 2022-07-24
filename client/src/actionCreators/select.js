export const selectPoll = (poll) => {
  return {
    type: 'SELECT_POLL',
    payload: poll,
  };
};

export const selectOption = (option) => {
  return {
    type: 'SELECT_OPTION',
    payload: option,
  };
};
