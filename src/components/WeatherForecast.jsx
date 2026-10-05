import WeatherData from './WeatherData'
import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
const Weather=({img,imgAlt,day,conditions,time})=>{


return(
<>



      
      <WeatherData day={day} conditions={conditions} time={time}  img={img} imgAlt={imgAlt} />


</>

)


}


export default Weather