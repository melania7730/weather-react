import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "72f2ed2ea6be925ebac9cd943aeca284";
  let apiUnit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=${apiKey}&units=${apiUnit}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
