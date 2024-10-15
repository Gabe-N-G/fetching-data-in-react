// src/components/WeatherDetails.jsx
const WeatherDetails = (props) => {
    const {location, temperature, condition} = props.weather
    console.log('WeatherDetails props:', props);
    return (
      <section>
        <h2>Weather Details</h2>
        <p>Location: {location}</p>
        <p>Temperature: {temperature}</p>
        <p>Condition: {condition}</p>
      </section>
    );
  };
  
  export default WeatherDetails;
  