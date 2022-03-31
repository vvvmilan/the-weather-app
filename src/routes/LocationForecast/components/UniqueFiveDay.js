import React from 'react';
import moment from 'moment';
import Item from "../../../Components/Item";

const style = {
    padding: '5px',
}

function UniqueFiveDay({ key, weather }) {
    console.log(weather.dt)
    return (
        <Item
            key={key}
            elevation={2}
            style={style}
        >
            <div>{moment.unix(weather.dt).format("dddd")}</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_icon"/>
            <div>min: {Math.round(weather.temp.min *10) /10} &deg;C</div>
            <div>max: {Math.round(weather.temp.max *10) /10} &deg;C</div>
        </Item>
    );
}

export default UniqueFiveDay;
