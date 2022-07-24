import { combineReducers } from 'redux';
import authReducer from './auth';
import modalReducer from './modal';
import pollsReducer from './polls';
import votesReducer from './votes';
import selectedReducer from './selected';
import alertsReducer from './alerts';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  polls: pollsReducer,
  votes: votesReducer,
  selected: selectedReducer,
  alerts: alertsReducer,
});

export default rootReducer;
