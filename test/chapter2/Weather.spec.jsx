/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Weather } from 'chapter2/Weather';

const initialState = {
  weatherData: null,
  errorInfo: null
};

function setup(_state = initialState) {
  const actions = {
    fetchWeatherAsyncAction: jest.fn()
  };

  const state = { ...initialState, ..._state };
  const component = shallow(<Weather weather={state} {...actions} />);

  return {
    component,
    panel: component.find('.weather__panel'),
    button: component.find('.weather__button'),
    actions
  };
}


describe('Weather component:', () => {
  it('component should render correctly', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
  it('component should render "info" section correctly when weatherData is not null', () => {
    const mockData = {
      status: 200,
      city: '西安市',
      quality: '良',
      temperature: '20',
      advice: '极少数敏感人群应减少户外活动'
    };
    const { panel } = setup({ weatherData: mockData });
    const info = panel.find('.info');

    expect(info.length).toBe(1);
    expect(info.find('p').at(0).text()).toBe(`城市:${mockData.city}`);
    expect(info.find('p').at(1).text()).toBe(`温度:${mockData.temperature}`);
    expect(info.find('p').at(2).text()).toBe(`空气质量:${mockData.quality}`);
    expect(info.find('p').at(3).text()).toBe(`建议:${mockData.advice}`);
  });
  it('component should render "errorInfo" section correctly when errorInfo is not null', () => {
    const errorInfo = 'test error message';
    const { panel } = setup({ errorInfo });
    const error = panel.find('.error');
    expect(error.length).toBe(1);
    expect(error.text()).toBe(errorInfo);
  });
  // instance way to test
  it.skip('fetchWeatherAsyncAction should be triggered after clicked button', () => {
    const { component, actions } = setup();
    const ins = component.instance();
    ins.handleClick();
    expect(actions.fetchWeatherAsyncAction).toHaveBeenCalled();
  });
  // simulate evnet way to test
  it('fetchWeatherAsyncAction should be triggered after clicked button', () => {
    const { component, actions } = setup();
    const button = component.find('button');
    button.simulate('click');
    expect(actions.fetchWeatherAsyncAction).toHaveBeenCalled();
  });
});
