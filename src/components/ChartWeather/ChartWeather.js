import './ChartWeather.scss';
import Sun from '../../assets/sun'
import Moon from '../../assets/moon'
import Context from '../../contexts/context'
import { useContext, useEffect, useState } from 'react';
import { AreaChart, ResponsiveContainer, Label, Area, ReferenceArea, CartesianGrid, XAxis, Tooltip } from 'recharts';

function ChartWeather() {
    const { chartData } = useContext(Context);
    const [nightTime, setNightTime] = useState([{ start: 0, end: 3 }]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const night = parseInt(chartData.length / 12);
        let arr = [{ start: 0, end: 3 }];
        if (night > 0) {
            for (let i = 0; i < night; i++) {
                if (i !== night - 1) {
                    arr.push({ start: arr[i].end + 6, end: arr[i].end + 12 })
                }
                else {
                    arr.push({ start: arr[i].end + 6, end: arr[i].end + 9 })
                }
            }
        }
        console.log('windowOffset:', window.innerWidth);
        console.log('NightTime', arr);
        setNightTime([...arr]);

        window.addEventListener('resize', onResizeWidth);
        return () => {
            window.removeEventListener('resize', onResizeWidth);
        }
    }, [])


    const onResizeWidth = e => {
        const width = e.target.innerWidth;
        setWindowWidth(width)
    };
    return (
        <div className='weather-chart'>
            <ResponsiveContainer width={2500} height='100%'>
                <AreaChart data={chartData}>
                    <XAxis dataKey="hour" padding={{ left: 30 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0 5" />
                    <Area type="monotone" dataKey="tide" stroke="#8884d8" fillOpacity={1} fill="#94d6f7" />
                    {nightTime ? nightTime.map((item, idx) => (
                        <ReferenceArea key={idx} x1={item.start} x2={item.end} y1={0} y2={8} strokeOpacity={1} >
                            {
                                idx !== nightTime.length - 1
                                && <Label 
                                    value={`Day ${idx + 1}`} 
                                    offset={50} 
                                    position="right"
                                />
                            }
                        </ReferenceArea>
                    )) : null}
                    <Area
                        type="monotoneX"
                        dataKey="sun"
                        stroke="orange"
                        fillOpacity={0}
                        dot={windowWidth < 800 ? <CustomizedActiveDot /> : false}
                        activeDot={<CustomizedActiveDot />}
                    />
                </AreaChart>
            </ResponsiveContainer>
            <div className='chart-type'>
                <span>Tide</span>
                <span>•</span>
                <span>Sunrire & Sunset</span>
            </div>
        </div>
    );
}

const CustomTooltip = ({ payload, active }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Tide : ${payload[0].value}m`}</p>
            </div>
        );
    }

    return null;
}

const CustomizedActiveDot = (props) => {
    const { cx, cy, value } = props;
    if (value[1] > 0) {
        return (
            <Sun cx={cx} cy={cy} />
        );
    }
    return (
        <Moon cx={cx} cy={cy} />
    );
};

export default ChartWeather;
