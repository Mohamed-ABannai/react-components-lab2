// src/App.jsx
import Weather from "./components/WeatherForecast";
const App = () => {

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5WconllpwwKrmTqMg1J2Eld_QwHD2NQLQczarwgVpA&s=10',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYK0pGROucpFCSpOpVhc6HMSdf3ZEw6BtJ4-iD2KvA9Q&s=10',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6JBQmQUPi47XbJDoxX9PvYE3qaSn38mEhkd9NjyGzA&s',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlazC5nw0GeaYkfsIhcACzrsy5a040Hnvzlj57ZTw9gw&s=10',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFXwFdjYAgwqUG64HXcBYpXKQWFn3eMekNIsECoKX3Q&s=10',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

  return (
      <>
    <h1>Local Weather</h1>
    <section>
   {weatherForecasts.map((oneDay)=>
    <div>
    <Weather {...oneDay}/>
    </div>
  )}
    </section>

     
  </>

   
  );
}

export default App
