import '../styles/HomePage.scss';
import Context from '../contexts/context'
import Summary from '../components/Summary/Summary';
import ChartWeather from '../components/ChartWeather/ChartWeather';
import { getWeatherInfor } from '../api'
import { useEffect, useState } from 'react';

function HomePage() {
    const [weather, setWeather] = useState();
    const city = ['Ho Chi Minh', 'Vinh', 'Singapore'];
    const [selectedCity, setSelectedCity] = useState('Singapore');
    let chartData = [
        {hour: '12 a.m', tide: 2.9, sun: 0, night: 8},
        {hour: '2 a.m', tide: 2.8, sun: 0, night: 8},
        {hour: '4 a.m', tide: 2.5, sun: 0, night: 8},
        {hour: '6 a.m', tide: 2, sun: 0.001, night: 8}, 
        {hour: '8 a.m', tide: 1.5, sun: 1.6, night: 0},
        {hour: '10 a.m', tide: 1, sun: 3.4, night: 0},
        {hour: '12 p.m', tide: 0.7, sun: 4.1, night: 0},
        {hour: '2 p.m', tide: 1, sun: 3.4, night: 0},
        {hour: '4 p.m', tide: 1.5, sun: 1.6, night: 0},
        {hour: '6 p.m', tide: 2, sun: 0.001, night: 8},
        {hour: '8 p.m', tide: 2.5, sun: 0, night: 8},
        {hour: '10 p.m', tide: 2.8, sun: 0, night: 8}
    ];
    chartData = [...chartData, ...chartData,...chartData,
        {hour: '12 a.m', tide: 2.9, sun: 0, night: 8}]
    useEffect(() => {
        getWeatherInformation()
    }, [selectedCity])

    const getWeatherInformation = async () => {
        try {
            const { data } = await getWeatherInfor(selectedCity);
            console.log('data',data);
            setWeather(data);
        } catch (error) {
            console.error('Error city:', error);
        }

    }

    return (
        <Context.Provider value={{ weather, city, selectedCity, chartData, setSelectedCity, getWeatherInformation }}>
            <div data-testid='container' className="container">
                <Summary />
                <ChartWeather />
            </div>
        </Context.Provider>
    );
}

export default HomePage;
