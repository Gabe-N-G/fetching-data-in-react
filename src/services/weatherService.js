// src/services/weatherService.js
const API_KEY = 'eb9ad375fd1b41e58e4175852241510';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      //fetch without anything is natrually a get request.
      const data = await res.json();
      //changes the data and put it into json.
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

export { show };
//this is different than  our normal export default, since we are exported the show function, and there will be more functions.