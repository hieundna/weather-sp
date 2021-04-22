import '../../styles/WeatherStatus.scss';
import Context from '../../contexts/context'
import { useContext } from 'react';

function WeatherStatus() {
    const {weather} = useContext(Context);
    return (
        <div className='main'>
            <div className='state-icon'>
                {weather ? 
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt='cloud-icon' /> 
                : <i className="fas fa-cloud fa-3x"></i> }
            </div>
            <div className='main-title'>
                <div className='state'>{weather?.weather[0]?.main || 'Not found'}</div>
                <div className='detail'>
                    <i className="fas fa-thermometer-half"></i>
                    <span>{weather?.main?.temp || '--'}°C</span>
                </div>
            </div>
            <div className='detail'>
                <i className="far fa-tint"></i>
                <span>{weather?.main?.humidity || '--'}%</span>
            </div>
        </div>
    );
}

export default WeatherStatus;
