/* eslint-disable arrow-body-style */
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'share/thunkMiddleware';
import { fetchWeatherAsyncAction } from 'chapter2/action';
import { WEATHER_FAIL, WEATHER_SUCCESS } from 'chapter2/const';
import apiJson from 'server/mockData.json';

describe('weather action:', () => {
  let store = null;

  beforeEach(() => {
    const initialState = {
      weatherData: null,
      errorInfo: null
    };
    const mockStore = configureStore([thunkMiddleware]);
    store = mockStore(initialState);
  });

  afterEach(() => {
    store.clearActions();
  });

  describe('fetchWeatherAsyncAction:', () => {
    it('should dispatch "WEATHER_SUCCESS" type when api succeed (style 1)', (done) => {
      store.dispatch(fetchWeatherAsyncAction()).then(() => {
        const { type, payload } = store.getActions()[0];
        expect(type).toBe(WEATHER_SUCCESS);
        expect(payload).toStrictEqual(apiJson);
        done();
      });
    });

    it('should dispatch "WEATHER_SUCCESS" type when api succeed (style 2)', () => {
      return store.dispatch(fetchWeatherAsyncAction()).then(() => {
        const { type, payload } = store.getActions()[0];
        expect(type).toBe(WEATHER_SUCCESS);
        expect(payload).toStrictEqual(apiJson);
      });
    });

    it('should dispatch ‘WEATHER_FAIL’ type when api fail ', () => {
      const originGet = axios.get;
      axios.get = jest.fn().mockRejectedValue({ message: 'test error message' });
      return store.dispatch(fetchWeatherAsyncAction()).catch(() => {
        const { type, payload } = store.getActions()[0];
        expect(type).toBe(WEATHER_FAIL);
        expect(payload).toStrictEqual('test error message');
        axios.get = originGet;
      });
    });
  });
});