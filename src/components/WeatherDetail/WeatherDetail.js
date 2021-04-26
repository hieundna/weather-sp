import '../../styles/WeatherDetail.scss';
import { useAppContext } from '../../contexts/context'
// import { useContext } from 'react';

function WeatherDetail() {
    const [{weather}] = useAppContext();
    
    return (
        <div className='weather-detail'>
            <div className='col-detail'>
                <div className='title-detail'> PSI</div>
                <div className='detail-value psi'>{parseInt(weather?.main?.feels_like || 23)}</div>
                <div className='detail-state'>Good</div>
            </div>
            <div className='col-detail'>
                <div className='title-detail'> RAIN</div>
                <div className='detail-value'>{weather && weather.rain ? weather['rain']['1h'] : 0}</div>
                <div className='detail-state'>mm</div>
            </div>
            <div className='col-detail'>
                <div className='title-detail'> DENGUE</div>
                <div className='circle-icon'></div>
            </div>
            <div className='col-detail'>
                <div className='add-icon'><i className="far fa-plus-circle fa-2x"></i></div>
                <div className='add-text'>Add</div>
            </div>
        </div>
    );
}

export default WeatherDetail;
