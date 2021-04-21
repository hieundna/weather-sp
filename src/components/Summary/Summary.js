import './Summary.scss';
import Header from '../Header/Header';
import WeatherStatus from '../WeatherStatus/WeatherStatus';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

function Summary() {
    return (
        <div className='weather-sumary'>
            <Header />
            <WeatherStatus />
            <WeatherDetail />
        </div>
    );
}

export default Summary;
