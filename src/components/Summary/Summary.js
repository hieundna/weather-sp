import '../../styles/Summary.scss';
import Header from '../Header/Header';
import { useAppContext } from '../../contexts/context'
import { getWeatherData } from '../../api/index'
import { getWeatherInfor } from '../../contexts/actions/action'
import { useEffect } from 'react';
import WeatherStatus from '../WeatherStatus/WeatherStatus';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

function Summary() {

    const dispatch = useAppContext()[1]
    useEffect(() => {
        const getData = async () => {
            try {
                let data = await getWeatherData('Singapore');
                dispatch(getWeatherInfor(data.data));
            } catch (error) {
                console.error('Error get data: ', error);
            }
        }
        getData()
    }, [])

    return (
        <div role='summary' className='weather-sumary'>
            <Header />
            <WeatherStatus />
            <WeatherDetail />
        </div>
    );
}

export default Summary;
