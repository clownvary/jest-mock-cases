import { combineReducers } from 'redux';
import weather from '../chapter2/reducer';

const rootReducer = combineReducers({
  weather
});
export default rootReducer;
