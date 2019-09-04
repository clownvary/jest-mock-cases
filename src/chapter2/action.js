import axios from 'axios';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS
} from './const';

export const fetchWeatherAsyncAction = () => (dispatch) => {
  axios.get('/api/weather/city')
    .then((res) => {
      const { data } = res;
      dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
    });
};

export default fetchWeatherAsyncAction;
