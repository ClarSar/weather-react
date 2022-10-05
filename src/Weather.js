import React from "react";
import axios from "axios";



export default function Weather(props) {
    function handleResponse(response) {
        alert (`the weather in ${response.data.name} is ${response.data.main.temp}°C`)
}
    let apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
return <h2> Hello from React</h2>;
}