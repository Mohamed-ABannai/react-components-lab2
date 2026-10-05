import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
function WeatherData({day,conditions,time,imgAlt,img}){

    return(
<>

<div className="weather">
  <h2>Day of the Week:{day}</h2>

<WeatherIcon img={img} imgAlt={imgAlt} />

  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>


</>


    )


}

export default WeatherData