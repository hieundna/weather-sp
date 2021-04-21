import './ChartWeather.scss';
import Sun from '../../assets/sun'
import Moon from '../../assets/moon'
import Context from '../../contexts/context'
import { useContext, useEffect, useState } from 'react';
import { AreaChart, Legend, Label, ResponsiveContainer, Area, ReferenceArea, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function ChartWeather() {
    const { chartData } = useContext(Context);
    const [nightTime, setNightTime] = useState([{ start: 0, end: 3 }]);

    useEffect(() => {
        const night = chartData.length / 6;
        let arr = [{ start: 0, end: 3 }];
        if (night > 0) {
            for ( let i=0; i<night-1; i++) {
                if(i%2 == 0){
                    arr.push({ start: arr[i].end+6, end: arr[i].end+9})
                }
                else{
                    arr.push({ start: arr[i].end, end: arr[i].end+3})
                }
            }
        }
        console.log('Night', arr, 'nightime');
        setNightTime([...arr]);
    }, [])

    const mouseMove = () => {
        // console.log('Night', arr, 'nightime');
    }
    console.log('nightime', nightTime);
    return (
        <div className='weather-chart'>
            <div className='chart-type'>
                <span>Tide</span>
                <span>•</span>
                <span>Sunrire & Sunset</span>
            </div>
            <ResponsiveContainer width={2500} height='100%'>
                <AreaChart data={chartData}>
                    <XAxis dataKey="hour" padding={{ left: 30 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0 5" />
                    <Legend />
                    <Area type="monotone" dataKey="tide" stroke="#8884d8" fillOpacity={1} fill="#94d6f7" />
                    {nightTime ? nightTime.map((item) => (
                    <ReferenceArea x1={item.start} x2={item.end} y1={0} y2={8} strokeOpacity={1} >
                        {/* <Label value="Day 1" offset={0} position="outside" /> */}
                    </ReferenceArea>
                    )) : null}
                    <Area type="monotoneX" dataKey="sun" stroke="orange" fillOpacity={0} activeDot={<CustomizedActiveDot />} onMouseMove={mouseMove} points={[{ x: 12, y: 12, value: 240 }]} dot={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ payload, label, active }) => {
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
