import '../../styles/Header.scss';
// import Context from '../../contexts/context'
import { getWeatherData } from '../../api/index';
import { getWeatherInfor } from '../../contexts/actions/action';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../contexts/context';

function Header() {
    const [stateData, dispatch] = useAppContext();
    const [selectedCity, setSelectedCity] = useState('Singapore');

    const [show, setShow] = useState(false);

    useEffect(async () => {
        window.addEventListener('click', windowClick);
        return () => {
            window.removeEventListener('click', windowClick);
        }
    }, [])

    const selectCity = async (index) => {
        setShow(!show);
        try {
            const data = await getWeatherData(stateData.city[index]);
            dispatch(getWeatherInfor(data.data));
            setSelectedCity(stateData.city[index]);
        } catch (error) {
            console.error('Error city:', error);
        }
    }

    const windowClick = e => {
        if (!e.target.classList.contains('dropdown')
            && !e.target.classList.contains('option')
            && !e.target.classList.contains('list-city')
            && !e.target.classList.contains('city-name')
            && !e.target.classList.contains('fal')) {
            setShow(false);
            return;
        }
    };

    return (
        <div className='header'>
            <div className='burger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='title'>
                <div role='myENV-test'>myENV</div>
                <div className='list-city' onClick={() => setShow(!show)}>
                    <span className='city-name'>{selectedCity}</span>
                    <i className="fal fa-angle-down fa-lg"></i>
                </div>
                <div className={`dropdown ${show ? 'show' : ''}`}>
                    {stateData.city?.map((cityName, idx) =>
                        <div key={idx}
                            className='option'
                            onClick={() => selectCity(idx)}
                        >
                            {cityName}
                        </div>
                    )}
                </div>
            </div>
            <div><i className="fas fa-bell fa-2x"></i></div>
        </div>
    );
}

export default Header;
