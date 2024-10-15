import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as weatherService from './services/weatherService.js'
//alternatively  
//import {show} from './services/weatherService.js'


const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
};

export default App;