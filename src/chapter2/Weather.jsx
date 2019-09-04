/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAsyncAction } from './action';
import './style.less';

export class Weather extends React.PureComponent {

  handleClick = () => {
    this.props.fetchWeatherAsyncAction();
  }

  render() {
    const { weather: { weatherData } } = this.props;

    return (
      <div className="weather">
        <div className="weather__panel">
          {
            weatherData && (
              <div>
                <p>城市:{weatherData.city}</p>
                <p>温度:{weatherData.temperature}</p>
                <p>最高温度:{weatherData.high}</p>
                <p>最低温度:{weatherData.low}</p>
                <p>空气质量:{weatherData.quality}</p>
                <p>建议:{weatherData.advise}</p>
              </div>
            )
          }
        </div>
        <div className="weather__button">
          <button type="button" onClick={this.handleClick}>西安天气</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    weather: state.weather
  }),
  {
    fetchWeatherAsyncAction
  }
)(Weather);
