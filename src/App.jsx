import { useState } from 'react'

import './App.css'
import * as weatherService from './services/weatherService.js'
//alternatively  
//import {show} from './services/weatherService.js'
import WeatherSearch from './components/WeatherSearch.jsx'
import WeatherDetails from './components/WeatherDetails.jsx'

const App = () => {
  const [weather,setWeather] = useState({})

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  // The following log should be outside of the fetchData function
  console.log('State:', weather);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather}/>
    </main>
  );
};

export default App;