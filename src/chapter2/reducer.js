import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS
} from './const';

const initialState = {
  weatherData: null,
  errorInfo: null,
  loading: false
};

function weather(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        errorInfo: action.payload
      };
    default:
      return state;
  }
}

export default weather;
