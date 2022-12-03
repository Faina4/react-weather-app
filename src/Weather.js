import React from "react";
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner'

export default function Weather(props){
function handleResponse(response){
    alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)} °C`)
}

let apiKey="d08b5ff65675f4663f3c5d9f116c9748";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`


axios.get(apiUrl).then(handleResponse);
    return(
        <h3>
           <CirclesWithBar
  height="85"
  width="85"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor="yellowgreen"
  innerCircleColor="blueviolet"
  barColor="magenta"
  ariaLabel='circles-with-bar-loading'
/>
        </h3>
    )
}