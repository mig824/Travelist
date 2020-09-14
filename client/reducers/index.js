import { combineReducers } from 'redux';
import formReducer from './formReducer';

import travelReducer from './travelReducer';
import formReducer from './formReducer';

const combinedReducers = combineReducers({
  trips: travelReducer,
  form: formReducer,
});

export default combinedReducers;
