import '../../styles/Summary.scss';
import Header from '../Header/Header';
import WeatherStatus from '../WeatherStatus/WeatherStatus';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

function Summary() {
    return (
        <div role='summary' className='weather-sumary'>
            <Header />
            <WeatherStatus />
            <WeatherDetail />
        </div>
    );
}

export default Summary;
