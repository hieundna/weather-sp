import './Header.scss';
import Context from '../../contexts/context'
import { useContext, useEffect, useState } from 'react';

function Header() {
    const { selectedCity, setSelectedCity, city } = useContext(Context);
    const [show, setShow] = useState(false);

    const selectCity = (index) => {
        setShow(!show);
        setSelectedCity(city[index])
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
    useEffect(() => {
        window.addEventListener('click', windowClick);
        return () => {
            window.removeEventListener('click', windowClick);
        }
    }, [])

    return (
        <div className='header'>
            <div className='burger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='title'>
                <div>myENV</div>
                <div className='list-city' onClick={() => setShow(!show)}>
                    <span className='city-name'>{selectedCity}</span>
                    <i className="fal fa-angle-down fa-lg"></i>
                </div>
                <div className={`dropdown ${show ? 'show' : ''}`}>
                    {city?.map((cityName, idx) =>
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
